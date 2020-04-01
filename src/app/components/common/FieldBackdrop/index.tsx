import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Spacing } from 'app/theme';

type Props = {
  label?: string;
  children: ReactNode;
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

export const FieldBackdrop = (props: Props) => {
  return <BaseComponent>{props.children}</BaseComponent>;
};
