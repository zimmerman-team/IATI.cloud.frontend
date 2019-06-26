import React from 'react';
import PropTypes from 'prop-types';
import { MenuProps } from 'react-select/lib/components/Menu';
import Paper from '@material-ui/core/Paper';

interface OptionType {
  label: string;
  value: string;
}

function Menu(props: MenuProps<OptionType>) {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  );
}

Menu.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object
} as any;

export default Menu;
