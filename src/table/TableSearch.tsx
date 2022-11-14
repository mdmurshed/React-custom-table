import React, { FC } from 'react';
import {
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,
} from 'react-bootstrap';
export interface TableSearch {
  searchByCategory: string;
  tableHeadData: string[];
  search: (search: string) => void;
  setSearchByCategory: (search: string) => void;
}
export const TableSearch: FC<TableSearch> = function TableSearch({
  searchByCategory,
  tableHeadData,
  search,
  setSearchByCategory,
}) {
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          aria-label="Text input with dropdown button"
          onChange={(e) => search(e.target.value)}
        />
        <DropdownButton
          title={searchByCategory}
          id="input-group-dropdown-2"
          align="end"
        >
          {tableHeadData.map((item, index) => (
            <Dropdown.Item key={index} onClick={() => setSearchByCategory(item)}>
              {item}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </InputGroup>
    </div>
  );
};

