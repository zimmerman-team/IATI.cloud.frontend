import React from 'react';
import Paper from '@material-ui/core/Paper';

import {
  DataTypeProvider,
  TreeDataState,
  SortingState,
  SearchState,
  FilteringState,
  PagingState,
  CustomTreeData,
  IntegratedFiltering,
  IntegratedPaging,
  IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableTreeColumn,
  PagingPanel,
  Toolbar,
  TableColumnVisibility,
  SearchPanel,
  ColumnChooser,
} from '@devexpress/dx-react-grid-material-ui';
import { TableRow } from 'app/components/datadisplay/tables/common/TableRow';
import { TableCell } from 'app/components/datadisplay/tables/common/TableCell';
import { tasks, employees, priorities } from './data.json';

const EmployeeFormatter = ({ row }) => (
  <div
    style={{
      display: 'flex',
    }}
  >
    <div
      style={{
        display: 'inline-block',
        background: 'white',
        borderRadius: '3px',
        width: '30px',
        height: '30px',
        margin: '-8px 8px -8px 0',
        textAlign: 'center',
      }}
    >
      <img
        src={`https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/${
          employees.find(e => e.ID === row.Assigned_Employee_ID).Picture
        }`}
        style={{
          height: '28px',
          margin: '0 auto',
        }}
        alt="Avatar"
      />
    </div>
    {employees.find(e => e.ID === row.Assigned_Employee_ID).Name}
  </div>
);

const getChildRows = (row, rows) => {
  const childRows = rows.filter(r => r.Parent_ID === (row ? row.ID : 0));
  return childRows.length ? childRows : null;
};

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'Subject', title: 'Task Subject' },

        { name: 'Status', title: 'Status' },
        {
          name: 'Priority',
          title: 'Priority',
          getCellValue: row =>
            priorities.find(p => p.ID === row.Priority).Value,
        },
        {
          name: 'Completion',
          title: '% Completed',
          getCellValue: row => `${row.Completion}%`,
        },
        {
          name: 'Start_Date',
          title: 'Start Date',
          getCellValue: row => row.Start_Date.split('T')[0],
        },
        {
          name: 'Due_Date',
          title: 'Due Date',
          getCellValue: row => row.Due_Date.split('T')[0],
        },
      ],
      rows: tasks,
      pageSizes: [5, 10, 20],
      defaultColumnWidths: [
        { columnName: 'Subject', width: 300 },
        { columnName: 'Assigned_Employee_ID', width: 180 },
        { columnName: 'Status', width: 120 },
        { columnName: 'Priority', width: 100 },
        { columnName: 'Completion', width: 100 },
        { columnName: 'Start_Date', width: 120 },
        { columnName: 'Due_Date', width: 120 },
      ],
      defaultHiddenColumnNames: ['Priority', 'Completion'],
      tableColumnExtensions: [{ columnName: 'Completion', align: 'right' }],
      employeeColumns: ['Assigned_Employee_ID'],
    };
  }

  render() {
    const {
      rows,
      columns,
      pageSizes,
      defaultHiddenColumnNames,
      tableColumnExtensions,
      employeeColumns,
    } = this.state;

    return (
      <Paper>
        <Grid rows={rows} columns={columns}>
          <DataTypeProvider
            for={employeeColumns}
            formatterComponent={EmployeeFormatter}
          />

          <TreeDataState />
          <FilteringState />
          <SortingState />
          <SearchState defaultValue="" />
          <PagingState defaultCurrentPage={0} defaultPageSize={pageSizes[1]} />

          <CustomTreeData getChildRows={getChildRows} />
          <IntegratedFiltering />
          <IntegratedSorting />
          <IntegratedPaging />

          <Table
            columnExtensions={tableColumnExtensions}
            rowComponent={TableRow}
            cellComponent={TableCell}
          />
          <TableColumnVisibility
            defaultHiddenColumnNames={defaultHiddenColumnNames}
          />

          <TableHeaderRow showSortingControls />
          <TableTreeColumn for="Subject" />

          <Toolbar />
          <SearchPanel />
          <ColumnChooser />

          <PagingPanel pageSizes={pageSizes} />
        </Grid>
      </Paper>
    );
  }
}
