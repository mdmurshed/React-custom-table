import React, { FC } from 'react';
import { Dropdown } from 'react-bootstrap';
import { arrayGenerate } from './tableFunctions';
export interface DropDownPageType {
  page: number;
  setPage: (page: number) => void;
  numberOfPage: number;
}

const DropDownPage: FC<DropDownPageType> = function DropDownPage({
  page,
  setPage,
  numberOfPage,
}) {
  if (numberOfPage <= 1) return <></>;
  return (
    <div>
      <Dropdown
        className={'border rounded-2'}
        style={{
          width: 'fit-content',
        }}
      >
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          page : {page}
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
