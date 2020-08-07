import React from 'react';
import { Grid } from '@material-ui/core';
import { SubCategoryHeader } from 'app/modules/documentation-module/common/DocDetail/common/ui/SubCategoryHeader';
import { SubCaregoryDescription } from 'app/modules/documentation-module/common/DocDetail/common/ui/SubCaregoryDescription';
import { CallFragment } from 'app/modules/documentation-module/common/DocDetail/common/ui/CallFragment';
export const SubCategoryFragment = ({ item }) => (
  <Grid container spacing={2} id={item.name} key={item.name}>
    {item._postman_isSubFolder && <SubCategoryHeader item={item} />}

    {/*<Box height="20px" />*/}

    {item.description && <SubCaregoryDescription item={item} />}
    {/*<Box height="20px" />*/}

    <CallFragment item={item} />
  </Grid>
);
