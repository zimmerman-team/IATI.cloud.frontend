import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { useSize } from 'react-use';
import styled from 'styled-components';
{
  /** todo: make a custom component based on the skeleton component and add extra features */
}
const SizeContainer = styled.div`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 12px;
  }
`;

type SkeletorModel = {
  width?: string;
  height?: string;
  debug?: boolean;
  type?: any;
};

export const Skeletor = (props: SkeletorModel) => {
  const [sized, { width, height }] = useSize(({ width, height }) => (
    <SizeContainer>
      {width} x {height}
    </SizeContainer>
  ));

  return (
    <Skeleton
      disableAnimate
      variant="rect"
      width={props.width}
      height={props.height}
    >
      {sized}
    </Skeleton>
  );
};
