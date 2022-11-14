import { ReactTable } from '../src/table/Layout/ReactTable';
import React, { useState } from 'react';
export default {
  title: "ReactTable",
  component: ReactTable
}

export const CustomYourReactTableExample = ({ ...args }) => {
  const [getId, setGetId] = useState<string | number>('');
  const RowLayout = ({ item, getId }) => {
    return (
      <tr key={item.id} onClick={() => getId(item.id)}>
        <td className={'mx-3'}><div>{item.id}</div></td>
        <td className={'mx-3'}><div>{item.name}</div></td>
      </tr>
    );
  }
  return (
    <div>
      <h5>OnClick get the id : {getId}</h5>
      <ReactTable
        title={'Custom Table'}
        searchOption={true}
        tableHeadData={["id", "name"]}
        RowLayout={RowLayout}
        getId={e => setGetId(e)}
        tableData={[{
          id: 1,
          name: "Alamin"
        },{
          id: 2,
          name: "Tanvir"
        },{
          id: 3,
          name: "Murshed"
        },{
          id: 4,
          name: "Rashed"
        },]}
        headClassName={'my-5'}
        {...args}
      />
    </div>
  );
};
