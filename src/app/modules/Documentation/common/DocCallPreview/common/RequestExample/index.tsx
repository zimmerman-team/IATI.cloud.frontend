import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { RequestExampleModel } from 'app/modules/Documentation/common/DocCallPreview/common/RequestExample/model';
import { Skeletor } from 'app/components/utils/Skeletor';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { codes } from './code';

export const RequestExample = (props: RequestExampleModel) => {
  return (
    <Grid container spacing={4}>
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
          <div
            css={`
              padding: 20px;
              color: white;
              padding-top: 0;
              padding-bottom: 0;
            `}
          >
            // has_crs_add (optional)
          </div>
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
              `}
              language="javascript"
              style={vs2015}
            >
              {codes.code}
            </SyntaxHighlighter>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
