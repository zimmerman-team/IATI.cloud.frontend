import React from 'react';
import { Grid } from '@material-ui/core';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { codes } from './code';
// import { monokaiSublime } from 'react-syntax-highlighter/dist/styles/hljs';
import { useStoreState } from 'app/modules/Documentation/state/store';
import { RequestModel, UrlModel } from 'app/modules/Documentation/state/model';

export const RequestExample = () => {
  const request: RequestModel = useStoreState(
    state => state.request.activeRequest
  );

  const url: UrlModel = request.url;
  if (request) {
    console.log('active request: ' + url.raw);
  }

  return (
    <Grid container>
      {/* header */}
      <Grid item md={12}>
        <div
          css={`
            color: white;
            padding: 20px;
            padding-top: 0;
            padding-bottom: 0;
          `}
        >
          Example request
        </div>
      </Grid>
      {/* content */}
      <Grid item md={12}>
        <div
          css={`
            display: flex;
            flex-direction: column;
          `}
        >
          {/*<div
            css={`
              padding: 20px;
              color: white;
              padding-top: 0;
              padding-bottom: 0;
            `}
          >
            // has_crs_add (optional)
          </div>*/}
          <div
            css={`
              padding: 20px;
              color: white;
              padding-top: 0;
              padding-bottom: 0;
            `}
          >
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
                  // 'https://test-datastore.iatistandard.org'
                )}
            </SyntaxHighlighter>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
