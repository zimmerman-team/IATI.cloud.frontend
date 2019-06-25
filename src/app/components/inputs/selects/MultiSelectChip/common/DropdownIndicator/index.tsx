import React from 'react';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Search from '@material-ui/icons/Search';

interface OptionType {
  selectProps?: any;
}

const DropdownIndicator: React.FC<OptionType> = props => {
  console.log(props);
  return (
    <React.Fragment {...props}>
      {props.selectProps.search ? <Search /> : <ArrowDropDown />}
    </React.Fragment>
  );
};

export default DropdownIndicator;
