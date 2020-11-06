/** core */
import React from 'react';
/** third-party */
import { AsyncPaginate } from 'react-select-async-paginate';
import { FieldInputLabel } from 'app/components/common/FieldInputLabel';

import {
  ClearIndicator,
  Control,
  DropdownIndicator,
  IndicatorSeparator,
  Menu,
  MenuList,
  MultiValue,
  MultiValueLabel,
  MultiValueRemove,
  HelperBlock,
  Option,
  ValueContainer,
} from 'app/components/inputs/selects/ConnectedSelect/common';
import { createID } from '../../../../utils/removeSpaces';

const customStyles = {
  option: (provided: any, state: any) => Option(provided, state),
  control: Control,
  menuList: (provided: any, state: any) => MenuList(provided, state),
  valueContainer: (provided: any) => ValueContainer(provided),
  multiValue: (provided: any) => MultiValue(provided),
  multiValueLabel: MultiValueLabel,
  multiValueRemove: (provided: any) => ({ ...provided }),
  menu: Menu,
  placeholder: styles => ({...styles, color: 'black', opacity: '1'}),
};

async function loadOptions(search, loadedOptions, { page }, pivot) {
  const url = `https://iatidatastore.iatistandard.org/search/activity?q=${pivot}:*&facet=on&facet.pivot=${pivot}&rows=0&facet.limit=15&facet.offset=${page *
    10}&facet.contains=${search.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')}&facet.contains.ignoreCase=true`;
  const response = await fetch(url);
  const responseJSON = await response.json();

  return {
    options: responseJSON.facet_counts.facet_pivot[pivot],
    hasMore: responseJSON.facet_counts.facet_pivot[pivot].length > 0,
    additional: {
      page: page + 1,
    },
  };
}

export const AsyncSelect = (props: any) => {
  return (
    <>
      <FieldInputLabel for={createID(props.label)} label={props.label} />
      <AsyncPaginate
        // id={createID(props.label)}
        inputId={createID(props.label)}
        defaultOptions
        {...props}
        components={{
          MultiValueRemove,
          IndicatorSeparator,
          ClearIndicator,
          DropdownIndicator,
        }}
        styles={customStyles}
        isMulti
        loadOptions={(search, loadedOptions, { page }) =>loadOptions(search, loadedOptions, { page  }, props.pivot)}
        additional={{
          page: 0,
        }}
      />
      <HelperBlock>
        {props.helperText && <FieldInputLabel for="" label={props.helperText} />}
        {props.helperTextLink && props.helperTextUrl && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={props.helperTextUrl}
          >
            {props.helperTextLink}
          </a>
        )}
      </HelperBlock>
    </>
  );
};
