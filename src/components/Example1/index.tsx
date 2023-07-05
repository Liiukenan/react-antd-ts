/*
 * @Date: 2023-07-04 10:13:59
 * @LastEditors: kenan
 * @LastEditTime: 2023-07-04 16:26:54
 */
import React, { ChangeEvent, useState } from 'react'
const Example1 = () => {
  const [inputVal, setInputVal] = useState('default')
  const [selectVal, setSelectVal] = useState('1')
  const change = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value)
    setInputVal(e.target.value)
  }
  const selectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectVal(e.target.value)
  }
  return (
    <div className="Example1">
      {inputVal}
      <input onChange={change} value={inputVal} />
      <select value={selectVal} onChange={selectChange}>
        <option value="1">第一个</option>
        <option value="2">第二个</option>
        <option value="3">第三个</option>
      </select>
      <div>
        {selectVal}
      </div>


    </div>
  );
}
export default Example1;