import React, { FC, useEffect, useState } from 'react';
import { TableTitle } from './TableTitle';
import { TableSearch } from '../TableSearch';
import { numberOfPage, search, sorter, tableDataType } from '../tableFunctions';
import { SetNumberOfTableRow } from '../SetNumberOfTableRow';
import { Tables } from '../Tables';
import { TablePagination } from '../Pagination';
import { Navigation } from '../Navigation';
import { DropDownPage } from '../DropDownPage';

export interface ReactTableType {
  title: string;
  titleStyle?: string;
  tableHeadData: string[];
  dropdownPage?: boolean;
  pagination?: boolean;
  navigation?: boolean;
  setNumberOfTableRow?: boolean;
  RowLayout: React.FunctionComponent<any>;
  initialNumberOfRow?: number;
  tableData: tableDataType[];
  getId?: (id: string | number) => void;
  headClassName?: string;
  thClassName?: string;
  searchOption?: boolean;
  sortOption?: boolean
}
export const ReactTable: FC<ReactTableType> = function ({
  title,
  titleStyle,
  tableHeadData = [],
  dropdownPage = true,
  pagination = true,
  navigation = true,
  setNumberOfTableRow = false,
  RowLayout,
  initialNumberOfRow = 5,
  tableData = [],
  searchOption = false,
  getId,
  headClassName,
  thClassName,
  sortOption = false

}) {
  const [page, setPage] = useState(0);
  const [lengthOfTData] = useState(tableData.length);
  const [numberOfRow, setNumberOfRow] = useState(initialNumberOfRow);
  const [numberOfPages, setNumberOfPages] = useState(
    numberOfPage(lengthOfTData, numberOfRow)
  );
  const [searchBy, setSearchBy] = useState<string>(tableHeadData[0]);
  const [searchData, setSearchData] = useState<any[]>(tableData);

  useEffect(() => {
  }, [searchData, sorter, numberOfRow]);
  useEffect(() => {
    setPage(0);
  }, [numberOfPages]);
  useEffect(() => {
    setSearchData(tableData);
  }, [tableData])
  useEffect(() => {
  }, [sortOption])
  return (
    <div>
      <TableTitle title={title} titleClassName={titleStyle} />
      <div className={'d-flex mb-1'}>
        {
          searchOption && <TableSearch
            searchByCategory={searchBy}
            setSearchByCategory={(search: string) => setSearchBy(search)}
            tableHeadData={tableHeadData}
            search={(e) => setSearchData(search(e, tableData, searchBy))}
          />
        }
        {setNumberOfTableRow && <SetNumberOfTableRow
          numberOfRow={numberOfRow}
          setNumberOfRow={setNumberOfRow}
          setNumberOfPages={setNumberOfPages}
          totalData={lengthOfTData}
        />}
      </div>
      <div>
        <Tables
          tableHeadData={tableHeadData}
          tableData={searchData}
          RowLayout={RowLayout}
          page={page}
          numberOfRow={numberOfRow}
          getId={getId}
          headClassName={headClassName}
          thClassName={thClassName}
          sortOption={sortOption}
        />
      </div>
      <div className={'d-flex justify-content-between'}>
        {
          dropdownPage && <DropDownPage
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
          navigation && <Navigation
            page={page}
            setPage={setPage}
            numberOfPage={numberOfPages}
          />
        }
      </div>
    </div>
  );
};
