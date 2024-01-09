import React, {useEffect, useLayoutEffect, useRef, useState} from 'react'
/*
useLayoutEffect
useLayoutEffect 可能会影响性能。尽可能使用 useEffect。
useLayoutEffect 是 useEffect 的一个版本，在浏览器重新绘制屏幕之前触发。
用法
在浏览器重新绘制屏幕前计算布局
useLayoutEffect(setup, dependencies?)
useEffect-->渲染被绘制到屏幕之后执行,异步
useLayoutEffect-->渲染之后屏幕更新之前执行 同步
 */
export default ()=>{
  const [count, setCount] = useState(0)
  const divref = useRef(null);
  const fn=()=>{
    setCount(count+1)
  }
  useEffect(() => {
    console.log(divref.current);
    console.log(1);
  });
  // useLayoutEffect 在useEffect之前触发
  //场景-->操作dom,用来解决页面闪烁
  useLayoutEffect(()=>{
    console.log(divref.current);
    console.log(2);
  })
  return (
    <div className='container'>
      <div>count:{count}</div>
      <button onClick={fn}>click</button>
      <div ref={divref}> abc</div>
    </div>
  )
}
