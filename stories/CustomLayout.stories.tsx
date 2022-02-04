import CustomTableLayout from '../src/table/Layout/CustomTableLayout';
import React, {useState} from 'react';
export default {
  title: 'CustomTableLayout',
  component: CustomTableLayout,
};
import RowLayout from '../src/table/Layout/RowLayout';
import {data,head} from "../src/table/Layout/tableData";
export const CustomTableLayoutExample = ({ ...args }) => {
  const [getId,setGetId] = useState<string | number>('');
  return (
   <div>
     <h5>OnClick get the id : {getId}</h5>
     <CustomTableLayout
         title={'Custom Table'}
         tableHeadData={head}
         RowLayout={RowLayout}
         getId={e=>setGetId(e)}
         data={data}
         headClassName={'my-5'}
         {...args}

     />
   </div>
  );
};
