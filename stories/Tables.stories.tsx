import {Tables} from "../src/table/Tables";
import React,{useEffect, useState} from "react";
// import {data} from '../src/table/tableData'
export default {
    title: "Tables",
    component : Tables
}
export const TablesExample = ({...args})=>{
   const RowLayout = ({ item, getId }) => {
    return (
      <tr key={item.id} onClick={() => getId(item.id)}>
        <td className={'mx-3'}><div>{item.id}</div></td>
        <td className={'mx-3'}><div>{item.name}</div></td>
      </tr>
    );
  }
    return <Tables tableHeadData={["id", "name"]} numberOfRow={5} tableData={[{
          id: "1",
          name: "Alamin"
        },{
          id: "2",
          name: "Tanvir"
        },{
          id: "3",
          name: "Murshed"
        },{
          id: "4",
          name: "Rashed"
        },]} page={0} RowLayout={RowLayout} {...args}/>
}