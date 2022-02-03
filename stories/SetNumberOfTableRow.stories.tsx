import SetNumberOfTableRow from "../src/table/SetNumberOfTableRow";
import React,{useState} from "react";

export default {
    title:"SetNumberOfTableRow",
    component:SetNumberOfTableRow
}

export const SetNumberOfTableRowExample = ({...args})=>{
    const [numberOfRow,setNumberOfRow] = useState(0)
    const [numberOfPages,setNumberOfPages] = useState(0)
    return <div>
        <div>Number of data : 40</div>
        <div>Number of row in the table : {numberOfRow}</div>
        <div>number of pages : {numberOfPages}</div>
        <SetNumberOfTableRow numberOfRow={numberOfRow} setNumberOfRow={setNumberOfRow} setNumberOfPages={setNumberOfPages} totalData={40} {...args}/>
    </div>
}