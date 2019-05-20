/* base */
import React from 'react';
import styled from 'styled-components';

const ComponentBase = styled.div``;

type TestCompProps = {
  componentStack?: string;
  error?: string;
};

const TestComp: React.FC<TestCompProps> = props => {
  console.log('sss');
  return <ComponentBase>jawel</ComponentBase>;
};

export default TestComp;
