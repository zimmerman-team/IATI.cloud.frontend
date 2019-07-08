/* base */
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import BackgroundImage from 'app/assets/images/DottedMap.svg';

type Props = {
  children?: ReactNode;
};

const Base = styled.div`
  height: 100vh;
  background-image: url(${BackgroundImage}),
    linear-gradient(to top, #155366, #06dbe4);
  background-repeat: no-repeat;
  background-position: center right;
`;

const Background = (props: Props) => {
  return <Base>{props.children}</Base>;
};

export default Background;
