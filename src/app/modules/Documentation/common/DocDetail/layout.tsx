import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { Skeletor } from 'app/components/utils/Skeletor';
import styled from 'styled-components';
import { ApiList } from 'app/modules/Documentation/common/DocDetail/common/lists/ApiBaseList';
import { itemList } from 'app/modules/Documentation/common/DocDetail/common/lists/ApiBaseList/mock';
import { ApiCallParamList } from 'app/modules/Documentation/common/DocDetail/common/lists/ApiParameterList';
import { paramListMockData } from 'app/modules/Documentation/common/DocDetail/common/lists/ApiParameterList/mock';

const HeaderH6 = styled.div`
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--black);
`;

export const ApiItemDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #f0f3f7;
`;

type ApiCallModel = {
  callType: string;
  callName: string;
  callDescription: string;
  callUrl: string;
};
export const ApiCallFragment = (props: ApiCallModel) => {
  return (
    <Grid container spacing={4}>
      {/* api fragment header */}
      <Grid item md={12}></Grid>

      {/* api url */}
      <Grid item md={12}></Grid>

      {/* api call description */}
      <Grid item md={12}></Grid>

      {/* api call parameter header */}
      <Grid item md={12}></Grid>

      {/* api call parameter list */}
      {/* todo: map through parameters */}
      <Grid item md={12}></Grid>
    </Grid>
  );
};

const ApiCategoryFragment = () => {
  return <></>;
};

const ApiSubCategoryFragment = () => {
  return <></>;
};

export const DocDetailLayout = () => {
  return (
    <Grid container>
      {/* header */}
      <Grid item md={12}>
        <Typography variant="h5">API Documentation</Typography>
      </Grid>

      <Box width="100%" height="30px" />

      {/* description */}
      <Grid item md={12}>
        <Typography variant="body2">
          This API provides programmatic access to read IATI data. The API
          responses are available in JSON, XML, CSV and XLS. By default the API
          response provides JSON ouput with the &format=JSON construct, but if
          you would like to output XML, CSV or XLS, you need to change that
          construct into that format.
        </Typography>
      </Grid>

      <Box width="100%" height="30px" />
      {/* ------------------------------------------------------------------ */}

      {/* links */}
      <Grid container spacing={4}>
        <Grid item md={4}>
          <Skeletor width="100%" height="48px" />
        </Grid>
        <Grid item md={4}>
          <Skeletor width="100%" height="48px" />
        </Grid>
      </Grid>

      <Box width="100%" height="50px" />
      {/* -------------------- */}
      {/* available endpoints */}
      <Grid container spacing={4}>
        <Grid item md={12}>
          <Typography variant="h6">Available endpoints</Typography>
        </Grid>
        <Grid item md={12}>
          <ApiList data={itemList.data} />
        </Grid>
      </Grid>
      {/* ---------- */}

      <Box width="100%" height="50px" />
      {/* -------------------- */}
      {/* Exports */}
      <Grid container spacing={4}>
        <Grid item md={12}>
          <HeaderH6>XML Export</HeaderH6>
          <Typography variant="body2">
            If you require XML format from the API, simply use the format
            &format=XML in your call.
          </Typography>
        </Grid>

        <Grid item md={12}>
          <HeaderH6>CSV Export</HeaderH6>
          <Typography variant="body2">
            If you require XML format from the API, simply use the format
            &format=XML in your call.
          </Typography>
        </Grid>

        <Grid item md={12}>
          <HeaderH6>XLS Export</HeaderH6>
          <Typography variant="body2">
            If you require XLS format from the API, simply use the format
            &format=XLS in your call. Not all the API calls have multi format
            support.
          </Typography>
        </Grid>
      </Grid>
      {/* ---------- */}

      <Box width="100%" height="50px" />
      {/* -------------------- */}
      {/* Category header */}
      <Grid container spacing={4}>
        <ApiItemDivider />
        <Grid item md={12}>
          <Typography variant="h4">Activity List</Typography>
        </Grid>
        <Grid item md={12}>
          <Typography variant="body2">
            Returns a list of IATI Activities stored in the IATI Datastore based
            on 10 results as a default. You can retrieve up to 20 activities in
            a single call using the &page_size=[nr] option. If you want to go
            specific page, you can use &page=[nr] option. If the input value of
            page_size exceeds 20, the miximum limit number, which is 20, will be
            returned.
          </Typography>
        </Grid>
      </Grid>
      {/* ---------- */}

      <Box width="100%" height="20px" />
      {/* -------------------- */}
      {/* Call */}
      <Grid container spacing={2}>
        <Grid item md={12}>
          <ApiItemDivider />
        </Grid>

        <Grid item md={12}>
          {/* cakk header */}
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
              GET
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
              https://test-datastore.iatistandard.org/api/activities/?format=json
            </code>
          </div>
        </Grid>

        <Grid item md={12}>
          {/* parameter description */}
          <Typography variant="body2">
            Each item contains summarized information on the activity being
            shown, including the URI to activity details, which contain all
            information. To show more information in list view the fields
            parameter can be used. Example;
            fields=activity_id,title,country,any_field.
          </Typography>
        </Grid>

        <Grid item md={12}>
          {/* parameter list */}
          <ApiCallParamList parameters={paramListMockData.parameters} />
        </Grid>

        <Grid item md={12}>
          <ApiItemDivider />
        </Grid>
      </Grid>

      {/* ---------- */}
    </Grid>
  );
};
