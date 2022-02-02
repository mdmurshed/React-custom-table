import React, { useEffect, useState, useReducer,FC } from 'react';
import { tableDataType } from './tableData';
import TablePagination from './Pagination';
import Navigation from './Navigation';
import { numberOfPage,search} from './tableFunctions';
import DropdownPage from './DropDownPage';
import Tables from './Tables';
import TableSearch from './TableSearch';
import RowLayout from './RowLayout';
import TableContent from './TableContent';
export interface TableLayoutType{
    title:string
    tableHeadData:string[],
    data:tableDataType[]
}
const TableLayout:FC<TableLayoutType> = function TableLayout({title,tableHeadData,data}) {
    const [lengthOfTData] = useState(data.length);
    const [numberOfRow, setNumberOfRow] = useState(3);
    const [numberOfPages, setNumberOfPages] = useState(
        numberOfPage(lengthOfTData, numberOfRow)
    );
    const [searchBy, setSearchBy] = useState<string>('name');
    // const [tableHeadData] = useState<string[]>(tableHeadData);
    // page zero means page one
    const [page, setPage] = useState(0);
    const [tableData] = useState<tableDataType[]>(data);
    const [searchData, setSearchData] = useState<tableDataType[]>(tableData);
    // const search = async (e: string) => {
    //     const data = e;
    //     setSearchData(
    //         tableData.filter((item) =>
    //             data == '' ? true : item[searchBy].match(data) != null
    //         )
    //     );
    // };


    const [, forceUpdate] = useReducer((x) => x + 1, 0);
    const sorter = (category: string, value: -1 | 1) => {
        setSearchData(
            searchData.sort((a, b) => {
                return a[category] < b[category] ? -1 * value : 1 * value;
            })
        );
        forceUpdate();
    };

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
                    searchBy={searchBy}
                    setSearchBy={(search: string) => setSearchBy(search)}
                    tableHeadData={tableHeadData}
                    search={(e) => setSearchData(search(e,tableData,searchBy))}
                />

                <TableContent
                    numberOfRow={numberOfRow}
                    setNumberOfRow={setNumberOfRow}
                    setNumberOfPages={setNumberOfPages}
                    totalData={lengthOfTData}
                />
            </div>
            <div>
                <Tables
                    tableHeadData={tableHeadData}
                    sorter={sorter}
                    searchData={searchData}
                    RowLayout={RowLayout}
                    lengthOfTData={lengthOfTData}
                    page={page}
                    numberOfRow={numberOfRow}
                />
            </div>
           <div className={'d-flex justify-content-between'}>
               <DropdownPage
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

export default TableLayout;