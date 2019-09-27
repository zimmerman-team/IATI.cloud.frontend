import React from 'react';
import { Grid } from '@material-ui/core';
import { RequestExampleModel } from 'app/modules/Documentation/common/DocCallPreview/common/RequestExample/model';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { codes } from './code';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles/hljs';
import { useStoreState } from 'app/modules/Documentation/state/store';


export const RequestExample = (props: RequestExampleModel) => {
  const mockID = 'debbe231-72a6-46a8-8974-6fb636c9dfcf';
  const categories = useStoreState(state => state.collection.item);
  const subCategories = categories.map(subCategories => subCategories.item);
  // console.log(subCategories.flat(Infinity));

  const flattened = subCategories.flat(Infinity);

const testtt = 'a571c294-861f-4286-b054-bcf61e1c5545';
  const subCategory = flattened.find(
    subCategory =>
      subCategory._postman_id === 'a01662dc-60f7-400d-bc31-a3e66ff1caa3'
  );

  console.log(subCategory);

  const subCatItem = subCategory.item;


  const apiCall = subCatItem.find(
    apiCall => apiCall.name === 'has_{field_name} (optional)'
  );
  console.log('call me maybe',apiCall);

  // const found = sub.find(found => found.name === 'activities');
  // console.log('example ' + category);

  return (
    <Grid container>
      {/* header */}
      <Grid item md={12}>
        <div
          css={`
            color: white;
            padding: 20px;
            padding-top: 0;
            padding-bottom: 0;
          `}
        >
          Example request
        </div>
      </Grid>
      {/* content */}
      <Grid item md={12}>
        <div
          css={`
            display: flex;
            flex-direction: column;
          `}
        >
          {/*<div
            css={`
              padding: 20px;
              color: white;
              padding-top: 0;
              padding-bottom: 0;
            `}
          >
            // has_crs_add (optional)
          </div>*/}
          <div
            css={`
              padding: 20px;
              color: white;
              padding-top: 0;
              padding-bottom: 0;
            `}
          >
            <SyntaxHighlighter
              css={`
                /* todo: optimal fontsize */
                font-size: 12px;
                overflow-wrap: break-word;
              `}
              // showLineNumbers
              wrapLines
              language="python"
              style={monokaiSublime}
            >
              {codes.code}
            </SyntaxHighlighter>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
