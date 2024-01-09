import React, {useEffect, useRef, useState} from 'react'
/*
分开处理useEffect的使用
使用useEffect第二个参数,depd
 */
export default ()=>{
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState("hello")

  //如果不传依赖,则两个每次渲染玩都会触发
  //传依赖,初始的时候都会触发,更新只有对应依赖发生改变才会触发, Object.is()判断值是否一样
  useEffect(()=>{
    console.log(count);
  }, [count])
  useEffect(()=>{
    console.log(msg);
  }, [msg])


  //如果依赖是空数组,则只有初始会触发,更新不会触发
  useEffect(()=>{
    console.log(123);

    // 空依赖对state操作,不规范-->错误写法
    console.log(count);
  }, [])
  return (
    <div className='container'>
      <div>count:{count}</div>
      <div>msg:{msg}</div>
      <button onClick={()=>{
        // setCount(count + 1)
        setMsg("hi")
      }}>click</button>
    </div>
  )
}
