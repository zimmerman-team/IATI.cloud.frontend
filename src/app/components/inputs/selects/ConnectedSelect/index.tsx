import Select, { components } from 'react-select';
import React from 'react';
import styled from 'styled-components';
import Clear from '@material-ui/icons/Clear';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

const IndicatorClearWrapper = styled.div`
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
  cursor: pointer;
  div {
    padding: 0;
    &:hover {
      background-color: transparent;
      opacity: 0.5;
    }
  }
`;

const indicatorSeparatorStyle = {
  alignSelf: 'stretch',
  backgroundColor: '#828894',
  marginBottom: 8,
  marginTop: 8,
  width: 1
};

const IndicatorSeparator = ({ innerProps }) => {
  return <span style={indicatorSeparatorStyle} {...innerProps} />;
};

const DropdownIndicator = ({ innerProps }) => {
  return (
    <DropdownIndicatorWrapper {...innerProps}>
      <ArrowDropDown htmlColor="#828894" fontSize="small" />
    </DropdownIndicatorWrapper>
  );
};

const ClearIndicator = ({ innerProps }) => {
  return (
    <IndicatorClearWrapper {...innerProps}>
      <Clear htmlColor="#828894" fontSize="small" />
    </IndicatorClearWrapper>
  );
};

const MultiValueRemove = props => {
  return (
    <MultiValueRemoveWrapper>
      <components.MultiValueRemove {...props}>
        <Clear htmlColor="white" fontSize="small" />
      </components.MultiValueRemove>
    </MultiValueRemoveWrapper>
  );
};

const customStyles = {
  option: (provided, state) => ({
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
    paddingLeft: '15px'
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: '100%',
    minHeight: '48px',
    backgroundColor: '#f0f3f7',
    borderRadius: '2px',
    display: 'flex',
    alignItems: 'center',
    // paddingTop: '5px',
    // paddingBottom: '5px',
    padding: 0,
    // paddingTop: '5px',
    // paddingBottom: '5px',
    margin: 0
    // outline: '2px solid red'
  }),
  /*  menu: () => ({
    outline: '2px solid green'
  }),*/
  /*noOptionsMessage: (provided, state) => ({
    outline: '1px solid blue'
  }),*/
  menuList: (provided, state) => ({
    // outline: '1px solid blue',
    ...provided,
    height: '300px',
    padding: 0,
    margin: 0,
    overflow: 'scroll'
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: '5px'
    // outline: '2px solid green'
  }),
  multiValue: provided => ({
    ...provided,
    borderRadius: '2px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#3074f1',
    paddingLeft: '12px',
    paddingRight: '9px',
    userSelect: 'none'
  }),
  multiValueLabel: () => ({
    fontSize: '14px',
    textTransform: 'capitalize',
    fontFamily: 'Inter',
    fontWeight: 400,
    color: 'white',
    marginRight: '10px'
  }),
  multiValueRemove: (provided, state) => ({
    ...provided
    // fill: 'white'
  }),
  singleValue: (provided, state) => ({
    // const opacity = state.isDisabled ? 0.5 : 1;
    // const transition = 'opacity 300ms';
    // outline: '1px solid blue'
    // return { ...provided, opacity, transition };
  }),
  menu: (provided, state) => ({
    // outline: '2px solid blue',
    borderRadius: '2px',
    margin: 0,
    padding: 0,
    boxShadow:
      '0 4px 14px -2px rgba(130, 136, 148, 0.28), 0 0 2px 0 rgba(130, 136, 148, 0.22)'
  })
};

export const ConnectedSelect = props => {
  return (
    <Select
      /* className="instanceName" */
      /* name */
      // name="filters"
      // placeholder="Filters"
      // value={values.organisationTypes}
      // options={organisationTypes}
      // onChange={handleMultiChange}
      components={{
        MultiValueRemove,
        IndicatorSeparator,
        ClearIndicator,
        DropdownIndicator
      }}
      styles={customStyles}
      isMulti
      // getOptionLabel={option => `${option.code}: ${option.name}`}
      // getOptionValue={option => option.code}

      {...props}
    />
  );
};
