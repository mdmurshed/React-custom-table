import React, { FC } from 'react';
import {
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,
} from 'react-bootstrap';
interface TableSearch {
  searchBy: string;
  tableHeadData: string[];
  search: (search: string) => void;
  setSearchBy: (search: string) => void;
}
const TableSearch: FC<TableSearch> = function TableSearch({
  searchBy,
  tableHeadData,
  search,
  setSearchBy,
}) {
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          aria-label="Text input with dropdown button"
          onChange={(e) => search(e.target.value)}
        />
        <DropdownButton
          variant="outline-primary"
          title={searchBy}
          id="input-group-dropdown-2"
          align="end"
        >
          {tableHeadData.map((item, index) => (
            <Dropdown.Item key={index} onClick={() => setSearchBy(item)}>
              {item}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </InputGroup>

      {/*<input*/}
      {/*  type="text"*/}
      {/*  id="myInput"*/}
      {/*  onChange={(e) => search(e.target.value)}*/}
      {/*  placeholder="Search for names.."*/}
      {/*  title="Type in a name"*/}
      {/*/>*/}
      {/*<Dropdown className={'border rounded-2'}>*/}
      {/*  <Dropdown.Toggle variant="light" id="dropdown-basic">*/}
      {/*    {searchBy}*/}
      {/*  </Dropdown.Toggle>*/}
      {/*  <Dropdown.Menu>*/}
      {/*    {tableHeadData.map((item, index) => (*/}
      {/*      <Dropdown.Item key={index} onClick={() => setSearchBy(item)}>*/}
      {/*        {item}*/}
      {/*      </Dropdown.Item>*/}
      {/*    ))}*/}
      {/*  </Dropdown.Menu>*/}
      {/*</Dropdown>*/}
      {/*<div className="dropdown">*/}
      {/*  <button className="dropbtn">{searchBy}</button>*/}
      {/*  <div className="dropdown-content">*/}
      {/*    {tableHeadData.map((item, index) => (*/}
      {/*      <span*/}
      {/*        key={index}*/}
      {/*        style={{ width: '60%' }}*/}
      {/*        onClick={() => setSearchBy(item)}*/}
      {/*      >*/}
      {/*        {item}*/}
      {/*      </span>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default TableSearch;
