import React, { FC, useEffect, useState } from 'react';
import { tableDataType } from './tableData';
import { filterTheTable, sorter } from './tableFunctions';
// import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TableHead from "./TableHead";
export interface TablesType {
  tableHeadData: string[];
  searchData: tableDataType[];
  page: number;
  numberOfRow: number;
  RowLayout: React.FunctionComponent<any>
  getId?: (id:string|number)=>void
  thClassName?: string,
  headClassName?: string
}

const Tables: FC<TablesType> = function Tables({
  tableHeadData,
  searchData,
  page,
  numberOfRow,
  RowLayout,
  getId,
    thClassName,
    headClassName
}) {
  // sorter(item === sortCategory ? ('', 1) : (item, -1));
  // setSortCategory(item === sortCategory ? '' : item);
  const [sortCategory, setSortCategory] = useState('');
  const [update, setUpdate] = useState(false);
  const sorterChecking = (item: string, sortCategory: string): void => {
    if (sortCategory === '') {
      // setSortCategory('');
      sorter(sortCategory, -1, searchData);
    } else {
      if (item === sortCategory && update) {
        sorter(item, -1, searchData);
        setUpdate(false);
      } else {
        sorter(item, 1, searchData);
        setUpdate(true);
      }
    }
    setSortCategory(item);
    console.log('Table sorter : ', sortCategory);
  };
  useEffect(() => {}, [sortCategory, sorterChecking]);
  return (
    <table className={'table border rounded-2 table-striped table-hover table-responsive sb-argstableBlock-summary'}>
      <thead className={""}>
      <TableHead tableHeadData={tableHeadData} update={update} sortCategory={sortCategory} sorterChecking={sorterChecking} thClassName={thClassName} headClassName={headClassName}/>
        {/*<tr className="header">*/}
        {/*  {tableHeadData.map((item, index) => (*/}
        {/*    <th*/}
        {/*      key={index}*/}
        {/*      style={{}}*/}
        {/*      onClick={() => sorterChecking(item.toLowerCase(), sortCategory)}*/}
        {/*    >*/}
        {/*      <div className={'d-flex'}>*/}
        {/*        <div>*/}
        {/*          <span className={'me-2'}>{item}</span>*/}
        {/*        </div>*/}
        {/*        <div>*/}
        {/*          {sortCategory != item.toLowerCase() ? (*/}
        {/*            <FontAwesomeIcon icon={faAngleUp} />*/}
        {/*          ) : !update ? (*/}
        {/*            <FontAwesomeIcon icon={faAngleDown} />*/}
        {/*          ) : (*/}
        {/*            <FontAwesomeIcon icon={faAngleUp} />*/}
        {/*          )}*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </th>*/}
        {/*  ))}*/}
        {/*</tr>*/}
      </thead>
      <tbody>
        {filterTheTable(searchData, searchData.length, page, numberOfRow).map(
          (item) => (
            <RowLayout
              key={item.id}
              id={item.id}
              name={item.name}
              country={item.country}
              phone={item.phone}
              getId={getId}
            />
          )
        )}
      </tbody>
    </table>
  );
};

export default Tables;
