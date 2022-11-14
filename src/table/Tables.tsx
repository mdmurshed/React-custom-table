import React, { FC, useEffect, useState } from 'react';
import { filterTheTable, sorter, tableDataType } from './tableFunctions';
// import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TableHead } from './TableHead';
export interface TablesType {
  tableHeadData: string[];
  tableData: tableDataType[];
  page: number;
  numberOfRow: number;
  RowLayout: React.FunctionComponent<any>;
  getId?: (id: string | number) => void;
  thClassName?: string;
  headClassName?: string;
  sortOption?: boolean;
}

export const Tables: FC<TablesType> = function Tables({
  tableHeadData,
  tableData,
  page = 0,
  numberOfRow,
  RowLayout,
  getId,
  sortOption,
  thClassName,
  headClassName,
}) {
  // sorter(item === sortCategory ? ('', 1) : (item, -1));
  // setSortCategory(item === sortCategory ? '' : item);
  const [sortCategory, setSortCategory] = useState('');
  const [update, setUpdate] = useState(false);
  const sorterChecking = (item: string, sortCategory: string): void => {
    if (sortCategory === '') {
      // setSortCategory('');
      sorter(sortCategory, -1, tableData);
    } else {
      if (item === sortCategory && update) {
        sorter(item, -1, tableData);
        setUpdate(false);
      } else {
        sorter(item, 1, tableData);
        setUpdate(true);
      }
    }
    setSortCategory(item);
    // console.log('Table sorter : ', sortCategory);
  };
  useEffect(() => { }, [sortCategory, sorterChecking, tableData]);
  return (
    <table
      className={
        'table border rounded-2 table-striped table-hover table-responsive sb-argstableBlock-summary'
      }
    >
      <thead>
        <TableHead
          tableHeadData={tableHeadData}
          update={update}
          sortCategory={sortCategory}
          sorterChecking={sorterChecking}
          thClassName={thClassName}
          headClassName={headClassName}
          sortOption={sortOption}
        />
      </thead>
      <tbody>
        {filterTheTable(tableData, tableData.length, page, numberOfRow).map(
          (item, index) => (
            <RowLayout key={index} item={item} getId={getId} />
          )
        )}
      </tbody>
    </table>
  );
};






// testing code
{
  /*<tr className="header">*/
}
{
  /*  {tableHeadData.map((item, index) => (*/
}
{
  /*    <th*/
}
{
  /*      key={index}*/
}
{
  /*      style={{}}*/
}
{
  /*      onClick={() => sorterChecking(item.toLowerCase(), sortCategory)}*/
}
{
  /*    >*/
}
{
  /*      <div className={'d-flex'}>*/
}
{
  /*        <div>*/
}
{
  /*          <span className={'me-2'}>{item}</span>*/
}
{
  /*        </div>*/
}
{
  /*        <div>*/
}
{
  /*          {sortCategory != item.toLowerCase() ? (*/
}
{
  /*            <FontAwesomeIcon icon={faAngleUp} />*/
}
{
  /*          ) : !update ? (*/
}
{
  /*            <FontAwesomeIcon icon={faAngleDown} />*/
}
{
  /*          ) : (*/
}
{
  /*            <FontAwesomeIcon icon={faAngleUp} />*/
}
{
  /*          )}*/
}
{
  /*        </div>*/
}
{
  /*      </div>*/
}
{
  /*    </th>*/
}
{
  /*  ))}*/
}
{
  /*</tr>*/
}
