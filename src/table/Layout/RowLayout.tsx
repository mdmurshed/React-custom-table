import React, { FC } from 'react';
const RowLayout: FC<any> = function RowLayout(item) {
  const { id, name, country, phone, getId } = item;
  return (
    <tr key={id}>
        <td className={'mx-3 py-2'} onClick={()=>getId(id)}><div >{id}</div></td>
        <td className={'mx-3 py-2'} onClick={()=>getId(id)}><div >{name}</div></td>
        <td className={'mx-3 py-2'} onClick={()=>getId(id)}><div >{country}</div></td>
        <td className={'mx-3 py-2'} onClick={()=>getId(id)}><div >{phone}</div></td>
    </tr>
  );
};

export default RowLayout;
