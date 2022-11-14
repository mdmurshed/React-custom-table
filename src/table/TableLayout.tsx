import React, { useEffect, useState,FC } from 'react';
import {TablePagination} from './Pagination';
import {Navigation} from './Navigation';
import { numberOfPage,search,sorter, tableDataType} from './tableFunctions';

import {Tables} from './Tables';
import {TableSearch} from './TableSearch';
import {RowLayout} from './RowLayout';
import {SetNumberOfTableRow} from './SetNumberOfTableRow';
import { DropDownPage } from './DropDownPage';
export interface TableLayoutType{
    title:string
    tableHeadData:string[],
    data:tableDataType[]
}
export const TableLayout:FC<TableLayoutType> = function TableLayout({title,tableHeadData,data}) {
    const [lengthOfTData] = useState(data.length);
    const [numberOfRow, setNumberOfRow] = useState(5);
    const [numberOfPages, setNumberOfPages] = useState(
        numberOfPage(lengthOfTData, numberOfRow)
    );
    const [searchBy, setSearchBy] = useState<string>('name');
    const [page, setPage] = useState(0);
    const [tableData] = useState<tableDataType[]>(data);
    const [searchData, setSearchData] = useState<tableDataType[]>(tableData);


    useEffect(() => {
        console.log(Array.from(Array(10).keys()));
        console.log('number of page :');
        // setNumberOfPages(numberOfPage(lengthOfTData, numberOfRow));
    }, [searchData, sorter, numberOfRow, numberOfPages]);
    useEffect(() => {setPage(0)}, [numberOfPages]);
    return (
        <div>
            <h2>{title}</h2>
            <div className={'d-flex'}>
                <TableSearch
                    searchByCategory={searchBy}
                    setSearchByCategory={(search: string) => setSearchBy(search)}
                    tableHeadData={tableHeadData}
                    search={(e) => setSearchData(search(e,tableData,searchBy))}
                />
                <SetNumberOfTableRow
                    numberOfRow={numberOfRow}
                    setNumberOfRow={setNumberOfRow}
                    setNumberOfPages={setNumberOfPages}
                    totalData={lengthOfTData}
                />
            </div>
            <div>
                <Tables
                    tableHeadData={tableHeadData}
                    tableData={searchData}
                    RowLayout={RowLayout}
                    page={page}
                    numberOfRow={numberOfRow}
                />
            </div>
           <div className={'d-flex justify-content-between'}>
               <DropDownPage
                   page={page}
                   setPage={setPage}
                   numberOfPage={numberOfPages}
               />
               <TablePagination
                   page={page}
                   setPage={setPage}
                   numberOfPage={numberOfPages}
               />
               <Navigation
                   page={page}
                   setPage={setPage}
                   numberOfPage={numberOfPages}
               />
           </div>

        </div>
    );
}
