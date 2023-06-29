/*
 * @Date: 2023-06-29 15:26:17
 * @LastEditors: kenan
 * @LastEditTime: 2023-06-29 15:49:47
 */
import React from 'react'
interface Iprops{
  name:string,
  children?:React.ReactNode
}
const Fun=({name,children}:Iprops)=>{
        return (
            <div className="Fun">
               <p>我的名字是:{name}</p>
               <p>{children}</p>
            </div>
        );
    }
export default Fun;