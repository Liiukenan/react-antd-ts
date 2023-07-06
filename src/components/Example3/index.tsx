/*
 * @Date: 2023-07-05 10:28:52
 * @LastEditors: kenan
 * @LastEditTime: 2023-07-06 14:08:10
 */
import React, { useEffect, useRef } from 'react'
const Example3 = () => {
  // ref声明两种方式
  const divRef = useRef<HTMLDivElement>(null)
  const inputRef = React.createRef<HTMLInputElement>()
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  })
  function changeContent() {
    if (divRef.current) {
      divRef.current.innerHTML = '测试这个test'

    }
  }
  return (
    <div className="Example3">
      <div ref={divRef} onClick={changeContent}>
        test
      </div>
      <div dangerouslySetInnerHTML={{ __html: "测试这个test" }}></div>
      <input ref={inputRef} />
    </div>
  );
}
export default Example3;