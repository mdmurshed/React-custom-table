import React, { FC, useEffect, useState } from 'react';
import TableTitle from './TableTitle';
import TableSearch from '../TableSearch';
import { numberOfPage, search, sorter } from '../tableFunctions';
import SetNumberOfTableRow from '../SetNumberOfTableRow';
import Tables from '../Tables';
// import RowLayout from '../RowLayout';
import DropdownPage from '../DropDownPage';
import TablePagination from '../Pagination';
import Navigation from '../Navigation';
// import { tableDataType, data } from '../tableData';
export interface TableDataType{
  [key:string]:string|number
}
export interface CustomTableLayoutType {
  title: string;
  titleStyle?: string;
  tableHeadData: string[];
  dropdownPage?: boolean
  pagination?: boolean
  navigation?: boolean
  setNumberOfTableRow ?: boolean
  RowLayout: React.FunctionComponent<any>
  initialNumberOfRow?: number
  data:TableDataType[]
  getId?:(id: string|number) => void
  headClassName?: string,
  thClassName?: string
}
const CustomTableLayout: FC<CustomTableLayoutType> = function ({
  title,
  titleStyle,
  tableHeadData,
  dropdownPage = true,
  pagination = true,
  navigation = true,
  setNumberOfTableRow = false,
  RowLayout,
  initialNumberOfRow = 5,
  data,
  getId,
    headClassName,
    thClassName

}) {
  const [page, setPage] = useState(0);
  const [lengthOfTData] = useState(data.length);
  const [numberOfRow, setNumberOfRow] = useState(initialNumberOfRow);
  const [numberOfPages, setNumberOfPages] = useState(
    numberOfPage(lengthOfTData, numberOfRow)
  );
  const [searchBy, setSearchBy] = useState<string>('name');
  const [tableData] = useState<any[]>(data);
  const [searchData, setSearchData] = useState<any[]>(tableData);

  useEffect(() => {
    console.log(Array.from(Array(10).keys()));
    console.log('number of page : 1 -');
    // setNumberOfPages(numberOfPage(lengthOfTData, numberOfRow));
  }, [searchData, sorter, numberOfRow]);
  useEffect(() => {
    console.log("number of page : 2 -",numberOfPages)
    setPage(0);

  }, [numberOfPages]);
  return (
    <div>
      <TableTitle title={title} titleClassName={titleStyle} />
      <div className={'d-flex mb-1'}>
        <TableSearch
            searchByCategory={searchBy}
            setSearchByCategory={(search: string) => setSearchBy(search)}
            tableHeadData={tableHeadData}
            search={(e) => setSearchData(search(e,tableData,searchBy))}
        />
        { setNumberOfTableRow && <SetNumberOfTableRow
            numberOfRow={numberOfRow}
            setNumberOfRow={setNumberOfRow}
            setNumberOfPages={setNumberOfPages}
            totalData={lengthOfTData}
        />}
      </div>
      <div>
        <Tables
            tableHeadData={tableHeadData}
            searchData={searchData}
            RowLayout={RowLayout}
            page={page}
            numberOfRow={numberOfRow}
            getId={getId}
            headClassName={headClassName}
            thClassName={thClassName}
        />
      </div>
      <div className={'d-flex justify-content-between'}>
          {
              dropdownPage && <DropdownPage
                  page={page}
                  setPage={setPage}
                  numberOfPage={numberOfPages}
              />
          }
          {
              pagination && <TablePagination
              page={page}
              setPage={setPage}
              numberOfPage={numberOfPages}
          />
          }
          {
              navigation &&<Navigation
              page={page}
              setPage={setPage}
              numberOfPage={numberOfPages}
          />
          }
      </div>
    </div>
  );
};
CustomTableLayout.defaultProps = {

}
export default CustomTableLayout;
