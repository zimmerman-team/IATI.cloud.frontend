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
      <ModuleHeader title="About the new Datastore" />

      <Box width="100%" height="40px" />
      <div
        css={`
          height: calc(100vh - 290px);
          overflow-y: scroll;
        `}
      >
        <Container maxWidth="lg" style={{ paddingBottom: '8px' }}>
          {/* Appbar component needs a refactor, therefore not in this PR.*/}
          {/* INTRODUCTION*/}
          <Section>
            <Paragraph>
              <Typography variant="body1">
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
          </Section>

          {/* what can be accessed? */}
          <Section>
            <Typography variant="h6" style={{ paddingBottom: '16px' }}>
              What data can be accessed?
            </Typography>
            <Paragraph>
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
                deprecate 
                <a
                  href="https://iatistandard.org/en/news/notice-iati-standard-version-1-is-deprecated/"
                  target="_blank"
                >
                  version 1 by IATI members
                </a>
                , which was implemented July 2019.
              </Typography>
            </Paragraph>

            <Paragraph>
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
          </Section>

          {/* Testing the new Datastore API (19 Aug - 18 Sept) */}
          <Section>
            <Paragraph>
              <Typography variant="body1">
                Users are invited to{' '}
                <a
                  href="http://https://test-datastore.iatistandard.org/api/"
                  target="_blank"
                >
                  test the API
                </a>{' '}
                to build queries of selected IATI data and review the output of
                data from the Datastore. Specifically users are requested to:
              </Typography>
            </Paragraph>
            <Paragraph>
              <Typography variant="body1">
                <ul>
                  <li>
                    - check that they can filter the data by the
                    elements/parameters they require;
                  </li>
                  <li>
                    - review the content of the data that is returned to ensure
                    it accurately matches the elements/parameters selected and,
                  </li>
                  <li>
                    -check that the output they receive is usable and matches
                    their expectations.
                  </li>
                </ul>
              </Typography>
            </Paragraph>
            <Paragraph>
              <Typography variant="body1">
                When testing, please refer to the{' '}
                <a href="https://docs.oipa.nl/?version=latest" target="_blank">
                  Datastore API documentation
                </a>{' '}
                and{' '}
                <a
                  href="https://docs.google.com/document/d/1nTu1Jdg17toiQoemJT3R9YPwvAwCN1gpFnnL1R-lfHY/edit?usp=sharing"
                  target="_blank"
                >
                  IATI Datastore – API mapping and examples
                </a>
                , then provide your feedback on Github on the{' '}
                <a
                  href="https://github.com/zimmerman-zimmerman/OIPA/projects/5"
                  target="_blank"
                >
                  IATI Datastore project
                </a>
                . This will help the technical team and Zimmerman and Zimmerman
                more easily review feedback and, where applicable, convert
                issues directly into GitHub tickets to work on
              </Typography>
            </Paragraph>
            <Paragraph>
              <Typography variant="body1">
                Testing the new Datastore Query Builder (1st - 31st October).
              </Typography>
            </Paragraph>
            <Paragraph>
              <Typography variant="body1">
                Users are invited to test the new query builder to test that the
                range of filters meet their needs and to review the outputs they
                receive match expectations.
              </Typography>
            </Paragraph>
            <Paragraph>
              <Typography variant="body1">
                Please provide your feedback on Github on the IATI Datastore
                project. This will help the technical team and Zimmerman and
                Zimmerman more easily review feedback and, where applicable,
                convert issues directly into GitHub tickets to work on
              </Typography>
            </Paragraph>
          </Section>

          {/* What will happen after the Datastore testing phase?  */}
          <Section>
            <Paragraph>
              <Typography variant="body1">
                After the testing deadline of 18 September, the technical team
                and Zimmerman and Zimmerman will post an update about the
                collected feedback on IATI Discuss. They will also contact users
                individually if more information is needed, continue triaging
                issues and action changes where required.
              </Typography>
            </Paragraph>
            <Paragraph>
              <Typography variant="body1">So, you can output:</Typography>
            </Paragraph>
            <Paragraph>
              <Typography variant="body1">
                Based on the scope of the testing phase and its follow-up weeks,
                a date for the official launch of the Datastore will be set and
                the old Datastore will be phased out 6 months after this date.
              </Typography>
            </Paragraph>
          </Section>

          {/* Help to transition from using the old datastore to the new IATI Datastore */}
          <Section>
            <Paragraph>
              <Typography variant="body1">
                The technical team will be working to ensure that users can
                smoothly transition from using the old datastore to using the
                new IATI Datastore. They will:
              </Typography>
            </Paragraph>
            <Paragraph>
              <Typography variant="body1">So, you can output:</Typography>
            </Paragraph>
            <Paragraph>
              <Typography variant="body1">
                <ul>
                  <li>
                    provide a mapping document with some examples to help
                    testing and migrating between Datastore versions
                  </li>
                  <li>
                    provide automated redirects from old to new datastore API
                    calls for 6 months
                  </li>
                  <li>publish API documentation and a User Manual</li>
                  <li>
                    offer direct support from the technical team via email or
                    one-to-one calls
                  </li>
                </ul>
              </Typography>
            </Paragraph>
            <Paragraph>
              <Typography variant="body1">
                Thanks in advance to IATI’s dedicated community who are able to
                support the testing phase of the Datastore. The technical team
                and Zimmerman and Zimmerman look forward to receiving your
                feedback. For any questions please email:{' '}
                <a href="mailto:support@iatistandard.org" target="_blank">
                  support@iatistandard.org
                </a>
                .
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
                questions you want to answer with IATI data, you can form
                queries and set up filters to get the details you require. You
                can do this via using the Datastore API or the Query Builder.
              </Typography>
            </Paragraph>
          </Section>

          {/* Using the Datastore API */}


          {/* Using the Query Builder */}
          <Section>
            <Typography variant="h6" style={{ paddingBottom: '16px' }}>
              Using the Query Builder
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
                original IATI data, provided in XML format, into two more
                formats - CSV and JSON. All data in the Datastore is filtered
                and output based on IATI activities. The exception is converting
                the data into CSV format, which also allows you to output it
                based on budgets and transactions.
              </Typography>
            </Paragraph>

            <Paragraph>
              <Typography variant="body1">So, you can output:</Typography>
            </Paragraph>

            <Paragraph>
              <Typography variant="body1">
                XML - The Datastore returns the original activity XML as
                published. This is enhanced with metadata, specifying the
                version of the IATI standard that individual activities were
                published at, as well as details of the query result.
              </Typography>
            </Paragraph>

            <Paragraph>
              <Typography variant="body1">
                CSV - The Datastore will convert the published XML data into CSV
                format. Only a subset of published data is present. This format
                can be used to analyse information using spreadsheet software
                such as Microsoft Excel or Libreoffice Calc.
              </Typography>
            </Paragraph>

            <Paragraph>
              <Typography variant="body1">
                You can select the rows in a CSV file to represent individual
                activities, budgets or transactions depending on the output
                format you select. Each of these may be expanded by sector or
                country so that percentage splits can be analysed. Less
                technically adept users can use the Datastore CSV Query Builder
                tool to access data in this format.
              </Typography>
            </Paragraph>

            <Paragraph>
              <Typography variant="body1">
                JSON - The Datastore will convert the published XML to JSON
                format. All the original published information is present in
                this alternative format. The same metadata that is given in the
                XML output is available in the JSON output.
              </Typography>
            </Paragraph>
          </Section>
        </Container>

        <Footer />
      </div>
    </PageContainer>
  );
};
