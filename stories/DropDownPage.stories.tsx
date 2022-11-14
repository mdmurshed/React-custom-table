import {DropDownPage}  from "../src/table/DropDownPage";
import React, {useState} from "react";

export default {
    title: "DropDownPage",
    component: DropDownPage
}

export const DropDownPageExample = ({...args})=>{
    const [page,setPage] = useState(0)
    return <DropDownPage page={page} setPage={setPage} numberOfPage={5} {...args}/>
}
