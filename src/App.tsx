/*
 * @Date: 2023-06-29 10:15:47
 * @LastEditors: kenan
 * @LastEditTime: 2023-06-29 16:00:46
 */
import React from 'react';
import './App.css';
import Orange from './Orange';
import Fun from './Fun'
import Banana from './components/Banana'

function App() {
  return (
    <div className="App">
     <Orange></Orange>
     <Fun name="kenan" />
     <Fun name="kenan">
        组件内插入内容
     </Fun>
     <Banana></Banana>
    </div>
  );
}

export default App;
