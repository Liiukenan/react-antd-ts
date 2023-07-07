/*
 * @Date: 2023-07-07 10:18:49
 * @LastEditors: kenan
 * @LastEditTime: 2023-07-07 15:30:31
 */
import React from 'react';
import useCounter from '../../useCounter';

const Hook2 = () => {
  const [count, setCount] = useCounter(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount((c:number)=>c + 1)}>
        点击执行
      </button>
    </div>
  );
};

export default Hook2;