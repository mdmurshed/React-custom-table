import RowLayout from "../src/table/RowLayout";
import React from "react";
import {data} from "../src/table/tableData";

export default {
    title :"RowLayout",
    component:RowLayout
}
export const RowLayoutExample = ({...args})=>{
    return <div>
        <div>This is a data layout. Make your own RowLayout</div>
        <table>
        <tbody>
        {
            data.map((item)=><RowLayout key={item.id} id={item.id} name={item.name} country={item.country} phone={item.phone} {...args}/>)
        }
        </tbody>
        </table>
    </div>
}