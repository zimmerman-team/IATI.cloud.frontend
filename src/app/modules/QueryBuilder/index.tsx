/* base */
import React from 'react';
import styled from 'styled-components';
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
import IconTextInput from 'app/components/inputs/textinputs/IconTextInputFIeld';
import URLField from 'app/components/inputs/textdisplay/URLField';
import DateField from 'app/components/inputs/textinputs/DateInputField';

/* todo: move to separate component */
const ModuleContainer = styled.div`
  //padding: 60px;

  border-right: 1px solid rgba(30, 144, 255, 0.2);
  border-left: 1px solid rgba(30, 144, 255, 0.2);
  padding-top: 100px;
`;

const spacing = 4;

/* todo: move to separate component */
const FragmentDivider = styled(Divider)`
  && {
    margin-top: 60px;
    margin-bottom: 60px;
    background-color: #f0f3f7;
  }
`;

/* todo: move to mock file */
const MockData = {
  moduleName: 'Query Builder',
  moduleInfo:
    'This tool allows you to build common queries to obtain data from the IATI Datastore in CSV, XML and JSON format. You create queries based on finding the organisations, and then be configured filter the published data down to what you need and elements you want to include in your export. You find an example data table snippet of your query and your download link  in the bottom section.',
  fragments: [
    {
      title: 'Who',
      info:
        'First you need to find the organisation or organisations you want data about. Depending if you want one specific organsation or a wieder net. You can use the filters to narrow the data you want.'
    },
    {
      title: 'Filters',
      info:
        'First select the organsation to only show applicable filters for thats organisations published data unless you want data from all IATI organisations. You don’t need to use all filters only the onces needed to get the data you want.'
    },
    {
      title: 'Output format',
      info:
        'You can use default, but these options allow you to configure the way in which your data is disaggregated.'
    }
  ]
};

const QueryBuilder: React.FC = () => {
  useTitle('OIPA - Query Builder');
  return (
    <Container component={ModuleContainer} maxWidth="lg">
      {/* ////////////////////////////////////////////////////////////////// */}
      {/* INTRO FRAGMENT */}
      <Grid container direction="column" spacing={spacing}>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h3">{MockData.moduleName}</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} >
          <Typography variant="body1">{MockData.moduleInfo}</Typography>
        </Grid>
      </Grid>
      <FragmentDivider />
      {/* ////////////////////////////////////////////////////////////////// */}
      {/* WHO FRAGMENT */}
      <ModuleFragment
        title={MockData.fragments[0].title}
        info={MockData.fragments[0].info}
      >
        <Grid container spacing={spacing}>
          <Grid item xs={12} sm={6} md={12}>
            <SimpleSelect label="Organisation type" helperText="Code list" />
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <SimpleSelect
              label="Organistion sector"
              helperText="DAC 3 & 5 codelist"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <SimpleSelect label="Include secondary reporters Y/N" />
          </Grid>
          <Grid item xs={12} sm={6} md={12}>
            <SimpleSelect
              label="Organisation name"
              helperText="E.g. AT-12 = Ministry of Interior. See list"
            />
          </Grid>
        </Grid>
      </ModuleFragment>
      <FragmentDivider />
      {/* ////////////////////////////////////////////////////////////////// */}
      {/* FILTERS FRAGMENT */}
      <ModuleFragment
        title={MockData.fragments[1].title}
        info={MockData.fragments[1].info}
      >
        <Grid container spacing={spacing}>
          <Grid item xs={12} sm={12} md={12}>
            <IconTextInput
              placeholder="Text search"
              label="Data title, activity, or descriptions"
              helperText="Have minium 1-2 other filters selected to avoid searching the entire database"
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
            <IconButton label="Add Filter" icon={<Add />} />
          </Grid>
        </Grid>
      </ModuleFragment>
      <FragmentDivider />
      {/* ////////////////////////////////////////////////////////////////// */}
      {/* OUTPUT FORMAT FRAGMENT */}
      <ModuleFragment
        title={MockData.fragments[2].title}
        info={MockData.fragments[2].info}
      >
        <Grid container spacing={spacing}>
          <Grid item xs={12} sm={12} md={7}>
            <ChipInput />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <RadioButtonsGroup />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <RadioButtonsGroup />
          </Grid>
        </Grid>
      </ModuleFragment>
      <FragmentDivider />
      {/* ////////////////////////////////////////////////////////////////// */}
      {/* RESULT FRAGMENT */}
      <Hidden only={['xs','sm']}>
      <Grid container spacing={spacing} direction="column" >
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h4">Result</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="body1">
            2 activities, 24 financial transactions, 4 budget entries Last data
            refreshed at DD/MM/YYYY
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
    </Container>
  );
};

export default QueryBuilder;
