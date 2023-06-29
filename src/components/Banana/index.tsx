/*
 * @Date: 2023-06-29 15:57:57
 * @LastEditors: kenan
 * @LastEditTime: 2023-06-29 18:27:42
 */
import React, { useState } from 'react'
interface User{
  name:string;
}
const Banana = () => {
  const [user,setUser]=useState<User>({name:"Banana"})
  setTimeout(() => {
    setUser({name:'香蕉'})
  }, 2000);
  return (
    <div className="Banana">
      改变水果名字: {user.name}
    </div>
  );
}
export default Banana;