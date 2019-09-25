/* base */
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import BackgroundImage from 'app/assets/images/DottedMap.svg';

type Props = {
  children?: ReactNode;
};

const Base = styled.div`
  //height: 100vh;
  background-image: url(${BackgroundImage}),
    linear-gradient(to bottom, #5db9cc, #135062);
  background-repeat: no-repeat;
  background-position: center right;
  padding-bottom: 47px;
  padding-top: 40px;
  position: sticky;
  top: 0;
`;

const Background = (props: Props) => {
  return <Base>{props.children}</Base>;
};

export default Background;
