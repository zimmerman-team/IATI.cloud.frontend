import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { Palette } from 'app/theme';

type Props = {
  size?: string;
  label?: string;
  variant?: string;
  // next two variables are lowercase and strings, because warnings...
  isdisabled?: string;
  bgcolor?: string;
};
// todo: this component needs rethinking in the way it accepts variants and colours
const ZimmerButton = styled(props => <Button {...props} />)`
  && {
    box-shadow: initial !important;
    //padding-left: 42px;
    //padding-right: 42px;
    width: 100px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => {
      switch (props.copied) {
        case true:
          return 'red';
        case false:
          return 'blue';
        default:
          return 'yellow';
      }
    }}

    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
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

    background: ${props =>
      props.bgcolor === 'green' ? '#46b275' : Palette.primary.main}}

    background-color: ${props =>
      props.isdisabled ? '#f0f3f7' : ''} !important;}

    &:hover{
      cursor: ${props => (props.isdisabled === 'true' ? 'default' : '')}
      }


    & [class*='MuiButton-label'] {
      font-size: 12px;
      text-transform: capitalize;
      color: ${props =>
        props.isdisabled === 'true' ? 'rgba(6, 7, 10, 0.38)' : '#FFF'}
      }
`;

export const BaseButton = (props: Props) => {
  return (
    <ZimmerButton
      size={props.size}
      variant={props.variant ? props.variant : 'contained'}
      bgcolor={props.bgcolor ? props.bgcolor : 'primary'}
      isdisabled={props.isdisabled}
    >
      {props.label}
    </ZimmerButton>
  );
};
