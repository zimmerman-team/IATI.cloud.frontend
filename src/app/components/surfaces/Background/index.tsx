/* base */
import React from 'react';
import styled from 'styled-components';

/* components*/
import BackgroundImage from 'app/assets/images/DottedMap.svg';

const ComponentBase = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImage}),
    linear-gradient(to top, #155366, #06dbe4);
  background-repeat: no-repeat;
  background-position: center right;
  z-index: -1;
`;

const Background: React.FC<Background> = props => {
  return <ComponentBase>{props.children}</ComponentBase>;
};

Background.defaultProps = {};

export default Background;
