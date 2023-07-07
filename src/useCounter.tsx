import { useEffect, useRef, useState } from "react"

/*
 * @Date: 2023-07-07 10:20:05
 * @LastEditors: kenan
 * @LastEditTime: 2023-07-07 16:11:24
 */
// 自定义hook
function useCounter(start:any){
  const [count,setCount]=useState(start)
  const timerRef = useRef<NodeJS.Timer>();
  useEffect(()=>{
    timerRef.current=setInterval(()=>{
      setCount((count:number)=>count+1)
    },1000)

  },[])
  useEffect(()=>{
    console.log(count)
    if(count>5){
      clearInterval(timerRef.current)
    }
  },[count])
  return [count,setCount]
} 
export default useCounter