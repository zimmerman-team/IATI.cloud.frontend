import React from 'react';
import { Grid, Box, Container, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { Header } from 'app/components/surfaces/Header';
import { Footer } from 'app/components/surfaces/Footer';
import { PageContainer } from 'app/modules/common/PageContainer';
import { ModuleHeader } from 'app/modules/common/ModuleHeader';

const Paragraph = styled.p`
  padding-bottom: 8px;
`;

const Section = styled.section`
  //Calculating for clarity, every section ends with a paragraph as child
  margin-bottom: calc(60px - 8px);
`;

export const AboutLayout = () => {
  return (
    <PageContainer footer>
      <ModuleHeader />

      <Box width="100%" height="40px"/>
      <Container
        maxWidth="lg"
        style={{  paddingBottom: '8px' }}
      >
        {/* Appbar component needs a refactor, therefore not in this PR.*/}
        {/* INTRODUCTION*/}
        <Section>
          <Paragraph>
            <Typography variant="body1">
              The new IATI Datastore offers a robust online data service,
              providing timely and standardised access to data published
              according to the IATI Standard. Data users can gain data on
              development and humanitarian resources and results through using
              the Datastore’s API. Users will also be able to download data from
              a new user-friendly Datastore Query Builder.
            </Typography>
          </Paragraph>
        </Section>

        {/* what can be accessed? */}
        <Section>
          <Typography variant="h6" style={{ paddingBottom: '16px' }}>
            What data can be accessed?
          </Typography>
          <Paragraph>
            <Typography variant="body1">
              The new IATI Datastore API provides data published by
              organisations who have used version 2 of the IATI Standard. This
              is following the decision to deprecate version 1 by IATI members,
              which was implemented July 2019.
            </Typography>
          </Paragraph>
          <Paragraph>
            <Typography variant="body1">
              To help users access good quality data, the Datastore will not
              hold any data that does not adhere to the IATI Schema. The IATI
              Schema provides the exact order and format that publishers should
              provide their XML files in. More information about the Schema can
              be found on IATI’s Reference site.
            </Typography>
          </Paragraph>
        </Section>

        {/* Testing the new Datastore API (19 Aug - 18 Sept) */}
        <Section>
          <Typography variant="h6" style={{ paddingBottom: '16px' }}>
            Testing the new Datastore API (19 Aug - 18 Sept)
          </Typography>
          <Paragraph>
            <Typography variant="body1">
              Users are invited to test the API to build queries of selected
              IATI data and review the output of data from the Datastore.
              Specifically users are requested to:
            </Typography>
          </Paragraph>
          <Paragraph>
            <Typography variant="body1">
              - check that they can filter the data by the elements/parameters
              they require; - review the content of the data that is returned to
              ensure it accurately matches the elements/parameters selected and,
              - check that the output they receive is usable and matches their
              expectations.
            </Typography>
          </Paragraph>
          <Paragraph>
            <Typography variant="body1">
              When testing, please refer to the Datastore API documentation and
              IATI Datastore – API mapping and examples, then provide your
              feedback on Github on the IATI Datastore project. This will help
              the technical team and Zimmerman and Zimmerman more easily review
              feedback and, where applicable, convert issues directly into
              GitHub tickets to work on
            </Typography>
          </Paragraph>
        </Section>

        {/* What will happen after the Datastore testing phase?  */}
        <Section>
          <Typography variant="h6" style={{ paddingBottom: '16px' }}>
            What will happen after the Datastore testing phase?
          </Typography>
          <Paragraph>
            <Typography variant="body1">
              After the testing deadline of 18 September, the technical team and
              Zimmerman and Zimmerman will post an update about the collected
              feedback on IATI Discuss. They will also contact users
              individually if more information is needed, continue triaging
              issues and action changes where required.
            </Typography>
          </Paragraph>
          <Paragraph>
            <Typography variant="body1">
              Based on the scope of the testing phase and its follow-up weeks, a
              date for the official launch of the Datastore will be set and the
              old Datastore will be phased out 6 months after this date.
            </Typography>
          </Paragraph>
        </Section>

        {/* Help to transition from using the old datastore to the new IATI Datastore */}
        <Section>
          <Typography variant="h6" style={{ paddingBottom: '16px' }}>
            Help to transition from using the old datastore to the new IATI
            Datastore
          </Typography>
          <Paragraph>
            <Typography variant="body1">
              The technical team will be working to ensure that users can
              smoothly transition from using the old datastore to using the new
              IATI Datastore. They will:
            </Typography>
          </Paragraph>

          <Paragraph>
            <Typography variant="body1">
              - provide a mapping document with some examples to help testing
              and migrating between Datastore versions - provide automated
              redirects from old to new datastore API calls for 6 months -
              publish API documentation and a User Manual - offer direct support
              from the technical team via email or one-to-one calls.
            </Typography>
          </Paragraph>

          <Paragraph>
            <Typography variant="body1">
              Thanks in advance to IATI’s dedicated community who are able to
              support the testing phase of the Datastore. The technical team and
              Zimmerman and Zimmerman look forward to receiving your feedback.
              For any questions please email: support@iatistandard.org.
            </Typography>
          </Paragraph>
        </Section>

        {/* What can I do with the IATI Datastore? */}
        <Section>
          <Typography variant="h6" style={{ paddingBottom: '16px' }}>
            What can I do with the IATI Datastore?
          </Typography>
          <Paragraph>
            <Typography variant="body1">
              Depending on what information you are looking for and what
              questions you want to answer with IATI data, you can form queries
              and set up filters to get the details you require. You can do this
              via using the Datastore API or the Query Builder.
            </Typography>
          </Paragraph>
        </Section>

        {/* Using the Datastore API */}
        <Section>
          <Typography variant="h6" style={{ paddingBottom: '16px' }}>
            Using the Datastore API
          </Typography>
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

        {/* Using the Query Builder */}
        <Section>
          <Typography variant="h6" style={{ paddingBottom: '16px' }}>
            Using the Datastore API
          </Typography>
          <Paragraph>
            <Typography variant="body1">
              The Query builder allows users to build common queries through a
              series of drop down and freetext filters.
            </Typography>
          </Paragraph>
        </Section>

        {/* In what formats can I output the IATI data? */}
        <Section>
          <Typography variant="h6" style={{ paddingBottom: '16px' }}>
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
            <Typography variant="body1">So, you can output: </Typography>
          </Paragraph>

          <Paragraph>
            <Typography variant="body1">
              XML - The Datastore returns the original activity XML as
              published. This is enhanced with metadata, specifying the version
              of the IATI standard that individual activities were published at,
              as well as details of the query result.{' '}
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

        <Section>
          <Typography variant="h6">
            Who maintains the IATI Datastore?
          </Typography>
          <Typography variant="body1">
            The IATI Datastore is maintained by Zimmerman & Zimmermand and the
            work is overseen by the IATI technical team. To see any planned work
            or maintenance on the datastore please see the Github…….
          </Typography>
        </Section>


      </Container>

      <Footer />
    </PageContainer>
  );
};
