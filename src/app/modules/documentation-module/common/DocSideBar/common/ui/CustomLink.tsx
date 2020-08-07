import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CustomLink = styled((props) => <NavLink {...props} />)`
  width: 100%;
  margin-bottom: 42px;
  min-height: 24px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 0.15px;

  color: rgba(1, 1, 10, 0.6);

  &:hover {
    color: #25a898;
  }
`;
