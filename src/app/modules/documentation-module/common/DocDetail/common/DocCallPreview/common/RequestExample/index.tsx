import React from 'react';
import { Grid } from '@material-ui/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { useStoreState } from 'app/modules/documentation-module/state/store';
import {
  RequestModel,
  UrlModel,
} from 'app/modules/documentation-module/state/model';
import styled from 'styled-components';

const ElementOne = styled.div`
  color: white;
  padding: 20px;
  padding-top: 0;
  padding-bottom: 0;
`;

const ElementTwo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ELementThree = styled.div`
  padding: 20px;
  color: white;
  padding-top: 0;
  padding-bottom: 0;
`;

export const RequestExample = () => {
  const request: RequestModel = useStoreState(
    (state) => state.request.activeRequest
  );

  const url: UrlModel = request.url;

  return (
    <Grid container>
      {/* header */}
      <Grid item md={12}>
        <ElementOne>Example request</ElementOne>
      </Grid>
      {/* content */}
      <Grid item md={12}>
        <ElementTwo>
          <ELementThree>
            <SyntaxHighlighter
              css={`
                /* todo: optimal fontsize */
                font-size: 12px;
                overflow-wrap: break-word;
              `}
              // showLineNumbers
              wrapLines
              language="python"
            >
              {/*{codes.code}*/}

              {/*{'curl --location --request GET ' +*/}
              {'' +
                url.raw.replace(
                  '{{url}}',
                  ''
                  // 'https://iatidatastore.iatistandard.org'
                )}
            </SyntaxHighlighter>
          </ELementThree>
        </ElementTwo>
      </Grid>
    </Grid>
  );
};
