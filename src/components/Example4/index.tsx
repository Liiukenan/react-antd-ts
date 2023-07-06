import React, { useRef } from 'react'
const Demo = React.forwardRef((props, ref: React.Ref<HTMLInputElement>) => {
  return (
    <>
      <input ref={ref}/>
    </>
    
  )
})

const Example4 = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div className="index">
      <Demo ref={inputRef}></Demo>
      <button onClick={() => {
        
        if (inputRef.current) {
          console.log(2223)
          inputRef.current.focus();
        }
      }}>点击</button>

    </div>
  );
}
export default Example4;