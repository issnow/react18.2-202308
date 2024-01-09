import React, {useEffect, useRef, useState} from 'react'
/*
useEffect 是一个 React Hook，它允许你 将组件与外部系统同步。
useEffect(setup, dependencies?)
用法
连接到外部系统
在自定义 Hook 中封装 Effect
控制非 React 小部件
使用 Effect 请求数据
指定响应式依赖项
在 Effect 中根据先前 state 更新 state
删除不必要的对象依赖项
删除不必要的函数依赖项
从 Effect 读取最新的 props 和 state
在服务器和客户端上显示不同的内容

副作用:函数在执行过程中对外部造成的影响称为副作用,-->ajax dom操作
react组件中,事件操作可以处理副作用,useEffect用来初始化副作用
 */
export default ()=>{
  const ref = useRef(null);
  const [count, setCount] = useState(0)
  const fn = ()=>{
    //副作用:符合纯函数,事件处理副作用
    // ref.current.focus();

    setCount(count +1)
  }
  //初始时处理副作用,useEffect触发时机:jsx渲染后触发的
  //最后的步骤:-->每次渲染玩之后都会触发useEffect
  //翻译-->useEffect兜底触发
  useEffect(()=>{
    // console.log(123);
    // ref.current.focus();
    console.log(count);
  })
  return (
    <div className='container'>
      <div>count:{count}</div>
      <button onClick={fn}>click</button>
      <input type="text" ref={ref}/>
    </div>
  )
}
