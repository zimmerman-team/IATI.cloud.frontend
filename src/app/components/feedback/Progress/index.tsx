import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

const Base = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Progress: React.FC = props => {
  return (
    <Base>
      <CircularProgress {...props} size={70} thickness={3.6} color="primary" />
    </Base>
  );
};

export default Progress;
