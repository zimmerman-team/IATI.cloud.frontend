import React from 'react';

export const ApiCallParamItem = ({ data }) => {
  // console.log('query', data.key);
  return (
    <li
      css={`
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
      `}
    >
      <div>{data.key}</div>
      <div>{data.value}</div>
    </li>
  );
};

export const ApiCallParamList = ({ data }) => {
  // console.log(data);
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
        {data && data.map(item => <ApiCallParamItem data={item} />)}
      </ul>
      {/* --------- */}
    </>
  );
};
