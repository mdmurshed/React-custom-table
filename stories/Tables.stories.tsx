import Tables from "../src/table/Tables";
import RowLayout from "../src/table/RowLayout";
import React,{useState} from "react";
import {data} from '../src/table/tableData'
export default {
    title: "Tables",
    component : Tables
}
export const TablesExample = ({...args})=>{
    const [page] = useState(0)
    return <Tables tableHeadData={['name', 'country', 'phone']} numberOfRow={5} searchData={data} page={page} RowLayout={RowLayout} {...args}/>
}