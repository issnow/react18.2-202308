import React, {useEffect, useInsertionEffect, useLayoutEffect, useRef} from 'react'
/*
useInsertionEffect 可以在布局副作用触发之前将元素插入到 DOM 中。
useInsertionEffect 是为 CSS-in-JS 库的作者特意打造的。除非你正在使用 CSS-in-JS 库并且需要注入样式，
否则你应该使用 useEffect 或者 useLayoutEffect。
useInsertionEffect(setup, dependencies?)
 */
export default ()=>{
  useEffect(()=>{
    console.log(1, ref.current);
  })
  // 触发时机2,3,1,其中2中拿不到ref
  useInsertionEffect(()=>{
    console.log(2, ref.current);
    const style = document.createElement('style')
    style.innerHTML = `
      .box {
        width: 100px;
        height: 100px;
        background:#f40;
      }
    `
    document.head.appendChild(style)
  })
  useLayoutEffect(()=>{
    console.log(3, ref.current);
  })
  const ref = useRef(null);
  return (
    <div className='container'>
      <div ref={ref} className={'box'}></div>
    </div>
  )
}
