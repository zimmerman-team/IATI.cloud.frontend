import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Clear from '@material-ui/icons/Clear';
import React from 'react';
import { components } from 'react-select';
import styled from 'styled-components';

const IndicatorClearWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 8px;
  div {
    padding: 0;
  
    &:hover {
      background-color: transparent;
      opacity: 0.5;
    }
  }
`;

const DropdownIndicatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 6px;
  margin-right: 6px;

  div {
    padding: 0;
    &:hover {
      background-color: transparent;
      opacity: 0.5;
    }
  }
`;

const MultiValueRemoveWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  div {
    padding: 0;
    svg{
       font-size:1.05rem!important;
    }
    &:hover {
      background-color: transparent;
      opacity: 0;
    }
  }
`;

const indicatorSeparatorStyle = {
  alignSelf: 'stretch',
  backgroundColor: '#828894',
  marginBottom: 8,
  marginTop: 8,
  width: 1,
};

export const IndicatorSeparator = ({ innerProps }) => {
  return <span style={indicatorSeparatorStyle} {...innerProps} />;
};

export const DropdownIndicator = ({ innerProps }) => {
  return (
    <DropdownIndicatorWrapper {...innerProps}>
      <ArrowDropDown htmlColor="#828894" fontSize="small" />
    </DropdownIndicatorWrapper>
  );
};

export const ClearIndicator = ({ innerProps }) => {
  return (
    <IndicatorClearWrapper {...innerProps}>
      <Clear htmlColor="#828894" fontSize="inherit" />
    </IndicatorClearWrapper>
  );
};

export const MultiValueRemove = props => {
  return (
    <MultiValueRemoveWrapper>
      <components.MultiValueRemove {...props}>
        <Clear htmlColor="white" fontSize="small" />
      </components.MultiValueRemove>
    </MultiValueRemoveWrapper>
  );
};

export const Option = (provided, state) => ({
  ...provided,
  // borderBottom: '1px dotted pink',
  // color: state.isSelected ? 'red' : 'blue',
  color: 'black',
  padding: 0,
  height: '48px',
  // outline: '1px solid green',
  fontWeight: 300,
  fontSize: '14px',
  fontFamily: 'Inter',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '15px',
});

export const Control = () => ({
  // none of react-select's styles are passed to <Control />
  width: '100%',
  minHeight: '48px',
  backgroundColor: '#f0f3f7',
  borderRadius: '2px',
  display: 'flex',
  alignItems: 'center',
  padding: 0,
  margin: 0,
});

export const ValueContainer = provided => ({
  ...provided,
  padding: '5px',
  // outline: '2px solid green'
});

export const MenuList = (provided, state) => ({
  // outline: '1px solid blue',
  ...provided,
  height: '300px',
  padding: 0,
  margin: 0,
  overflow: 'scroll',
});

export const MultiValue = provided => ({
  ...provided,
  borderRadius: '2px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#3074f1',
  paddingLeft: '12px',
  paddingRight: '9px',
  userSelect: 'none',
});

export const MultiValueLabel = () => ({
  fontSize: '14px',
  textTransform: 'capitalize',
  fontFamily: 'Inter',
  fontWeight: 400,
  color: 'white',
  marginRight: '10px',
});

export const Menu = provided => ({
  ...provided,
  borderRadius: '2px',
  margin: 0,
  padding: 0,
  boxShadow:
    '0 4px 14px -2px rgba(130, 136, 148, 0.28), 0 0 2px 0 rgba(130, 136, 148, 0.22)',
});

export const HelperBlock = styled.div`
  display: flex;
  margin-top: 8px;
  flex-direction: row;

  a {
    font-size: 12px;
    font-weight: normal;
    margin-left: 3px;
  }
`;
