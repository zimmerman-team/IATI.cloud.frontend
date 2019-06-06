import React from 'react';
import styled from 'styled-components';
import Component from '@material-ui/core/TableRow';

type Props = {
  label?: string;
};

const BaseComponent = styled(props => <Component {...props} />)`
  && {
    height: 50px;
    &:nth-child(even) {
      background-color: #f0f3f7;
    }
  }
`;

const TableRow: React.FC<Props> = props => {
  return <BaseComponent {...props} />;
};

export default TableRow;
