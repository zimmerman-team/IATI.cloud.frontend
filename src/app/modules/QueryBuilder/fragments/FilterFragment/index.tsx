/* core */
import React from 'react';
/* third-party */
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Add from '@material-ui/core/SvgIcon/SvgIcon';
/* project component */
import MultiSelectChip from 'app/components/inputs/selects/MultiSelectChip';
import FilterMenu from 'app/components/navigation/menus/FilterMenu';
import SimpleSelect from 'app/components/inputs/selects/SimpleSelect';
import DateField from 'app/components/inputs/textinputs/DateInputField';
import IconButton from 'app/components/inputs/buttons/IconButton';
/* common */
import { ModuleFragment } from 'app/modules/QueryBuilder/fragments/common';
/* config & mock */
import { fragmentConfig } from './model';
import FilterData from 'app/components/navigation/menus/FilterMenu/mock';
import { TextField } from '@material-ui/core';

export const FilterFragment = () => {
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [openFilter, setOpenFilter] = React.useState(false);
  function handleToggle() {
    setOpenFilter(prevOpen => !prevOpen);
  }

  return (
    <ModuleFragment
      name={fragmentConfig.name}
      description={fragmentConfig.description}
    >
      <Grid item xs={12} sm={12} md={12}>
        {/*<MultiSelectChip
          label="Data title, activity, or descriptions"
          helperText="Have minium 1-2 other filters selected to avoid searching the entire database"
          placeholder="Text search"
          search
          options={optionsFilter}
        />*/}

        <TextField />
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <Divider />
      </Grid>

      <Grid item xs={12} sm={12} md={4}>
        <SimpleSelect label="Must have activity periode" data={['Yes', 'No']} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <DateField />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <DateField />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <IconButton
          label="Add Filter"
          icon={<Add />}
          onClick={() => handleToggle()}
          anchorref={anchorRef}
        />
        <FilterMenu data={FilterData} anchorRef={anchorRef} open={openFilter} />
      </Grid>
    </ModuleFragment>
  );
};
