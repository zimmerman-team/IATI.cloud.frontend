import React, { ReactNode } from 'react';
import { components } from 'react-select';
import { IndicatorProps } from 'react-select/lib/components/indicators';

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
