import React, { FC } from 'react';
const RowLayout: FC<any> = function RowLayout(item) {
    return (
        <tr key={item.id}>
            <td className={'mx-3'}><div>{item.name}</div></td>
            <td className={'mx-3'}><div>{item.country}</div></td>
            <td className={'mx-3'}><div>{item.phone}</div></td>
        </tr>
    );
};

export default RowLayout;
