import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { useVisible } from 'react-hooks-visible';
import { useClipboard } from 'use-clipboard-copy';

import { useStoreActions } from 'app/modules/Documentation/state/store';
import { ApiItemDivider } from 'app/modules/Documentation/common/DocDetail/common/utils/ui';
import { ApiCallParamList } from 'app/modules/Documentation/common/DocDetail/common/ApiParameterList';
import { Code } from 'app/modules/Documentation/common/DocDetail/common/ApiCallFragment/common/ui/Code';
import { CallContainer } from 'app/modules/Documentation/common/DocDetail/common/ApiCallFragment/common/ui/CallContainer';
import { MethodType } from 'app/modules/Documentation/common/DocDetail/common/ApiCallFragment/common/ui/MethodType';
import { CallHeader } from 'app/modules/Documentation/common/DocDetail/common/ApiCallFragment/common/ui/CallHeader';
import styled from 'styled-components';

/* -------------------------------------------------------------------------- */
/* ApiCallFragment */
/* -------------------------------------------------------------------------- */

const CopySignal = styled.div`
  color: green;
  margin-left: 10px;
`;

export const ApiCallFragment = data => {
  const clipboard = useClipboard({ copiedTimeout: 600 });
  const parsed = data.data;
  const request = parsed.request;
  const targetURL = 'https://test-datastore.iatistandard.org';

  const showRequest = useStoreActions(actions => actions.request.showRequest);

  const [targetRef, percent] = useVisible<HTMLDivElement>(
    (vi: number) => Math.floor(vi * 100),
    {
      rootMargin: '300px 0px -200px 0px',
    }
  );

  // if (percent > 99) {
  //   if (targetRef.current) {
  //     if (request) {
  //       showRequest(request);
  //     }
  //   }
  // }

  const handleClick = React.useCallback(() => {
    const url = request.url.raw.replace('{{url}}', targetURL);
    clipboard.copy(url); // programmatically copying a value
  }, [clipboard.copy]);

  return (
    <Grid
      item
      md={12}
      id={parsed.name ? parsed.name : ''}
      ref={targetRef}
      style={{ opacity: percent / 100 }}
    >
      <Box width="100%" height="39px" />
      <Grid container spacing={2}>
        <Grid item md={12}>
          {/* call header */}
          <CallHeader>
            {request && <MethodType>{request.method}</MethodType>}
            <div>{parsed.name}</div>
            <CopySignal>{clipboard.copied ? 'Copied' : ''}</CopySignal>
          </CallHeader>
        </Grid>

        {/* call url */}
        {request && (
          <>
            <Grid item md={12}>
              <CallContainer onClick={handleClick}>
                <Code>{request.url.raw.replace('{{url}}', targetURL)}</Code>
              </CallContainer>
            </Grid>
            <Grid item md={12}></Grid>
          </>
        )}
        
        {parsed.description && (
          <Grid item md={12}>
             {parsed.description && parsed.description.split('\n').map((line) => {
               return (<Typography variant={"body2"}>{line.replace(/`/g, '')}</Typography>)
             })}
          </Grid>
        )}

        {/* parameter list */}
        {request && (
          <Grid item md={12}>
            <ApiCallParamList data={request.url.query} />
          </Grid>
        )}

        <Grid item md={12}>
          <ApiItemDivider />
        </Grid>
        <Box width="100%" height="39px" />
      </Grid>
    </Grid>
  );
};

/* -------------------------------------------------------------------------- */
