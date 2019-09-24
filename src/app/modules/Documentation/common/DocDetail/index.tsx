import React from 'react';
import { Box } from '@material-ui/core';
import styled from 'styled-components';
import { ApiCategory } from 'app/modules/Documentation/common/DocDetail/common/ApiCategory';
import { ApiDocModel } from 'app/modules/Documentation/model';
import { ApiDocMock } from 'app/modules/Documentation/mock';
import { ApiDocIntro } from 'app/modules/Documentation/common/DocDetail/common/ApiDocIntro';

export const ApiItemDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #f0f3f7;
`;

export const DocDetail = (props: ApiDocModel) => {
  return (
    <>
      {/* -------------------- */}
      {/* intro */}
      <ApiDocIntro />
      {/* ---------- */}

      <Box width="100%" height="50px" />
      {/* -------------------- */}
      {/* Category header */}
      {ApiDocMock.apiDocCategories &&
        ApiDocMock.apiDocCategories.map(category => (
          <ApiCategory
          key={category.categoryName}
            categoryName={category.categoryName}
            categoryDesc={category.categoryDesc}
            categoryCalls={category.categoryCalls}
          />
        ))}

      {/* ---------- */}

      <Box width="100%" height="20px" />
      {/* -------------------- */}
      {/* Call */}

      {/* ---------- */}
    </>
  );
};
