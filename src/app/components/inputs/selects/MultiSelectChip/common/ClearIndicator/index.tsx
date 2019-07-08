import React, { ReactNode } from 'react';
import Clear from '@material-ui/icons/Clear';

interface OptionType {
  children?: ReactNode;
}

const ClearIndicator = (props: OptionType) => {
  return (
    <React.Fragment {...props}>
      <Clear />
    </React.Fragment>
  );
};

export default ClearIndicator;
