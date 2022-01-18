import React, { useEffect, useState, useReducer,FC,HTMLAttributes } from 'react';
import { data, tableDataType } from './tableData';
import TablePagination from './Pagination';
import Navigation from './Navigation';
import { numberOfPage } from './tableFunctions';
import DropdownPage from './DropDownPage';
import Tables from './Tables';
import TableSearch from './TableSearch';
import RowLayout from './RowLayout';
// import TablePaginationV2 from './PaginationV2';
export interface TableLayoutType extends HTMLAttributes<HTMLOrSVGElement> {
    title:string
}
export const TableLayout:FC<TableLayoutType> = function TableLayout({title}) {
  const [lengthOfTData] = useState(data.length);
  const [numberOfRow] = useState(5);
  const [numberOfPages] = useState(numberOfPage(lengthOfTData, numberOfRow));
  const [searchBy, setSearchBy] = useState<string>('name');
  const [tableHeadData] = useState<string[]>(['name', 'country', 'phone']);
  // page zero means page one
  const [page, setPage] = useState(0);
  const [tableData] = useState<tableDataType[]>(data);
  const [searchData, setSearchData] = useState<tableDataType[]>(tableData);
  const search = async (e: string) => {
    const data = e;
    setSearchData(
      tableData.filter((item) =>
        data == '' ? true : item[searchBy].match(data) != null
      )
    );
  };
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  console.log('page : ', page);
  const sorter = (category: string) => {
    console.log(
      searchData.sort((a, b) => {
        return a[category] < b[category] ? -1 : 1;
      })
    );
    setSearchData(
      searchData.sort((a, b) => {
        return a[category] < b[category] ? -1 : 1;
      })
    );
    forceUpdate();
  };

  useEffect(() => {
    console.log(Array.from(Array(10).keys()));
  }, [searchData, sorter]);

  return (
    <div>
      <h2>{title}</h2>
      <TableSearch
        searchBy={searchBy}
        setSearchBy={(search: string) => setSearchBy(search)}
        tableHeadData={tableHeadData}
        search={(e) => search(e)}
      />
      <h5>Table</h5>
      <Tables
        tableHeadData={tableHeadData}
        sorter={sorter}
        searchData={searchData}
        RowLayout={RowLayout}
        lengthOfTData={lengthOfTData}
        page={page}
        numberOfRow={numberOfRow}
      />

      <h5>Pagination</h5>
      <TablePagination
        page={page}
        setPage={setPage}
        numberOfPage={numberOfPages}
      />
      {/*<h5>Pagination v2</h5>*/}
      {/*<TablePaginationV2*/}
      {/*  page={page}*/}
      {/*  setPage={setPage}*/}
      {/*  numberOfPage={numberOfPages}*/}
      {/*/>*/}

      <h5>Dorp down option</h5>
      <DropdownPage
        page={page}
        setPage={setPage}
        numberOfPage={numberOfPages}
      />

      <div>
        <h5>Test next page of the table</h5>
        <Navigation
          page={page}
          setPage={setPage}
          numberOfPage={numberOfPages}
        />
      </div>
    </div>
  );
}


// <div>
//  <input
//   type="text"
//   id="myInput"
//   onChange={(e) => search(e.target.value)}
//   placeholder="Search for names.."
//   title="Type in a name"
//  />
//  <div className="dropdown">
//   <button className="dropbtn">{searchBy}</button>
//   <div className="dropdown-content">
//    {tableHeadData.map((item, index) => (
//     <span
//      key={index}
//      style={{ width: '60%' }}
//      onClick={() => setSearchBy(item)}
//     >
//                 {item}
//               </span>
//    ))}
//   </div>
//  </div>
// </div>

// const filterTheTable = (
//   data: tableDataType[],
//   lengthOfTData: number,
//   page: number,
//   numberOfRow: number
// ) => {
//   return data.slice(
//     page * numberOfRow,
//     lengthOfTData - 1 >= page * numberOfRow + numberOfRow
//       ? page * numberOfRow + numberOfRow
//       : lengthOfTData
//   );
// };

{
  /*<div className="dropdown">*/
}
{
  /*  <button className="dropbtn">{page + 1}</button>*/
}
{
  /*  <div className="dropdown-content">*/
}
{
  /*    {Array.from(*/
}
{
  /*      Array(*/
}
{
  /*        lengthOfTData / numberOfRow -*/
}
{
  /*          (lengthOfTData % numberOfRow) / numberOfRow +*/
}
{
  /*          (lengthOfTData % numberOfRow == 0 ? 0 : 1)*/
}
{
  /*      ).keys()*/
}
{
  /*    ).map((item, index) => (*/
}
{
  /*      <span*/
}
{
  /*        key={index}*/
}
{
  /*        style={{ width: '60%' }}*/
}
{
  /*        onClick={() => setPage(item)}*/
}
{
  /*      >*/
}
{
  /*        {item}*/
}
{
  /*      </span>*/
}
{
  /*    ))}*/
}
{
  /*  </div>*/
}
{
  /*</div>*/
}

{
  /*<Table striped bordered hover className={'border rounded-2'}>*/
}
{
  /*  <thead>*/
}
{
  /*    <tr className="header">*/
}
{
  /*      {tableHeadData.map((item, index) => (*/
}
{
  /*        <th*/
}
{
  /*          key={index}*/
}
{
  /*          style={{ width: '60%' }}*/
}
{
  /*          onClick={() => sorter(item)}*/
}
{
  /*        >*/
}
{
  /*          {item}*/
}
{
  /*        </th>*/
}
{
  /*      ))}*/
}
{
  /*    </tr>*/
}
{
  /*  </thead>*/
}
{
  /*  <tbody>*/
}
{
  /*    {filterTheTable(searchData, lengthOfTData, page, numberOfRow).map(*/
}
{
  /*      (item, index) => (*/
}
{
  /*        <tr key={index}>*/
}
{
  /*          <td>{item.name}</td>*/
}
{
  /*          <td>{item.country}</td>*/
}
{
  /*          <td>{item.phone}</td>*/
}
{
  /*        </tr>*/
}
{
  /*      )*/
}
{
  /*    )}*/
}
{
  /*  </tbody>*/
}
{
  /*</Table>*/
}
