/* base */
import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Grid, Container, Box } from '@material-ui/core';

type FragmentProps = {
  title: string;
  info: string;
};

const Fragment = styled(props => <Grid {...props} />)`
  && {
  }
`;
const FragmentHeader = styled(props => <Grid {...props} />)`
  && {
    margin-bottom: 54px;
  }
`;
const FragmentTitle = styled(props => <Typography {...props} />)``;
const FragmentInfo = styled(props => <Typography {...props} />)`
  && {
    color: rgba(1, 1, 10, 0.71);
  }
`;
const FragmentContent = styled(props => <Grid {...props} />)`
  && {
    //min-height: 200px;
    //background-color: #f0f3f7;
    border-radius: 2px;
  }
`;

const ModuleFragment: React.FC<FragmentProps> = props => {
  return (
    <Fragment container>
      <FragmentHeader item xs={6}>
        <Box marginBottom={1}>
          <Typography variant="h6" color="textPrimary">
            {props.title}
          </Typography>
        </Box>
        <Typography variant="body2" color="textSecondary">
          {props.info}
        </Typography>
      </FragmentHeader>
      <FragmentContent item xs={8}>
        {props.children}
      </FragmentContent>
    </Fragment>
  );
};

export default ModuleFragment;
