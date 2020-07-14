/* base */
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import BackgroundImage from 'app/assets/images/DottedMap.svg';

type Props = {
  children?: ReactNode;
};

const Base = styled.div`
  position: relative;
  background-image: url(${BackgroundImage}),
    linear-gradient(to bottom, #3e8c9f, #2b5d69 35%, #135062);
  background-repeat: no-repeat;
  background-position: center right;
  padding-bottom: 47px;
  padding-top: 40px;

  position: sticky;
  top: 0;

  z-index: 20;
`;

export const Background = (props: Props) => {
  return <Base>{props.children}</Base>;
};
