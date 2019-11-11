// @ts-nocheck
import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { Column } from '@devexpress/dx-react-grid';
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
import { useState } from 'react';
import { useEffect } from 'react';
import { docs } from 'jest-cli/build/cli/args';

interface IRow {
  name: string;
  gender: string;
  city: string;
  car: string;
}

const URL =
  'https://test-datastore.iatistandard.org/search/activity/select?q=reporting_org_type_code:(10)%20AND%20sector_code:(%2211130%22%20%22112%22)%20AND%20recipient_country_code:(KE)&wt=json&rows=10';

export const DataTable = () => {
  const [rows, setRows] = useState([]);

  const options = {
    onMount: true, // will fire on componentDidMount (GET by default)
    data: [], // default for `data` will be an array instead of undefined
  };
  const { loading, error, data } = useFetch(URL, options);
  const loadedData: ResponseModel = data && data;
  const responseData: Response = loadedData && loadedData.response;
  const docsData: Doc[] = responseData && responseData.docs;

  const columns: Column[] = [
    { name: 'reporting_org', title: 'Reporting Organisation' },
    { name: 'reporting_org_type_name', title: 'Reporting Org. Type' },
    { name: 'recipient_country_name', title: 'Country' },
  ];

  //useEffect(() => loadData(setRows(docsData)));

  return (
    <>
      {error && 'Error!'}
      {loading && 'Loading...'}
      {
        <Paper>
          {console.log('docs', docsData)}

          <Grid rows={rows} columns={columns}>
            <Table />
            <TableHeaderRow />
          </Grid>
        </Paper>
      }
    </>
  );
};
