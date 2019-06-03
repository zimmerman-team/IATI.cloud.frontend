import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Progress: React.FC = props => {
  return (
    <CircularProgress {...props} size={70} thickness={3.6} color="primary" />
  );
};

export default Progress;
