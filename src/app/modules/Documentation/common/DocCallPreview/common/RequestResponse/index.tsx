import React from 'react';

import { Grid } from '@material-ui/core';
import { RequestResponseModel } from 'app/modules/Documentation/common/DocCallPreview/common/RequestResponse/model';
import { Skeletor } from 'app/components/utils/Skeletor';

export const RequestResponse = (props: RequestResponseModel) => {
  return (
    <Grid container spacing={4}>
      {/* header */}
      <Grid item md={12}>
        <div
          css={`
            color: white;
            padding: 20px;
          `}
        >
          Example response
        </div>
      </Grid>
      {/* content */}
      <Grid item md={12}>
        <div
          css={`
            color: white;
            padding: 20px;
          `}
        >
          200 - OK
        </div>
        <div
          css={`
            color: white;
            padding: 20px;
          `}
        >
          Lorem ipsum dolor simet empty response
        </div>
      </Grid>
    </Grid>
  );
};
