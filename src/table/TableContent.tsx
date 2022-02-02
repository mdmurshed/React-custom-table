import React, { FC } from 'react';
import { Dropdown } from 'react-bootstrap';
import { arrayGenerate, numberOfPage } from './tableFunctions';
interface DropDownPageType {
  numberOfRow: number;
  setNumberOfRow: (row: number) => void;
  setNumberOfPages: (page: number) => void;
  totalData: number;
}

const TableContent: FC<DropDownPageType> = function DropDownPage({
  numberOfRow,
  setNumberOfRow,
  setNumberOfPages,
  totalData,
}) {
  console.log(totalData, 'sdf');
  return (
    <div>
      <Dropdown
        className={'border rounded-2'}
        style={{
          width: 'fit-content',
        }}
      >
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          {numberOfRow}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {arrayGenerate(numberOfPage(totalData, 5)).map((item, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => {
                setNumberOfRow((item + 1) * 5);
                setNumberOfPages(numberOfPage(totalData, (item + 1) * 5));
              }}
            >
              {(item + 1) * 5}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default TableContent;
