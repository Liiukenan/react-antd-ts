/*
 * @Date: 2023-06-29 18:29:38
 * @LastEditors: kenan
 * @LastEditTime: 2023-06-29 18:33:11
 */
import React from 'react'
const index = () => {
  const myClick = (str: string) => {
    console.log(str)
  }
  return (
    <div className="index">
      <button onClick={() => {
        console.log(223)
      }}>
        buttonA
      </button>
      <button onClick={() => {
        myClick('button a')
      }}>
        buttonB
      </button>
    </div>
  );
}
export default index;