import { Box, Button, Grid } from '@material-ui/core';
// import { response } from 'app/modules/Documentation/common/DocCallPreview/common/RequestExample/response';

import {
  RequestModel,
  UrlModel,
} from 'app/modules/documentation-module/state/model';
import { useStoreState } from 'app/modules/documentation-module/state/store';
import React from 'react';
import useFetch from 'use-http';
import styled from 'styled-components';

const ResponseDiv = styled.div`
  color: white;
  padding: 20px;
  padding-top: 0;
`;

const ResponseButton = styled(Button)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: black;
    width: 50%;
    cursor: pointer;
  }
`;

export const RequestResponse = () => {
  const requestObj: RequestModel = useStoreState(
    (state) => state.request.activeRequest
  );

  const url: UrlModel = requestObj.url;

  const moddedURL = url.raw.replace(
    '{{url}}',
    'https://iati.cloud'
  );

  const [request, response] = useFetch(moddedURL);
  const handleClick = () => request.get();

  //console.log('leggo');

  return (
    <Grid container>
      <Box height="20px" width="100%" />
      {/* header */}
      <Grid item md={12}>
        <ResponseDiv>Example response</ResponseDiv>
      </Grid>

      {/* button */}
      {handleClick && (
        <Grid item md={12}>
          <ResponseDiv>
            <ResponseButton onClick={handleClick}>
              Execute request
            </ResponseButton>
          </ResponseDiv>
        </Grid>
      )}

      {/* content */}
      <Grid item md={12}>
        <ResponseDiv>
          {request.loading
            ? 'loading....'
            : response && (
                <code style={{ display: 'block' }}>
                  <pre>{JSON.stringify(response, null, 2)}</pre>
                </code>
              )}
        </ResponseDiv>
      </Grid>
    </Grid>
  );
};
