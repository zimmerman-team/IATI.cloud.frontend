import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export default function MultiSelectChip2(props) {
  return (
    <Select
      closeMenuOnSelect={false}
      isMulti
      components={animatedComponents}
      // defaultValue={[props.options[1], props.options[5]]}
      options={props.options}
    />
  );
}
