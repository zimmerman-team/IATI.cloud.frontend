import React, { ReactNode } from 'react';
import Clear from '@material-ui/icons/Clear';

interface OptionType {
  children?: ReactNode;
}

const ClearIndicator: React.FC<OptionType> = props => {
  return (
    <React.Fragment {...props}>
      <Clear />
    </React.Fragment>
  );
};

export default ClearIndicator;
