import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { ApiItemDivider } from 'app/modules/Documentation/common/DocDetail/common/utils/ui';
import { ApiCallParamList } from 'app/modules/Documentation/common/DocDetail/common/lists/ApiParameterList';

import { useInView, InView } from 'react-intersection-observer';
export const ApiCallFragment = data => {
  const parsed = data.data;
  const request = parsed.request;
  const targetURL = 'https://test-datastore.iatistandard.org';

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 1,
    rootMargin: '-200px 0px 100px 0px',
  });

    
     if( entry)
     {
      //  console.log(entry.target.id);
     }
    

  return (
    <Grid item md={12} id={parsed.name ? parsed.name : ''} ref={ref}>
      <Box width="100%" height="50px" />
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
            {request && (
              <div
                css={`
                  margin-right: 10px;
                  color: green;
                `}
              >
                {request.method}
              </div>
            )}
            <div>{parsed.name}</div>

        
          </div>
        </Grid>
        {/* call url */}
        {request && (
          <Grid item md={12}>
            <div
              css={`
                background-color: #f0f3f7;
                padding: 10px;
                overflow: hidden;
                overflow-wrap: break-word;
              `}
            >
              <code
                css={`
                  font-size: 12px;
                  color: rgba(34, 34, 34, 0.38);
                `}
              >
                {request.url.raw.replace('{{url}}', targetURL)}
              </code>
            </div>
          </Grid>
        )}
        {parsed.description && (
          <Grid item md={12}>
            {/* parameter description */}
            <Typography variant="body2">
              {parsed.description && parsed.description}
            </Typography>
          </Grid>
        )}
        {request && (
          <Grid item md={12}>
            {/* parameter list */} <ApiCallParamList data={request.url.query} />
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
