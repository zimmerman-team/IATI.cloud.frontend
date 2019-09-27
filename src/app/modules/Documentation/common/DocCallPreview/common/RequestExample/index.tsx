import React from 'react';
import { Grid } from '@material-ui/core';
import { RequestExampleModel } from 'app/modules/Documentation/common/DocCallPreview/common/RequestExample/model';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { codes } from './code';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles/hljs';

const ADDED = [1, 2];
const REMOVED = [6];

export const RequestExample = (props: RequestExampleModel) => {
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
                font-size: 13px;
                overflow-wrap: break-word;
              `}
              // showLineNumbers
              wrapLines
              language="python"
              style={monokaiSublime}
            >
              {codes.code}
            </SyntaxHighlighter>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
