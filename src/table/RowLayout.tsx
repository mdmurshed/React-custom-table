import React, { FC } from 'react';
export const RowLayout: FC<any> = function RowLayout({key,item}) {
    return (
        <tr key={key}>
            <td className={'mx-3'}><div>{item.material} - {item.type}</div></td>
          <td>delete ICON</td>
        </tr>
    );
};

