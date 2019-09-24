import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { ApiCallParamList } from 'app/modules/Documentation/common/DocDetail/common/lists/ApiParameterList';
import { ApiCallModel } from 'app/modules/Documentation/common/DocDetail/common/ApiCategory/common/ApiCallFragment/model';
import { ApiItemDivider } from 'app/modules/Documentation/common/DocDetail/index';

export const ApiCallFragment = (props: ApiCallModel) => {
  return (
    <Grid item md={12}>
      <Grid container spacing={2}>
        <Grid item md={12}>
          {/* call header */}
          <div
            css={`
              display: flex;
              font-size: 18px;
              font-weight: 500;
            `}
          >
            <div
              css={`
                margin-right: 10px;
                color: green;
              `}
            >
              {props.callType}
            </div>
            <div>activities</div>
          </div>
        </Grid>

        {/* call url */}

        <Grid item md={12}>
          <div
            css={`
              background-color: #f0f3f7;
              padding: 10px;
            `}
          >
            <code
              css={`
                font-size: 14px;
                color: rgba(34, 34, 34, 0.38);
              `}
            >
              {props.callPath}
            </code>
          </div>
        </Grid>

        <Grid item md={12}>
          {/* parameter description */}
          <Typography variant="body2">{props.callDescription}</Typography>
        </Grid>

        <Grid item md={12}>
          {/* parameter list */}
          <ApiCallParamList parameters={props.callParameters} />
        </Grid>

        <Grid item md={12}>
          <ApiItemDivider />
        </Grid>
      </Grid>
    </Grid>
  );
};
