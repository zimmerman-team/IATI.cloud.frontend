import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

type Props = {
  size?: string;
  label?: string;
};

const BaseComponent = styled(props => <Button {...props} />)`
  && {
    margin-left: 20px;
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

const AppBarButton: React.FC<Props> = props => {
  return (
    <BaseComponent size={props.size} color="inherit">
      {props.label}
    </BaseComponent>
  );
};

export default AppBarButton;
