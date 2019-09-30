import { Grid } from '@material-ui/core';
import { RequestResponseModel } from 'app/modules/Documentation/common/DocCallPreview/common/RequestResponse/model';
// import { response } from 'app/modules/Documentation/common/DocCallPreview/common/RequestExample/response';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/prism';
import { RequestModel, UrlModel } from 'app/modules/Documentation/state/model';
import { useStoreState } from 'app/modules/Documentation/state/store';
import useFetch from 'fetch-suspense';
import React, { Suspense } from 'react';

export const RequestResponse = () => {
  const request: RequestModel = useStoreState(
    state => state.request.activeRequest
  );

  const url: UrlModel = request.url;
  if (request) {
    console.log('active request: ' + url.raw);
  }

  /*const response = useFetch(
    url.raw.replace('{{url}}', 'https://test-datastore.iatistandard.org'),
    { method: 'GET' }
  );
  */

  /*
  const options = {
    // accepts all `fetch` options
    onMount: true, // will fire on componentDidMount (GET by default)
    data: [], // setting default for `data` as array instead of undefined
  };

  const { loading, error, data } = useFetch(
    url.raw.replace('{{url}}', 'https://test-datastore.iatistandard.org'),

    options
  );

  console.log(data);
*/

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
        <div
          css={`
            color: white;
            padding: 20px;
            padding-top: 0;
          `}
        >
          {/* {error && 'Error!'}
          {loading && 'Loading...'}
          {!loading && data.results.map(todo => <div>{todo}</div>)}*/}
        </div>
      </Grid>
    </Grid>
  );
};
