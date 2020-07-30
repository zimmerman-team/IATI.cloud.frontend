import React from 'react';
import { ParameterHeader } from 'app/modules/documentation-module/common/DocDetail/common/ApiParameterList/common/ui/ParameterHeader';
import { ParameterList } from 'app/modules/documentation-module/common/DocDetail/common/ApiParameterList/common/ui/ParameterList';
import { ParameterListItem } from 'app/modules/documentation-module/common/DocDetail/common/ApiParameterList/common/ui/ParameterListItem';

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
    <React.Fragment>
      {/* -------------------- */}
      {/* param header */}
      <ParameterHeader>PARAMS</ParameterHeader>
      {/* --------- */}

      {/* -------------------- */}
      {/* param list */}
      <ParameterList>
        {data &&
          data.map((item, index) => (
            <ApiCallParamItem key={index} data={item} />
          ))}
      </ParameterList>
      {/* --------- */}
    </React.Fragment>
  );
};
