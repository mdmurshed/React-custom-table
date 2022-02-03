import React, { FC } from 'react';
export interface RowLayoutType {
    id: string;
    name: string;
    country: string;
    phone: string;
}
const RowLayout: FC<RowLayoutType> = function RowLayout(item) {
    return (
        <tr key={item.id}>
            <td className={'mx-3'}>{item.name}</td>
            <td className={'mx-3'}>{item.country}</td>
            <td className={'mx-3'}>{item.phone}</td>
        </tr>
    );
};

export default RowLayout;
