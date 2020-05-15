// @ts-nocheck
import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { Column } from '@devexpress/dx-react-grid';
import sortBy from 'lodash/sortBy';
import {
  Grid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';
import useFetch from 'use-http/dist';

import {
  Doc,
  Response,
  ResponseModel,
} from 'app/components/datadisplay/DataTable/model';

import {
  defaultActivityTableCols,
  defaultTransactionTableCols,
  defaultBudgetTableCols,
} from 'app/modules/QueryBuilder/fragments/results/model';
import { ROWS } from 'app/state/models/QueryModel';
import { NoDataCellComponent } from './common/nodatacellcomp';

interface IRow {
  name: string;
  gender: string;
  city: string;
  car: string;
}

export const DataTable = props => {
  const [cols, setCols] = useState(
    props.rowFormat === 'activity'
      ? defaultActivityTableCols
      : props.rowFormat === 'transaction'
      ? defaultTransactionTableCols
      : defaultBudgetTableCols
  );

  const options = {
    onMount: true, // will fire on componentDidMount (GET by default)
    data: [], // default for `data` will be an array instead of undefined
  };
  const { loading, error, data } = useFetch(
    props.url.replace(`rows=${ROWS}`, 'rows=10'),
    options
  );
  const loadedData: ResponseModel = data && data;
  const responseData: Response = loadedData && loadedData.response;
  const docsData: Doc[] = responseData ? responseData.docs : [];

  useEffect(() => {
    if (!props.defaultCols && docsData.length > 0) {
      const newCols: any = [];
      Object.keys(docsData[0]).forEach(key => {
        newCols.push({ name: key, title: key });
      });
      setCols(sortBy(newCols, 'name'));
    }
  }, [docsData, props.defaultCols]);

  return (
    <>
      <Paper>
        <Grid rows={docsData} columns={cols}>
          <Table
            noDataCellComponent={() => (
              <NoDataCellComponent
                loading={loading}
                error={error}
                noData={docsData.length === 0}
              />
            )}
            // columnExtensions={cols.map(col => ({
            //   columnName: col.name,
            //   width: 'auto',
            // }))}
          />
          <TableHeaderRow />
        </Grid>
      </Paper>
    </>
  );
};
