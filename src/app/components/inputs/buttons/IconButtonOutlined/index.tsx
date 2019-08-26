import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Typography } from '@material-ui/core';

type Props = {
  size?: string;
  label?: string;
};

const CustomLink = styled(props => <NavLink {...props} />)`
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ZimmerButton = styled(props => <Button {...props} />)`
  && {
    justify-content: space-between;
    color: white;
    width: 100%;
    height: ${props => {
      switch (props.size) {
        case 'small':
          return '30px';
        case 'large':
          return '56px';
        default:
          return '48px';
      }
    }};
    border: 1px solid #ffffff;
    & [class*='MuiButton-label'] {
      font-size: 14px;
      text-transform: capitalize;
    }
  }
`;

const IconButtonOutlined = (props: Props) => {
  return (
    <ZimmerButton size={props.size} variant="outlined">
      <CustomLink to="/querybuilder">
        <Typography variant="subtitle1"> {props.label} </Typography>
        <ArrowForward fontSize="small" />
      </CustomLink>
    </ZimmerButton>
  );
};

export default IconButtonOutlined;
