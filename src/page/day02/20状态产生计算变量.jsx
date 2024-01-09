import React, {useState} from 'react'
/*
根据状态重新渲染函数组件的特性,利用状态快照生成对应计算变量
 */
export default ()=>{
  const [count, setCount] = useState(0)
  const doubleCount = count*2//-->计算变量,相当于计算属性
  const fn=()=>{
    setCount(count+1)
  }
  return (
    <div className='container'>
      count:{count},
      doubleCount:{doubleCount}
      <button onClick={fn}>click</button>
    </div>
  )
}
