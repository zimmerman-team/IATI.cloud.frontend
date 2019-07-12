import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import styled from 'styled-components';
import React from 'react';
import TooltipButton from 'app/components/inputs/buttons/TooltipButton';

type Props = {
  title: string;
  tip?: string;
};

const GroupTitle = styled(props => <FormLabel {...props} />)`
  && {
    font-size: 12px;
    color: black;
  }
`;

export const RadioGroupTitle = (props: Props) => {
  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item>
        <GroupTitle component="legend">{props.title}</GroupTitle>
      </Grid>
      {props.tip && (
        <Grid item>
          <TooltipButton tip={props.tip} />
        </Grid>
      )}
    </Grid>
  );
};
