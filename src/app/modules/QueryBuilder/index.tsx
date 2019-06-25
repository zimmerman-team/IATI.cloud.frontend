/* base */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import ModuleFragment from 'app/modules/QueryBuilder/common/ModuleFragment';
import Divider from '@material-ui/core/Divider';
import SimpleSelect from 'app/components/inputs/selects/SimpleSelect';
import IconButton from 'app/components/inputs/buttons/IconButton';
import ChipInput from 'app/components/inputs/textinputs/ChipInputField';
import RadioButtonsGroup from 'app/components/inputs/radiobuttons/RadioButtonGroup';
import DataTable from 'app/components/datadisplay/tables/DataTable';
import Add from '@material-ui/icons/Add';
import Download from '@material-ui/icons/GetApp';
import useTitle from 'react-use/lib/useTitle';
import URLField from 'app/components/inputs/textdisplay/URLField';
import DateField from 'app/components/inputs/textinputs/DateInputField';
import FragmentDivider from 'app/components/common/FragmentDivider';
import config from './config';
import Box from '@material-ui/core/Box';
import MultiSelectChip from '../../components/inputs/selects/MultiSelectChip';
import FilterMenu from 'app/components/navigation/menus/FilterMenu';
import FilterData from 'app/components/navigation/menus/FilterMenu/mock';

const spacing = 4;

const QueryBuilder: React.FC = () => {
  useTitle('OIPA - Query Builder');

  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [openFilter, setOpenFilter] = React.useState(false);

  function handleToggle() {
    setOpenFilter(prevOpen => !prevOpen);
  }

  return (
    <Container maxWidth="lg">
      <Box paddingTop="100px">
        {/* ////////////////////////////////////////////////////////////////// */}
        {/* INTRO FRAGMENT */}
        <Grid container direction="column" spacing={spacing}>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h3">{config.moduleName}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="body1">{config.moduleInfo}</Typography>
          </Grid>
        </Grid>
        <FragmentDivider />
        {/* ////////////////////////////////////////////////////////////////// */}
        {/* WHO FRAGMENT */}
        <ModuleFragment
          title={config.fragments[0].title}
          info={config.fragments[0].info}
        >
          <Grid container spacing={spacing}>
            <Grid item xs={12} sm={6} md={12}>
              <MultiSelectChip
                label="Organisation type"
                helperText="Code list"
                placeholder="Selection"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <MultiSelectChip
                label="Organistion sector"
                helperText="DAC 3 & 5 codelist"
                placeholder="All (234)"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <SimpleSelect
                label="Include secondary reporters Y/N"
                tip="empty tooltip"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <MultiSelectChip
                label="Organisation name"
                helperText="E.g. AT-12 = Ministry of Interior. See list"
                placeholder="All (24)"
              />
            </Grid>
          </Grid>
        </ModuleFragment>
        <FragmentDivider />
        {/* ////////////////////////////////////////////////////////////////// */}
        {/* FILTERS FRAGMENT */}
        <ModuleFragment
          title={config.fragments[1].title}
          info={config.fragments[1].info}
        >
          <Grid container spacing={spacing}>
            <Grid item xs={12} sm={12} md={12}>
              <MultiSelectChip
                label="Data title, activity, or descriptions"
                helperText="Have minium 1-2 other filters selected to avoid searching the entire database"
                placeholder="Text search"
                search
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Divider />
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <SimpleSelect label="Must have activity periode" />
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
                ref={anchorRef}
              />
              <FilterMenu
                data={FilterData}
                anchorRef={anchorRef}
                open={openFilter}
              />
            </Grid>
          </Grid>
        </ModuleFragment>
        <FragmentDivider />
        {/* ////////////////////////////////////////////////////////////////// */}
        {/* OUTPUT FORMAT FRAGMENT */}
        <ModuleFragment
          title={config.fragments[2].title}
          info={config.fragments[2].info}
        >
          <Grid container spacing={spacing}>
            <Grid item xs={12} sm={12} md={7}>
              <ChipInput />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              {/* todo: refactor, move buttongroup title here */}
              <RadioButtonsGroup tip="Each row contains a unique activity. Financial information is aggregated. Budget information is excluded. Other potentially repeating fields (such as sectors) are reported in a single cell, delimited by semi-colons." />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              {/* todo: refactor, move buttongroup title here */}
              <RadioButtonsGroup tip="Each Activity, Transaction or Budget row is repeated for each separate Sector reported. The corresponding percentage for the sector split is reported in a separate column. This allows you to easily add arithmetic to your spreadsheet to calculate values proportionately" />
            </Grid>
          </Grid>
        </ModuleFragment>
        <FragmentDivider />
        {/* ////////////////////////////////////////////////////////////////// */}
        {/* RESULT FRAGMENT */}
        <Hidden only={['xs', 'sm']}>
          <Grid container spacing={spacing} direction="column">
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="h4">Result</Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="body1">
                2 activities, 24 financial transactions, 4 budget entries Last
                data refreshed at DD/MM/YYYY
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Typography variant="h6">Output sample</Typography>
            </Grid>

            <Grid item xs={12} sm={12}>
              <DataTable />
            </Grid>
          </Grid>
          <FragmentDivider />
        </Hidden>
        {/* ////////////////////////////////////////////////////////////////// */}
        {/* DOWNLOAD FRAGMENT */}
        <Grid container spacing={2} justify="space-between">
          <Grid item xs={12} sm={12}>
            <Typography variant="h4">Files</Typography>
          </Grid>
          {/* todo: make re-usable component */}
          <Grid item xs={12} sm={9} md={9}>
            <URLField />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <IconButton label="Download CSV" icon={<Download />} disabled />
          </Grid>
          <Grid item xs={12} sm={9} md={9}>
            <URLField />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <IconButton label="Download CSV" icon={<Download />} disabled />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default QueryBuilder;
