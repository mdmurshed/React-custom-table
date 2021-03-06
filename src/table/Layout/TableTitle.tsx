import React, {FC} from 'react';
export interface TableHeadType{
    title:string,
    titleClassName?:string
}
const TableTitle:FC<TableHeadType> = function TableHead({title,titleClassName}) {
    return (
        <h3 className={`${titleClassName} my-3`}>{title}</h3>
    );
}

export default TableTitle;