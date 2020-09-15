// @ts-nocheck
import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { LocationDescriptor } from 'history';
import { useLocation } from 'react-router-dom'


type Props = {
  size?: string;
  label?: string;
  url?: LocationDescriptor<any>;
  disabled?: boolean;
  active?: boolean;
  shrink?: boolean;
};

const BaseComponent = styled((props) => <Button {...props} />)`
  &&& {
    padding: 0;
    height: ${(props) => (props.shrink ? `62px` : `100px`)};
    transition: height 100ms ease-out;

    & [class*='MuiButton-label'] {
      text-transform: capitalize;
      text-decoration: none;
      font-size: ${(props) => (props.shrink ? `12px` : `14px`)};
      font-family: Inter, sans-serif;
      font-weight: 300;
      line-height: 1;
      letter-spacing: 0.25px;
      transition: font-size 100ms ease-out;
    }

    &:hover {
      * {
        color: rgba(0, 0, 0, 0.5) !important;
      }

      background-color: initial;
    }
  }
`;

export const AppBarButton = (props: Props) => {
  return (
    <BaseComponent
      shrink={props.shrink}
      size={props.size}
      color="inherit"
      {...props}
    >
      {props.disabled ? (
        <div
          css={`
            display: flex;
            align-items: center;
            text-decoration: none;
            font-size: 14px;
            font-family: 'Inter;
            font-weight: 300;
            line-height: 1.17;
            letter-spacing: 0.25px;
           height: ${props.shrink ? `36px` : `96px`}!important;
           padding-top: ${props.shrink ? `10px` : `0`}!important;
            border-bottom: 4px solid transparent;
          `}
        >
          {props.label}
        </div>
      ) : (
        <NavLink
          css={`
            && {
              color: #121212;
              height: ${props.shrink ? `36px` : `96px`}!important;
              padding-top: ${props.shrink ? `10px` : `0`}!important;
              display: flex;
              align-items: center;
              border-bottom: 4px solid transparent;
            }
          `}
          strict
          activeStyle={{ borderBottom: '4px solid #03dbe4', height: '96px' }}
          to={props.url}
        >
          {props.label}
        </NavLink>
      )}
    </BaseComponent>
  );
};
