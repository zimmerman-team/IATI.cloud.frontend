import React from 'react';
import { ParameterHeader } from 'app/modules/Documentation/common/DocDetail/common/ApiParameterList/common/ui/ParameterHeader';
import { ParameterList } from 'app/modules/Documentation/common/DocDetail/common/ApiParameterList/common/ui/ParameterList';
import { ParameterListItem } from 'app/modules/Documentation/common/DocDetail/common/ApiParameterList/common/ui/ParameterListItem';

export const ApiCallParamItem = ({ data }) => {
  return (
    <ParameterListItem>
      <div>{data.key}</div>
      <div>{data.value}</div>
    </ParameterListItem>
  );
};

export const ApiCallParamList = ({ data }) => {
  return (
    <>
      {/* -------------------- */}
      {/* param header */}
      <ParameterHeader>PARAMS</ParameterHeader>
      {/* --------- */}

      {/* -------------------- */}
      {/* param list */}
      <ParameterList>
        {data && data.map(item => <ApiCallParamItem data={item}  />)}
      </ParameterList>
      {/* --------- */}
    </>
  );
};
