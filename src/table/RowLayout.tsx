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
            <td>{item.name}</td>
            <td>{item.country}</td>
            <td>{item.phone}</td>
        </tr>
    );
};

export default RowLayout;
