import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { useSize } from 'react-use';
import styled from 'styled-components';
{
  /** todo: make a custom component based on the skeleton component and add extra features */
}
const SizeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 12px;
`;

export const Skeletor = () => {
  const [sized, { width, height }] = useSize(({ width }) => (
    <SizeContainer>{width}px</SizeContainer>
  ));

  return (
    <Skeleton disableAnimate width="100%" height="48px">
      {sized}
    </Skeleton>
  );
};
