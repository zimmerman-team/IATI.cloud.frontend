import React from 'react';

interface Props {
  loading: boolean;
  error: boolean;
  noData: boolean;
}

export function NoDataCellComponent(props: Props) {
  let message = '';
  if (props.noData) {
    message = 'No data';
  }
  if (props.loading) {
    message = 'Loading...';
  }
  if (props.error) {
    message = 'Error';
  }
  return (
    <td
      className="MuiTableCell-root MuiTableCell-body"
      css={`
        text-align: center;
      `}
    >
      {message}
    </td>
  );
}
