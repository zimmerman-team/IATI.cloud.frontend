import React from 'react';
import { IconButton } from 'app/components/inputs/buttons/IconButton';
import { ArticleCardModel } from 'app/components/surfaces/Cards/ArticleCard/model';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { Skeletor } from 'app/components/utils/Skeletor';
import { Box, Grid, Typography } from '@material-ui/core';

export const ArticleCard = (props: ArticleCardModel) => {
  return (
    <Grid container direction="column" justify="flex-end" spacing={4}>
      {/** card title */}
      <Grid item md={12}>
        {props.loaded ? (
          <Typography variant="h5" component="h3">{props.title}</Typography>
        ) : (
          <Skeletor height="30px" width="100%" />
        )}
      </Grid>

      {/** card description */}
      <Grid item md={12}>
        <Box height="150px">
          {props.loaded ? (
            <Typography variant="body1" >{props.description}</Typography>
          ) : (
            <Skeletor type="text" height="100%" width="100%" />
          )}
        </Box>
      </Grid>

      {/** card button */}

      <Grid item>
        <Grid container justify="flex-end" spacing={4}>
          <Grid item md={6}>
            {props.loaded ? (
              props.path && (
                <IconButton
                  label={props.buttonLabel}
                  icon={<ArrowForward fontSize="small" />}
                  link={props.path && props.path}
                  target={props.target}
                />
              )
            ) : (
              <Skeletor height="42px" width="100%" />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
