import React, { FC, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { tableDataType } from './tableData';
import { filterTheTable } from './tableFunctions';
import { RowLayoutType } from './RowLayout';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface TablesType {
  tableHeadData: string[];
  sorter: (str: string, value: 1 | -1) => void;
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
  // sorter(item === sortCategory ? ('', 1) : (item, -1));
  // setSortCategory(item === sortCategory ? '' : item);
  const [sortCategory, setSortCategory] = useState('');
  const [update, setUpdate] = useState(false);
  const sorterChecking = (item: string, sortCategory: string): void => {
    if (sortCategory === '') {
      // setSortCategory('');
      sorter(sortCategory, -1);
    } else {
      if (item === sortCategory && update) {
        sorter(item, -1);
        setUpdate(false);
      } else {
        sorter(item, 1);
        setUpdate(true);
      }
    }
    setSortCategory(item);
    console.log('Table sorter : ', sortCategory);
  };
  useEffect(() => {}, [sortCategory, sorterChecking]);
  return (
      <Table striped bordered hover className={'border rounded-2'}>
        <thead>
        <tr className="header">
          {tableHeadData.map((item, index) => (
              <th
                  key={index}
                  style={{}}
                  onClick={() => sorterChecking(item, sortCategory)}
              >
                <div className={'d-flex'}>
                  <div>
                    <span className={'me-2'}>{item}</span>
                  </div>
                  <div>
                    {sortCategory != item ? (
                        <FontAwesomeIcon icon={faAngleUp} />
                    ) : !update ? (
                        <FontAwesomeIcon icon={faAngleDown} />
                    ) : (
                        <FontAwesomeIcon icon={faAngleUp} />
                    )}
                  </div>
                </div>
              </th>
          ))}
        </tr>
        </thead>
        <tbody>
        {filterTheTable(searchData, lengthOfTData, page, numberOfRow).map(
            (item) => (
                <RowLayout
                    key={item.id}
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
