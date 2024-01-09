import React from 'react'
/*
纯函数 通常具有如下特征：
只负责自己的任务。它不会更改在该函数调用前就已存在的对象或变量。
输入相同，则输出相同。给定相同的输入，纯函数应总是返回相同的结果。
 */
var count = 10
export default ()=>{
  count++
  return (
    <div className='container'>

      {count}
    </div>
  )
}
