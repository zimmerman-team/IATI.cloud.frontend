import React, { ReactNode } from 'react';
import { components } from 'react-select';
import { IndicatorProps } from 'react-select/lib/components/indicators';

import Clear from '@material-ui/icons/Clear';

interface OptionType {
  children?: ReactNode;
}

function ClearIndicator(props: IndicatorProps<OptionType>) {
  // todo: get rid of error
  // @ts-ignore
  return (
    <components.ClearIndicator {...props}>
      <Clear />
    </components.ClearIndicator>
  );
}

export default ClearIndicator;
