/*
 * @Date: 2023-06-29 14:14:39
 * @LastEditors: kenan
 * @LastEditTime: 2023-06-29 14:56:36
 */
import React from 'react'
import logo from './assets/logo.png'
interface User {
  name: String;
  age: number;
}
const myName = (user: User) => {
  return (
    <div>
      <p>我的名字是 {user.name}</p>
      <p>我的年龄是 {user.age}</p>
    </div>
  )
}
 const  tmp=React.createElement('h1',{style:{color:'red'},className:'test'},'这是个测试文字')
const Orange = () => {
  const user: User = {
    name: 'kenan',
    age: 18
  }
  const myElement=<div>
    <img src={logo} alt="" />
  </div>
  return (
    <div className="Orange">
      {myName(user)}
      {myElement}
      {tmp}
    </div>
  );
}
export default Orange;