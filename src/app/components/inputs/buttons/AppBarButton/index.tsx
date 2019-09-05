import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { LocationDescriptor } from 'history';
import { Typography as MuiTypography } from '@material-ui/core';

type Props = {
  size?: string;
  label?: string;
  url?: LocationDescriptor<any>;
  disabled?: boolean;
};

const Typography = styled(props => <MuiTypography {...props} />)`
  && {
    font-size: 14px;
  }
`;

const BaseComponent = styled(props => <Button {...props} />)`
  && {
    margin-left: 32px;
    & [class*='MuiButton-label'] {
      font-size: 14px;
      text-transform: capitalize;
    }

    &:hover {
      opacity: 0.6;
      background-color: initial;
    }
  }
`;

const CustomLink = styled(props => <NavLink {...props} />)`
  text-decoration: none;
  color: #121212;
`;

const AppBarButton = (props: Props) => {
  return (
    <>
      <BaseComponent size={props.size} color="inherit" {...props}>
        <Typography variant="body1">
          {props.disabled ? (
            <span>{props.label}</span>
          ) : (
            <CustomLink to={props.url ? props.url : '/'}>
              {props.label}
            </CustomLink>
          )}
        </Typography>
      </BaseComponent>
    </>
  );
};

export default AppBarButton;
