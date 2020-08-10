/* core */
import React from 'react';
/* third-party */
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
/* project component */
import { TooltipButton } from 'app/components/inputs/buttons/TooltipButton';

type Props = {
  title: string;
  tip?: string | React.ReactNode;
};

const GroupTitle = styled((props) => <FormLabel {...props} />)`
  && {
    color: black;
    font-size: 12px;
    font-weight: normal;
    letterspacing: '0.4202px';
  }
`;

export const RadioGroupTitle = (props: Props) => {
  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item>
        <GroupTitle component="legend">{props.title}</GroupTitle>
      </Grid>
      {props.tip && <TooltipButton tip={props.tip} />}
    </Grid>
  );
};
