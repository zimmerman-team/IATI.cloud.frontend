import { Box } from '@material-ui/core';
import React from 'react';
import { ApiCallParamListModel, ApiCallParamItemModel } from './model';

export const ApiCallParamItem = (props: ApiCallParamItemModel) => {
  return (
    <li
      css={`
        display: flex;
        width: 100%;
        margin-bottom: 10px;
        div {
          font-size: 1rem;
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
