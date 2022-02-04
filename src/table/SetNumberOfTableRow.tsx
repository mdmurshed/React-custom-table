import React, { FC } from 'react';
import { Dropdown } from 'react-bootstrap';
import { arrayGenerate, numberOfPage } from './tableFunctions';
export interface SetNumberOfTableRowType {
  numberOfRow: number;
  setNumberOfRow: (row: number) => void;
  setNumberOfPages: (page: number) => void;
  totalData: number;
}

const SetNumberOfTableRow: FC<SetNumberOfTableRowType> = function DropDownPage({
  numberOfRow,
  setNumberOfRow,
  setNumberOfPages,
  totalData,
}) {
  console.log(totalData, 'sdf');
  return (
    <div>
      <Dropdown
        className={'border rounded-2 ms-1'}
        style={{
          width: 'fit-content'
        }}
      >
        <Dropdown.Toggle variant="light" id="dropdown-basic" style={{
          padding: '.32rem'
        }}>
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

export default SetNumberOfTableRow;
