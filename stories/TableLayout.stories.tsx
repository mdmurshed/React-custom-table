import TableLayout from '../src/table/TableLayout';
import React from 'react';
import { data } from '../src/table/tableData';
import 'bootstrap/dist/css/bootstrap.css';
export default {
  title: 'TableLayout',
  component: TableLayout,
};
export const TableLayoutExample = () => <TableLayout title={"Table layout"} tableHeadData={['name', 'country', 'phone']} data={data}/>;
