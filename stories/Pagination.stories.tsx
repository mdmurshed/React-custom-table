import TablePagination from "../src/table/Pagination";
import React, {useState} from "react";

export default {
    title:"TablePagination",
    component:TablePagination
}
export const TablePaginationExample1 = ()=>{
    const [page,setPage] = useState(0)
    return <div>
        <div>page less then 5</div>
        <div> Page : {page}</div>
        <TablePagination page={page} setPage={setPage} numberOfPage={4}/>
    </div>
}
export const TablePaginationExample2= ()=>{
    const [page,setPage] = useState(0)
    return <div>
        <div>page gretter then then 5</div>
        <div> Page : {page}</div>
    <TablePagination page={page} setPage={setPage} numberOfPage={10}/>
    </div>
}
