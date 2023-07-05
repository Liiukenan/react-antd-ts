/*
 * @Date: 2023-07-03 09:52:54
 * @LastEditors: kenan
 * @LastEditTime: 2023-07-03 17:20:33
 */
import React, { useState } from 'react'
import './style.css'
interface User {
  id: number;
  name: string;
}
const userList: User[] = []
for (let index = 0; index < 10; index++) {
  userList.push({
    id: index,
    name: `user${index}`
  })

}

interface myColor{
  red?:boolean,
  blue?:boolean
}
const MapExample = () => {
  const [redClass,setRedClass]=useState<myColor>({red:true})
  const [blueClass,setBlueClass]=useState<myColor>({blue:true})
  return (
    <div className="index">
      <ul>
        {userList.map(user => (<li key={user.id}>{user.name}</li>))}
        {userList.map(user => {
          
          let bgColor='abc'
          if(user.id===3 || user.id===6){
            bgColor='gray'
          }
          if (user.id ===9) {
            return null;
          }
          
          if(user.id===6){
            return <li onMouseEnter={()=>{setRedClass({red:false})}} onMouseLeave={()=>{setRedClass({red:true})}} key={user.id} className={redClass.red?'red':''}>{user.name}</li>
          }
          if(user.id===8){
            return <li key={user.id} onMouseEnter={()=>{setBlueClass({blue:false})}} onMouseLeave={()=>{setBlueClass({blue:true})}}   style={{color:blueClass.blue?'blue':''}}>{user.name} {blueClass.blue+'1'}</li>
          }


          return <li key={user.id} className={bgColor}>{user.name}</li>

          
        })}
      </ul>
    </div>
  );
}
export default MapExample;