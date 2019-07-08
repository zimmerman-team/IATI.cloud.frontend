import React from 'react';
import styled from 'styled-components';
import Component from '@material-ui/core/TableRow';

type Props = {
  label?: string;
};

const BaseComponent = styled(props => <Component {...props} />)`
  && {
    height: 50px;
    & [class*='TableTreeContentBase-content'],
    & [class*='MuiTableCell-root'] {
      color: black;
      border: initial;
    }

    &:nth-child(even) {
      background-color: #f0f3f7;
    }
  }
`;

const TableRow = (props: Props) => {
  return <BaseComponent {...props} />;
};

export default TableRow;
