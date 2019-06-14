import React from 'react';
import styled from 'styled-components';
import { Spacing } from 'app/theme/index';

type Props = {
  label?: string;
};

const BaseComponent = styled.div`
  position: relative;
  height: 48px;
  border-radius: 2px;
  background-color: #f0f3f7;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //padding-left: ${Spacing.inputSideSpacing};
  //padding-right: ${Spacing.inputSideSpacing};
`;

const FieldBackdrop: React.FC<Props> = props => {
  return <BaseComponent>{props.children}</BaseComponent>;
};

export default FieldBackdrop;
