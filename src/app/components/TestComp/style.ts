import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core';

const BaseComp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightsteelblue;
  width: 100vw;
  height: 130px;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  z-index: 10;
`;

class CompStyle {
  greeting: object;
  constructor() {
    this.greeting = BaseComp;
  }
  greet() {
    return this.greeting;
  }
}
