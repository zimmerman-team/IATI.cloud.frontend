import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Card as MuiCard } from '@material-ui/core';
import { CardContent as MuiCardContent } from '@material-ui/core';
import IconButton from 'app/components/inputs/buttons/IconButton';
import { ArticleCardModel } from 'app/components/surfaces/Cards/ArticleCard/model';
import ArrowForward from '@material-ui/core/SvgIcon/SvgIcon';
import Grid from '@material-ui/core/Grid';

const Card = styled(props => <MuiCard {...props} />)`
  && {
    box-shadow: none;
    padding-right: 62px;
  }
`;

const CardContent = styled(props => <MuiCardContent {...props} />)`
  && {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled(props => <Typography {...props} />)`
  && {
    margin-bottom: 32px;
  }
`;

const CardIconButton = styled(props => <IconButton {...props} />)`
  && {
    display: flex;
    justify-self: flex-end;
    align-self: flex-end;
  }
`;

export const ArticleCard = (props: ArticleCardModel) => {
  return (
    <Card>
      <CardContent>
        <Title variant="h5">{props.title}</Title>
        <Typography variant="body1">{props.description}</Typography>
        <Grid item xs={6} justify="flex-end">
          <CardIconButton
            label={props.buttonLabel}
            icon={<ArrowForward fontSize="small" />}
          />
        </Grid>
      </CardContent>
    </Card>
  );
};
