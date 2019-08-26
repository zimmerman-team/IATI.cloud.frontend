import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import styled from 'styled-components';

const Paragraph = styled.p`
  padding-bottom: 8px;
`;

const Section = styled.section`
  //Calculating for clarity, every section ends with a paragraph as child
  margin-bottom: calc(60px - 8px);
`;

export const AboutLayout = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        style={{ paddingTop: '80px', paddingBottom: '8px' }}
      >
        {/* Appbar component needs a refactor, therefore not in this PR.*/}
        {/* INTRODUCTION*/}
        <Section>
          <Paragraph>
            <Typography variant="body1">
              The IATI Datastore holds all activity data published on
              development and humanitarian activities available on the IATI
              Registry. The Datastore is primarily aimed at users who have
              technical expertise in manipulating data. It lets you query the
              content of all IATI datafiles in a single place. In addition to
              XML, the IATI data can be downloaded in a spreadsheet (CSV) or
              JSON format.
            </Typography>
          </Paragraph>

          <Paragraph>
            <Typography variant="body1">
              We are in the process of outsourcing the development of a new
              Datastore. The current Datastore is an alpha version. This means
              that it does not yet contain all of the features planned and may
              return unexpected results. The alpha version is intended for user
              testing and feedback and, while you are encouraged to use it, it
              should not be considered a stable product. Find out about the
              tendering process for the new IATI Datastore, which is currently
              open.
            </Typography>
          </Paragraph>
        </Section>

        {/* WHAT CAN I DO */}
        <Section>
          <Typography variant="h5" style={{ paddingBottom: '16px' }}>
            What can I do with the IATI Datastore?
          </Typography>
          <Paragraph>
            <Typography variant="body1">
              This section explains how the current Datastore can be used - it
              is aimed at more technically able users who are familiar with
              using APIs.
            </Typography>
          </Paragraph>
        </Section>

        {/* MAKING A QUERY WITH THE IATI DATSTORE */}
        <Section>
          <Typography variant="h5" style={{ paddingBottom: '16px' }}>
            Making a query with the IATI Datastore
          </Typography>
          <Paragraph>
            <Typography variant="body1">
              Depending on what information you are looking for and what
              questions you want to answer with IATI data, you can form queries
              and set up filters to get the details you require.{' '}
            </Typography>
          </Paragraph>
          <Paragraph>
            <Typography variant="body1">
              To access all IATI datasets, for example, you can run a simple API
              query: http://datastore.iatistandard.org/api/1/access/activity.xml
            </Typography>
          </Paragraph>
          <Paragraph>
            <Typography variant="body1">
              If you have more specific questions you want to answer with IATI
              data, you can set up a filter for a specific IATI element. For
              instance, if you are looking for IATI activities taking place in
              Uganda (UG), you can run this API query:
              http://datastore.iatistandard.org/api/1/access/activity.xml?recipient-country=UG
            </Typography>
          </Paragraph>
          <Paragraph>
            <Typography variant="body1">
              For examples of more detailed queries and filters, such as
              searching for invalid data that the datastore cannot process, see
              IATI Datastore.
            </Typography>
          </Paragraph>
          <Paragraph>
            <Typography variant="body1">
              There is additional information for developers who want to use the
              Datastore APIs, such as the Data API, Error API, or Metadata API.
            </Typography>
          </Paragraph>
        </Section>

        {/* IN WHAT FORMATS CAN I OUPTPUT THE IATI DATA */}
        <Section>
          <Typography variant="h5" style={{ paddingBottom: '16px' }}>
            In what formats can I output the IATI data?
          </Typography>
          <Paragraph>
            <Typography variant="body1">
              The benefit of the IATI Datastore is that you can convert the
              original IATI data, provided in XML format, into two more formats
              - CSV and JSON. All data in the Datastore is filtered and output
              based on IATI activities. The exception is converting the data
              into CSV format, which also allows you to output it based on
              budgets and transactions.
            </Typography>
          </Paragraph>
          <Paragraph>
            <Typography variant="body1">So, you can output:</Typography>
          </Paragraph>
          <Paragraph>
            <Typography variant="body1">
              XML - The Datastore returns the original activity XML as
              published. This is enhanced with metadata, specifying the version
              of the IATI standard that individual activities were published at,
              as well as details of the query result.
            </Typography>
          </Paragraph>
          <Paragraph>
            <Typography variant="body1">
              CSV - The Datastore will convert the published XML data into CSV
              format. Only a subset of published data is present. This format
              can be used to analyse information using spreadsheet software such
              as Microsoft Excel or Libreoffice Calc.
            </Typography>
          </Paragraph>
          <Paragraph>
            <Typography variant="body1">
              You can select the rows in a CSV file to represent individual
              activities, budgets or transactions depending on the output format
              you select. Each of these may be expanded by sector or country so
              that percentage splits can be analysed. Less technically adept
              users can use the Datastore CSV Query Builder tool to access data
              in this format.
            </Typography>
          </Paragraph>
          <Paragraph>
            <Typography variant="body1">
              JSON - The Datastore will convert the published XML to JSON
              format. All the original published information is present in this
              alternative format. The same metadata that is given in the XML
              output is available in the JSON output.
            </Typography>
          </Paragraph>
        </Section>

        {/* WHO MAINTAINS THE IATI DATASTORE */}
        <Section>
          <Typography variant="h5" style={{ paddingBottom: '16px' }}>
            Who maintains the IATI Datastore?
          </Typography>
          <Paragraph>
            <Typography variant="body1">
              The IATI Datastore is maintained by the IATI technical team. Due
              to current technical team commitments, the IATI Board decided in
              March 2018 to outsource development of a new Datastore. There is a
              clear need for a new product that provides a robust, timely and
              comprehensive data service that can be used by developers and data
              scientists to produce information products tailored to their
              specific needs.
            </Typography>
          </Paragraph>
          <Paragraph>
            <Typography variant="body1">
              Find out about the tendering process for the new IATI Datastore,
              which is currently open.
            </Typography>
          </Paragraph>
        </Section>
      </Container>
      {/*TODO: replace with footer*/}
      <Box
        style={{ width: '100%', backgroundColor: '#155366', height: '200px' }}
      />
    </>
  );
};
