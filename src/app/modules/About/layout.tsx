import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { Footer } from 'app/components/surfaces/Footer';
import { PageContainer } from 'app/modules/common/PageContainer';
import { ModuleHeader } from 'app/modules/common/ModuleHeader';
import { Paragraph } from './Paragraph';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

export const AboutLayout = () => {
  return (
    <PageContainer footer>
      <ModuleHeader title="About the new Datastore" />
      <Box width="100%" height="40px" />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Appbar component needs a refactor, therefore not in this PR.*/}
          {/* INTRODUCTION*/}
          <Grid item lg={12}>
            <Paragraph data-testid="p0">
              <Typography variant="body1" data-testid="body">
                The new IATI Datastore offers a robust online data service,
                providing timely and standardised access to data published
                according to the IATI Standard. Data users can gain data on
                development and humanitarian resources and results through using
                the{' '}
                <a
                  href="https://test-datastore.iatistandard.org/api/"
                  target="_blank"
                >
                  Datastore’s API
                </a>
                . Users will also be able to download data from a new
                user-friendly Datastore Query Builder.
              </Typography>
            </Paragraph>
          </Grid>

          {/* what can be accessed? */}
          <Grid item lg={12}>
            <Typography variant="h6" style={{ paddingBottom: '16px' }}>
              What data can be accessed?
            </Typography>
            <Paragraph data-testid="p1">
              <Typography variant="body1">
                The new{' '}
                <a
                  href="https://test-datastore.iatistandard.org/api/"
                  target="_blank"
                >
                  IATI Datastore API
                </a>{' '}
                provides data published by organisations who have used version 2
                of the IATI Standard. This is following the decision to
                deprecate{' '}
                <a
                  href="https://iatistandard.org/en/news/notice-iati-standard-version-1-is-deprecated/"
                  target="_blank"
                >
                  version 1 by IATI members
                </a>
                , which was implemented July 2019.
              </Typography>
            </Paragraph>

            <Paragraph data-testid="p2">
              <Typography variant="body1">
                To help users access good quality data, the Datastore will not
                hold any data that does not adhere to the IATI Schema. The IATI
                Schema provides the exact order and format that publishers
                should provide their XML files in. More information about the
                Schema can be found on{' '}
                <a
                  href="http://reference.iatistandard.org/203/schema/"
                  target="_blank"
                >
                  IATI’s Reference site
                </a>
                .
              </Typography>
            </Paragraph>
          </Grid>

          {/* What can I do with the IATI Datastore? */}
          <Grid item lg={12}>
            <Typography variant="h6" style={{ paddingBottom: '16px' }}>
              What can I do with the IATI Datastore?
            </Typography>
            <Paragraph data-testid="p3">
              <Typography variant="body1">
                Depending on what information you are looking for and what
                questions you want to answer with IATI data, you can form
                queries and set up filters to get the details you require. You
                can do this via using the Datastore API or the Query Builder.
              </Typography>
            </Paragraph>
          </Grid>

          {/* Using the Datastore API */}

          <Grid item lg={12}>
            <Typography variant="h6" style={{ paddingBottom: '16px' }}>
              Using the Datastore API
            </Typography>
            <Paragraph data-testid="p4">
              <Typography variant="body1">
                For detailed documentation on how to use the API, please refer
                to the{' '}
                <a
                  href="https://test-datastore.iatistandard.org/documentation/introduction"
                  target="_blank"
                >
                  Datastore API documentation
                </a>
                . For information on how to map queries from the ‘old’ Datastore
                to the new one, please see the{' '}
                <a
                  href="https://docs.google.com/document/d/1nTu1Jdg17toiQoemJT3R9YPwvAwCN1gpFnnL1R-lfHY/edit"
                  target="_blank"
                >
                  mapping document
                </a>
                .
              </Typography>
            </Paragraph>
          </Grid>

          {/* Using the Query Builder */}
          <Grid item lg={12}>
            <Typography variant="h6" style={{ paddingBottom: '16px' }}>
              Using the Query Builder
            </Typography>
            <Paragraph data-testid="p5">
              <Typography variant="body1">
                The{' '}
                <a
                  href="https://test-datastore.iatistandard.org/querybuilder/core-filters"
                  target="_blank"
                >
                  Query builder
                </a>{' '}
                allows users to build common queries through a series of drop
                down and freetext filters.
              </Typography>
            </Paragraph>
          </Grid>

          {/* In what formats can I output the IATI data? */}
          <Grid item lg={12}>
            <Typography variant="h6" style={{ paddingBottom: '16px' }}>
              In what formats can I output IATI data?
            </Typography>
            <Paragraph data-testid="p6">
              <Typography variant="body1">
                The benefit of the IATI Datastore is that you can convert the
                original IATI data, provided in XML format, into two more
                formats - CSV and JSON. All data in the Datastore is filtered
                and output based on IATI activities. The exception is converting
                the data into CSV format, which also allows you to output it
                based on budgets and transactions.
              </Typography>
            </Paragraph>

            <Paragraph data-testid="p7">
              <Typography variant="body1">So, you can output:</Typography>
            </Paragraph>

            <Paragraph data-testid="p8">
              <Typography variant="body1">
                XML - The Datastore returns the original activity XML as
                published. This is enhanced with metadata, specifying the
                version of the IATI standard that individual activities were
                published at, as well as details of the query result.
              </Typography>
            </Paragraph>

            <Paragraph data-testid="p9">
              <Typography variant="body1">
                CSV - The Datastore will convert the published XML data into CSV
                format. Only a subset of published data is present. This format
                can be used to analyse information using spreadsheet software
                such as Microsoft Excel or Libreoffice Calc.
              </Typography>
            </Paragraph>

            <Paragraph>
              <Typography data-testid="p10" variant="body1">
                You can select the rows in a CSV file to represent individual
                activities, budgets or transactions depending on the output
                format you select. Each of these may be expanded by sector or
                country so that percentage splits can be analysed. Less
                technically adept users can use the Datastore CSV Query Builder
                tool to access data in this format.
              </Typography>
            </Paragraph>

            <Paragraph>
              <Typography data-testid="p11" variant="body1">
                JSON - The Datastore will convert the published XML to JSON
                format. All the original published information is present in
                this alternative format. The same metadata that is given in the
                XML output is available in the JSON output.
              </Typography>
            </Paragraph>
          </Grid>
        </Grid>
      </Container>

      <Hidden lgUp>
        <Box height={'300px'} />
      </Hidden>

    </PageContainer>
  );
};
