import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import { Box as Base } from '@material-ui/core';

const Box = styled(Base)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Progress: React.FC = props => {
  return (
    <Box>
      <CircularProgress {...props} size={70} thickness={3.6} color="primary" />
    </Box>
  );
};

export default Progress;
