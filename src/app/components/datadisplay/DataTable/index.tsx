// @ts-nocheck
import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import sortBy from 'lodash/sortBy';
import { PagingState, IntegratedPaging } from '@devexpress/dx-react-grid';
import {
  Grid,
  PagingPanel,
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
} from 'app/modules/querybuilder-module/fragments/results/model';
import { ROWS } from 'app/state/models/QueryModel';
import { NoDataCellComponent } from './common/nodatacellcomp';

interface IRow {
  name: string;
  gender: string;
  city: string;
  car: string;
}

export const DataTable = (props) => {
  const [cols, setCols] = useState(
    props.rowFormat === 'activity'
      ? defaultActivityTableCols
      : props.rowFormat === 'transaction'
      ? defaultTransactionTableCols
      : defaultBudgetTableCols
  );

  const [tablePage, setTablePage] = useState(0);
  const [queryStart, setQueryStart] = useState(0);

  const options = {
    onMount: true, // will fire on componentDidMount (GET by default)
    data: [], // default for `data` will be an array instead of undefined
  };
  const { loading, error, data } = useFetch(
    props.url.replace(`rows=${ROWS}`, `rows=${50}&start=${queryStart}`),
    options,
    // trying to re-fetch on change of page
    // not working
    [tablePage]
  );

  const loadedData: ResponseModel = data && data;
  const responseData: Response = loadedData && loadedData.response;
  const docsData: Doc[] = responseData ? responseData.docs : [];

  const allDataCount = responseData ? responseData.numFound : 0;

  useEffect(() => {
    if (!props.defaultCols && docsData.length > 0) {
      const newCols: any = [];
      Object.keys(docsData[0]).forEach((key) => {
        newCols.push({ name: key, title: key });
      });
      setCols(sortBy(newCols, 'name'));
    }
  }, [docsData, props.defaultCols]);

  function handlePageChange(page) {
    console.log('page', page);
    setTablePage(page + 1);
    setQueryStart(tablePage * 10);
  }
  console.log('querystart:', queryStart);
  console.log('tablepage:', tablePage);
  console.log('docsdata:', docsData);

  return (
    <>
      <h3>
        Datastore retrieved {allDataCount}{' '}
        {allDataCount === 1 ? 'activity' : 'activities'} for you
      </h3>
      <Paper>
        <Grid rows={docsData} columns={cols}>
          <PagingState
            onCurrentPageChange={(page: number) => handlePageChange(page)}
          />
          <IntegratedPaging />
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
          <PagingPanel pageSize="10" />
        </Grid>
      </Paper>
    </>
  );
};
