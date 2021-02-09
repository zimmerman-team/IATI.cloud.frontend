/* eslint-disable no-nested-ternary */
// @ts-nocheck
import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import sortBy from 'lodash/sortBy';
import get from 'lodash/get';
import axios from 'axios';
import { PagingState, CustomPaging } from '@devexpress/dx-react-grid';
import { ModuleStore } from 'app/modules/querybuilder-module/state/store';
import {
  Grid,
  PagingPanel,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';

import {
  defaultActivityTableCols,
  defaultTransactionTableCols,
  defaultBudgetTableCols,
} from 'app/modules/querybuilder-module/fragments/results/model';
import { ROWS } from 'app/state/models/QueryModel';
import { NoDataCellComponent } from './common/nodatacellcomp';
import { getRetrievedItemsLabel } from 'app/modules/querybuilder-module/fragments/results/util';

export const DataTable = (props) => {
  const [cols, setCols] = useState(
    props.rowFormat === 'activity'
      ? defaultActivityTableCols
      : props.rowFormat === 'transaction'
      ? defaultTransactionTableCols
      : defaultBudgetTableCols
  );
  const [error, setError] = useState(null);
  const [pageSizes] = useState([10, 25, 50]);
  const [docsData, setDocsData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [tablePage, setTablePage] = useState(0);
  const [loading, setLoading] = useState(false);
  const store = ModuleStore.useStore();
  const rowFormat = store.get('rowFormat');

  useEffect(() => {
    if (!props.defaultCols && docsData.length > 0) {
      const newCols: any = [];
      Object.keys(docsData[0]).forEach((key) => {
        newCols.push({ name: key, title: key });
      });
      setCols(sortBy(newCols, 'name'));
    }
  }, [docsData, props.defaultCols]);

  function getData() {
    setLoading(true);
    axios
      .get(
        props.url.replace(
          `rows=${ROWS}`,
          `rows=${pageSize}&start=${tablePage * 10}`
        )
      )
      .then((response) => {
        setDocsData(get(response, 'data.response.docs', []));
        props.setAllDataCount(get(response, 'data.response.numFound', 0));
        setLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          setError(error.response.data);
        } else {
          setError(error.message);
        }
      });
  }

  useEffect(() => {
    getData();
  }, [tablePage, pageSize]);

  return (
    <div
      css={`
        & [class*='MuiButton-root'] {
          font-weight: 300;
        }
        & [class*='Pagination-activeButton'] {
          font-weight: 600;
        }
      `}
    >
      <h3>
        Datastore retrieved {props.allDataCount}{' '}
        {getRetrievedItemsLabel(rowFormat, props.allDataCount)} for you
      </h3>
      <Paper>
        <Grid rows={docsData} columns={cols}>
          <PagingState
            pageSize={pageSize}
            currentPage={tablePage}
            onPageSizeChange={setPageSize}
            onCurrentPageChange={setTablePage}
          />
          <CustomPaging totalCount={props.allDataCount} />
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
          <PagingPanel pageSizes={pageSizes} />
        </Grid>
      </Paper>
    </div>
  );
};
