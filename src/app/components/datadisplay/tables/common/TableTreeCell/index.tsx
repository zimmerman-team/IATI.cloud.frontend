import React from 'react';
import styled from 'styled-components';

import { TableTreeColumn } from 'app/utils/dx-react-grid-material-ui/dx-react-grid-material-ui.es';
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

const TableTreeCell: React.FC<Props> = props => {
  return <BaseComponent {...props} />;
};

export default TableTreeCell;
