import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { ApiItemDivider } from "app/modules/Documentation/common/DocDetail/common/utils/ui";
import { ApiCallParamList } from "app/modules/Documentation/common/DocDetail/common/ApiParameterList";
import { useVisible } from "react-hooks-visible";
import styled from "styled-components";
import { useStoreActions } from "app/modules/Documentation/state/store";

const CallHeader = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 500;
`;
const MethodType = styled.div`
  margin-right: 10px;
  color: green;
`;

const CallContainer = styled.div`
  background-color: #f0f3f7;
  padding: 10px;
  overflow: hidden;
  overflow-wrap: break-word;
`;

const Code = styled.code`
  font-size: 12px;
  color: rgba(34, 34, 34, 0.38);
`;

/* -------------------------------------------------------------------------- */
/* ApiCallFragment */
/* -------------------------------------------------------------------------- */

export const ApiCallFragment = data => {
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

  if (percent > 99) {
    if (targetRef.current) {
      if (request) {
        showRequest(request);
      }
    }
  }

  return (
    <Grid
      item
      md={12}
      id={parsed.name ? parsed.name : ''}
      ref={targetRef}
      style={{ opacity: percent / 100 }}
    >
      <Box width="100%" height="50px" />
      <Grid container spacing={2}>
        <Grid item md={12}>
          {/* call header */}
          <CallHeader>
            {request && <MethodType>{request.method}</MethodType>}
            <div>{parsed.name}</div>
          </CallHeader>
        </Grid>

        {/* call url */}
        {request && (
          <Grid item md={12}>
            <CallContainer>
              <Code>{request.url.raw.replace('{{url}}', targetURL)}</Code>
            </CallContainer>
          </Grid>
        )}

        {/* parameter description */}
        {parsed.description && (
          <Grid item md={12}>
            <Typography variant="body2">
              {parsed.description && parsed.description}
            </Typography>
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
        <Box width="100%" height="50px" />
      </Grid>
    </Grid>
  );
};

/* -------------------------------------------------------------------------- */
