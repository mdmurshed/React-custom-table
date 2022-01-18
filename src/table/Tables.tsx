import React, { FC } from 'react';
import { tableDataType } from './tableData';
import { filterTheTable } from './tableFunctions';
import { RowLayoutType } from './RowLayout';
import {Table} from "react-bootstrap";
interface TablesType {
  tableHeadData: string[];
  sorter: (str: string) => void;
  searchData: tableDataType[];
  lengthOfTData: number;
  page: number;
  numberOfRow: number;
  RowLayout: React.FunctionComponent<RowLayoutType>;
}
const Tables: FC<TablesType> = function Tables({
  tableHeadData,
  sorter,
  searchData,
  lengthOfTData,
  page,
  numberOfRow,
  RowLayout,
}) {
  return (
    <Table striped bordered hover className={'border rounded-2'}>
      <thead>
        <tr className="header">
          {tableHeadData.map((item, index) => (
            <th
              key={index}
              style={{ width: '60%' }}
              onClick={() => sorter(item)}
            >
              {item}*
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filterTheTable(searchData, lengthOfTData, page, numberOfRow).map(
          (item) => (
            <RowLayout
              id={item.id}
              name={item.name}
              country={item.country}
              phone={item.phone}
            />
          )
        )}
      </tbody>
    </Table>
  );
};

export default Tables;
