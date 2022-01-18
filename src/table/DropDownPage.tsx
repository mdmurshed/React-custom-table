import React, { FC } from 'react';
import { Dropdown } from 'react-bootstrap';
import { arrayGenerate } from './tableFunctions';
interface DropDownPageType {
  page: number;
  setPage: (page: number) => void;
  numberOfPage: number;
}

const DropDownPage: FC<DropDownPageType> = function DropDownPage({
  page,
  setPage,
  numberOfPage,
}) {
  return (
    <div className={'w-fit'}>
      <Dropdown className={'border rounded-2'}>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          {page}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {arrayGenerate(numberOfPage).map((item, index) => (
            <Dropdown.Item key={index} onClick={() => setPage(item)}>
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropDownPage;
