/** core */
import React from 'react';
/** third-party */
import AsyncPaginate from 'react-select-async-paginate';
import FieldInputLabel from 'app/components/common/FieldInputLabel';

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

const customStyles = {
  option: (provided: any, state: any) => Option(provided, state),
  control: Control,
  menuList: (provided: any, state: any) => MenuList(provided, state),
  valueContainer: (provided: any) => ValueContainer(provided),
  multiValue: (provided: any) => MultiValue(provided),
  multiValueLabel: MultiValueLabel,
  multiValueRemove: (provided: any) => ({ ...provided }),
  menu: Menu,
};

async function loadOptions(search, loadedOptions, { page }, pivot) {
  const url = `https://test-datastore.iatistandard.org/dev/search/activity/select?q=${pivot}:*&facet=on&facet.pivot=${pivot}&rows=0&facet.sort=${pivot}&facet.limit=10&facet.offset=${page *
    10}&facet.matches=^${search}.*$`;
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
      <FieldInputLabel label={props.label} />
      <AsyncPaginate
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
        loadOptions={(search, loadedOptions, { page }) =>
          loadOptions(search, loadedOptions, { page }, props.pivot)
        }
        additional={{
          page: 1,
        }}
        debounceTimeout={1000}
      />
      <HelperBlock>
        {props.helperText && <FieldInputLabel label={props.helperText} />}
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
