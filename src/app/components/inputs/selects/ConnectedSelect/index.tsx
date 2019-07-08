import Select from 'react-select';
import React from 'react';
import { OrganisationTypeModel } from 'app/state/models';

const customStyles = {
  /*option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20
  }),*/
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: '100%',
    height: '48px',
    backgroundColor: '#f0f3f7',
    borderRadius: '2px',
    display: 'flex',
    paddingTop: '5px',
    paddingBottom: '5px'
  }) /*,
  singleValue: (provided, state) => {
    // const opacity = state.isDisabled ? 0.5 : 1;
    // const transition = 'opacity 300ms';
    // return { ...provided, opacity, transition };
  }*/
};

export const ConnectedSelect = props => {
  return (
    <Select
      // className="reactSelect"
      // name="filters"
      // placeholder="Filters"
      // value={values.organisationTypes}
      // options={organisationTypes}
      // onChange={handleMultiChange}
      styles={customStyles}
      isMulti
      // getOptionLabel={option => `${option.code}: ${option.name}`}
      // getOptionValue={option => option.code}

      {...props}
    />
  );
};
