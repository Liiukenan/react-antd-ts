/*
 * @Date: 2023-07-06 15:47:20
 * @LastEditors: kenan
 * @LastEditTime: 2023-07-07 10:17:33
 */
import React, { useEffect, useState } from 'react'

const Hook1 = () => {
    const [count, setCount] = useState<number>(0)
    useEffect(() => {
     console.log(1)   
    },[])
    useEffect(() => {
        console.log(count,'2223')
    },[count])

    // []里面能添加多个，任意一个改变都可导致重新计算
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