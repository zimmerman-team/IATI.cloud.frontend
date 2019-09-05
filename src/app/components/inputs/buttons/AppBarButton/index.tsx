import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { LocationDescriptor } from 'history';

type Props = {
  size?: string;
  label?: string;
  url?: LocationDescriptor<any>;
  disabled?: boolean;
  active?: boolean;
};

const BaseComponent = styled(props => <Button {...props} />)`
  &&& {
    padding: 0;
    height: 100px;

    & [class*='MuiButton-label'] {
      text-transform: capitalize;
      text-decoration: none;
      font-size: 14px;
      font-family: Inter, sans-serif;
      font-weight: 300;
      line-height: 1.17;
      letter-spacing: 0.25px;
    }

    &:hover {
      * {
        color: rgba(0, 0, 0, 0.5) !important;
      }

      background-color: initial;
    }
  }
`;

const AppBarButton = (props: Props) => {
  return (
    <BaseComponent size={props.size} color="inherit" {...props}>
      {props.disabled ? (
        <div
          // @ts-ignore
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            fontSize: '14px',
            fontFamily: 'Inter',
            fontWeight: '300',
            lineHeight: '1.17',
            letterSpacing: '0.25px',
            height: '96px',
            borderBottom: '4px solid transparent',
          }}
        >
          {props.label}
        </div>
      ) : (
        <NavLink
          style={{
            color: '#121212',
            height: '96px',
            display: 'flex',
            alignItems: 'center',
            borderBottom: '4px solid transparent',
          }}
          exact
          activeStyle={{ borderBottom: '4px solid #03dbe4', height: '96px' }}
          // @ts-ignore
          to={props.url}
        >
          {props.label}
        </NavLink>
      )}
    </BaseComponent>
  );
};

export default AppBarButton;
