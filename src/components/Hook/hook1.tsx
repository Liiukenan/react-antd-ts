/*
 * @Date: 2023-07-06 15:47:20
 * @LastEditors: kenan
 * @LastEditTime: 2023-07-06 17:51:46
 */
import React, { useState } from 'react'

const Hook1 = () => {
    const [count, setCount] = useState<number>(0)
    return (
        <div className="hook1">
            {/* <button onClick={()=>{setCount(count+1)}}>
                {count}
            </button> */}
            <button onClick={()=>{
                for (let index = 0; index < 1000; index++) {
                    // 频繁的运算
                    setCount(count=>count+1)
                }
                }}>
                {count}
            </button>
        </div>
    );
}
export default Hook1;