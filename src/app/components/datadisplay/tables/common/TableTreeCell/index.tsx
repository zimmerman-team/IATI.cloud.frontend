import React from 'react';
import styled from 'styled-components';

import { TableTreeColumn } from '@devexpress/dx-react-grid-material-ui';
type Props = {
  label?: string;
};

const BaseComponent = styled(props => (
  <TableTreeColumn {...props}>{props.value}</TableTreeColumn>
))`
  && {
    //border-bottom-color: #f0f3f7 !important;
    border-bottom-color: blue !important;
  }
`;

const TableTreeCell = (props: Props) => {
  return <BaseComponent {...props} />;
};

export default TableTreeCell;
