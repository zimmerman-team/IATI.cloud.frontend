import React from 'react';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';

const FragmentDivider: React.FC = styled(Divider)`
  && {
    margin-top: 60px;
    margin-bottom: 60px;
    background-color: #f0f3f7;
  }
`;

export default FragmentDivider;
