import TableSearch from '../src/table/TableSearch';
import React, { useState } from 'react';
export default {
  title: 'TableSearch',
  component: TableSearch,
};
export const TableSearchExample = ({...args}) => {
  const [searchByCategory, setSearchByCategory] = useState('name');
  const [search, setSearch] = useState('');
  return (
    <div>
      <div>
        Search by ({searchByCategory}) : {search}
      </div>
      <TableSearch
        searchByCategory={searchByCategory}
        setSearchByCategory={setSearchByCategory}
        search={setSearch}
        tableHeadData={['name', 'country', 'phone']}
        {...args}
      />
    </div>
  );
};
