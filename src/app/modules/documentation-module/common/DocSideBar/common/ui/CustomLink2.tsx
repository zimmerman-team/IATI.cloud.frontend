import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

export const CustomLink2 = styled((props) => <HashLink {...props} />)`
  width: 100%;
  margin-bottom: 42px;
  min-height: 24px;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: rgb(18, 18, 18);

  &:hover {
    color: #25a898;
  }
`;
