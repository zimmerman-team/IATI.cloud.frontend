/* base */
import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Grid, Container } from '@material-ui/core';
import ModuleFragment from 'app/modules/QueryBuilder/common/ModuleFragment';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import SimpleSelect from 'app/components/inputs/selects/SimpleSelect';

const ModuleContainer = styled.div`
  padding: 60px;
`;

const FragmentDivider = styled(Divider)`
  && {
    margin-top: 60px;
    margin-bottom: 60px;
    background-color: #f0f3f7;
  }
`;

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
  return (
    <Container component={ModuleContainer} maxWidth="lg">
      {/* ////////////////////////////////////////////////////////////////// */}
      {/* INTRO FRAGMENT */}
      <Grid xs={6}>
        <Box marginBottom={3}>
          <Typography variant="h3">{MockData.moduleName}</Typography>
        </Box>
        <Typography>{MockData.moduleInfo}</Typography>
      </Grid>
      <FragmentDivider />
      {/* ////////////////////////////////////////////////////////////////// */}
      {/* FILYERS FRAGMENT */}
      <ModuleFragment
        title={MockData.fragments[0].title}
        info={MockData.fragments[0].info}
      >
        <Grid container>
          <Grid item xs={12}>
            <Box marginBottom={3}>
              <SimpleSelect label="Organisation type" />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box paddingRight={4}>
              <Box marginBottom={3}>
                <SimpleSelect label="Organistion sector" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <SimpleSelect label="Include secondary reporters Y/N" />
          </Grid>
          <Grid item xs={12}>
            <SimpleSelect label="Organisation name" />
          </Grid>
        </Grid>
      </ModuleFragment>
      <FragmentDivider />
      {/* ////////////////////////////////////////////////////////////////// */}
      {/* INTRO FRAGMENT */}
      <ModuleFragment
        title={MockData.fragments[1].title}
        info={MockData.fragments[1].info}
      >
        jejoeoeoeoe
      </ModuleFragment>
      <FragmentDivider />
      {/* ////////////////////////////////////////////////////////////////// */}
      {/* OUTPUT FORMAT FRAGMENT */}
      <ModuleFragment
        title={MockData.fragments[2].title}
        info={MockData.fragments[2].info}
      />
      <FragmentDivider />
      {/* ////////////////////////////////////////////////////////////////// */}
      {/* RESULT FRAGMENT */}
      <Grid container>
        <Box marginBottom={5}>
          <Grid xs={6}>
            <Box marginBottom={2}>
              <Typography variant="h4">Result</Typography>
            </Box>
            <Typography variant="body1">
              2 activities, 24 financial transactions, 4 budget entries Last
              data refreshed at DD/MM/YYYY
            </Typography>
          </Grid>
        </Box>
        <Grid xs={12}>
          <Box bgcolor="#f0f3f7" height={200} borderRadius={2} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default QueryBuilder;
