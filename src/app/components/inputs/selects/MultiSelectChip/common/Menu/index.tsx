import React from 'react';
import PropTypes from 'prop-types';
import { MenuProps } from 'react-select/src/components/Menu';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

interface OptionType {
  label: string;
  value: string;
}
const BaseMenu = styled(props => <Paper {...props} />)`
  position: absolute;
  width: 100%;
  z-index: 1;
  & [class*='MuiListItem-root'] {
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.71;
    letter-spacing: 0.3px;
  }
`;

function Menu(props: MenuProps<OptionType>) {
  return (
    <BaseMenu square {...props.innerProps}>
      {props.children}
    </BaseMenu>
  );
}

Menu.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object,
} as any;

export default Menu;
