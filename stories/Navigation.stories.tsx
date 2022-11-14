import {Navigation} from '../src/table/Navigation';
import React, { useState } from 'react';
export default {
  title: 'Navigation',
  component: Navigation,
};
export const NavigationExample = ({...args}) => {
  const [page, setPage] = useState(0);
  return (
    <div>
        <div>page : {page}</div>
      <Navigation page={page} setPage={setPage} numberOfPage={5} {...args}/>
    </div>
  );
};
