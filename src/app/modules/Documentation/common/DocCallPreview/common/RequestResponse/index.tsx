import React from 'react';

import { Grid } from '@material-ui/core';
import { RequestResponseModel } from 'app/modules/Documentation/common/DocCallPreview/common/RequestResponse/model';
import { response } from 'app/modules/Documentation/common/DocCallPreview/common/RequestExample/response';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/prism';

export const RequestResponse = (props: RequestResponseModel) => {
  return (
    <Grid container>
      {/* header */}
      <Grid item md={12}>
        <div
          css={`
            color: white;
            padding: 20px;
            padding-bottom: 0;
          `}
        >
          Example response
        </div>
      </Grid>
      {/* content */}
      <Grid item md={12}>
        {/*<div
          css={`
            color: white;
            padding: 20px;
          `}
        >
          200 - OK
        </div>*/}
        <div
          css={`
            color: white;
            padding: 20px;
            padding-top: 0;
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
            language="javascript"
            style={darcula}
          >
            {response.response}
          </SyntaxHighlighter>
        </div>
      </Grid>
    </Grid>
  );
};
