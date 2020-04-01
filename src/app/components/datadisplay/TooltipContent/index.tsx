import React from 'react';
import styled from 'styled-components';

type Props = {
  text?: string;
};

const BaseComponent = styled.div`
  width: 200px;
  background-color: #222224;
  color: white;
  border-radius: 4px;
  font-size: 12px;
  padding: 12px;
`;

export const TooltipContent = (props: Props) => {
  return (
    <BaseComponent {...props}>
      {props.text ? props.text : 'empty'}
    </BaseComponent>
  );
};
