import React, { FC } from 'react';
import { Dropdown } from 'react-bootstrap';
import { arrayGenerate } from './tableFunctions';
export interface DropDownPageType {
  page: number;
  setPage: (page: number) => void;
  numberOfPage: number;
}

export const DropDownPage: FC<DropDownPageType> = function DropDownPage({
  page = 0,
  setPage,
  numberOfPage,
}) {
  return (
    numberOfPage <= 1 ? <></> :
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
