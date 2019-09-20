import { Box } from '@material-ui/core';
import React from 'react';

export type ApiCallParamItemModel = {
  paramName: string;
  paramValue: string;
};

export const ApiCallParamItem = (props: ApiCallParamItemModel) => {
  return (
    <li
      css={`
        display: flex;
        width: 100%;
        div {
          &:first-child {
            font-weight: bold;
            width: 35%;
          }
        }
      `}
    >
      <div>{props.paramName}</div>
      <div>{props.paramValue}</div>
    </li>
  );
};

export type ApiCallParamListModel = {
  parameters: ApiCallParamItemModel[];
};

export const paramListMockData: ApiCallParamListModel = {
  parameters: [
    {
      paramName: 'format',
      paramValue: 'json',
    },
    {
      paramName: 'test',
      paramValue: 'it',
    },
    {
      paramName: 'lorem',
      paramValue: 'ipsum',
    },
  ],
};
export const ApiCallParamList = (props: ApiCallParamListModel) => {
  return (
    <>
      {/* -------------------- */}
      {/* param header */}
      <div
        css={`
          border-top: 1px solid #f0f3f7;
          border-bottom: 1px solid #f0f3f7;
          margin-bottom: 20px;
          padding-top: 10px;
          padding-bottom: 10px;
        `}
      >
        PARAMS
      </div>
      {/* --------- */}

      {/* -------------------- */}
      {/* param list */}
      <ul
        css={`
          list-style: none;
          margin: 0;
          padding: 0;
        `}
      >
        {props.parameters.map(item => (
          <ApiCallParamItem
            key={item.paramName}
            paramName={item.paramName}
            paramValue={item.paramValue}
          />
        ))}
      </ul>
      {/* --------- */}
    </>
  );
};
