import React from "react";
import styled from "styled-components";

const ParameterHeader = styled.div`
  border-top: 1px solid #f0f3f7;
  border-bottom: 1px solid #f0f3f7;
  margin-bottom: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const ParameterList = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ParameterListItem = styled.li`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  div {
    font-size: 14px;
    &:first-child {
      font-weight: bold;
      width: 50%;
    }
  }
`;

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
        {data && data.map(item => <ApiCallParamItem data={item} />)}
      </ParameterList>
      {/* --------- */}
    </>
  );
};
