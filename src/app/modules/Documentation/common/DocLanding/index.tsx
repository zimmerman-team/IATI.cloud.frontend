import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { ApiList } from 'app/modules/Documentation/common/DocDetail/common/ApiBaseList';
import { useStoreState } from 'app/modules/Documentation/state/store';
import { Root } from 'app/modules/Documentation/state/RootModel';
import { HeaderH6 } from 'app/modules/Documentation/common/DocLanding/common/ui/HeaderH6';

export const DocLanding = () => {
  // @ts-ignore
  const data: Root = useStoreState(state => state.data && state.data);
  const collection = data && data.collection;

  return (
    <>
      <Box width="100%" height="20px" />
      <Grid container>
        <Grid item md={12}>
          <Typography variant="h5">API Documentation</Typography>
        </Grid>

        <Box width="100%" height="30px" />

        {/* description */}
        <Grid item md={12}>
          <Typography variant="body2">
            This API provides programmatic access to read IATI data. The API
            responses are available in JSON, XML, CSV and XLS. By default the
            API response provides JSON ouput with the &format=JSON construct,
            but if you would like to output XML, CSV or XLS, you need to change
            that construct into that format.
          </Typography>
        </Grid>
      </Grid>
      {/* ------------------------------------------------------------------ */}
      <Box width="100%" height="50px" />
      {/* -------------------- */}
      {/* available endpoints */}
      <Grid container spacing={4}>
        <Grid item md={12}>
          <Typography variant="h6">Available endpoints</Typography>
        </Grid>
        <Grid item md={12}>
          {collection && (
            <ApiList info={collection.info} item={collection.item} />
          )}
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
    </>
  );
};
