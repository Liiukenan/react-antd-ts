/*
 * @Date: 2023-06-29 10:15:47
 * @LastEditors: kenan
 * @LastEditTime: 2023-06-30 16:37:09
 */
import React from 'react';
import './App.css';
// import Orange from './Orange';
// import Fun from './Fun'
// import Banana from './components/Banana'
// import Toggle from './components/Toggle'
import IfExample from './components/IfExample'
function App() {
  return (
    <div className="App">
     {/* <Orange></Orange>
     <Fun name="kenan" />
     <Fun name="kenan">
        组件内插入内容
     </Fun>
     <Banana></Banana> */}

     {/* <Toggle></Toggle> */}
     <IfExample></IfExample>
    </div>
  );
}

export default App;
