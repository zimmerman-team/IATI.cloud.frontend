import React from 'react';
import styled from 'styled-components';
import Component from '@material-ui/core/TableCell';

type Props = {
  label?: string;
};

const BaseComponent = styled(props => (
  <Component {...props}>{props.value}</Component>
))`
  && {
    //border-bottom-color: #f0f3f7 !important;
    //border-bottom-color: red !important;
    //border-top-color: yellow !important;
  }
`;

const TableCell: React.FC<Props> = props => {
  return <BaseComponent {...props} />;
};

export default TableCell;
