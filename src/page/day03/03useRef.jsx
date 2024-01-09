import React, {useRef, useState} from 'react'

/*
useRef:useRef 是一个 React Hook，它能让你引用一个不需要渲染的值。
使用方法
1.用 ref 引用一个值
  useRef 返回一个具有单个 current 属性 的 ref 对象，并初始化为你提供的 initial value
  改变 ref 不会触发重新渲染
2.通过 ref 操作 DOM
  使用 ref 操作 DOM 是非常常见的。React 内置了对它的支持。
  首先，声明一个 initial value 为 null 的 ref 对象
  然后将你的 ref 对象作为 ref 属性传递给你想要操作的 DOM 节点的 JSX：
  当 React 创建 DOM 节点并将其渲染到屏幕时，React 将会把 DOM 节点设置为你的 ref 对象的 current 属性
3.避免重复创建 ref 的内容
  const playerRef = useRef(null);
  if (playerRef.current === null) {
    playerRef.current = new VideoPlayer();
  }
 */

function Interval() {
  const [count, setCount] = useState(0)
  const timer = useRef(null);
  const fn = () => {
    setCount(count+1)
    if (timer.current == null) {
      clearInterval(timer.current)
      timer.current = setInterval(() => {
        console.log(1);
      }, 1000)
    }
  }
  return (
    <div>
      count:{count}
      <button onClick={fn}>click</button>
    </div>
  )
}

export default () => {
  const [n, setN] = useState(0)
  let count = 0
  let count1 = useRef(0)
  const fn = () => {
    setN(n + 1)
    count++
    count1.current++
    console.log(count);
    console.log(count1.current);
  }
  const divRef = useRef(null);

  const list = [
    {id: 1, text: "text1"},
    {id: 2, text: "text2"},
    {id: 3, text: "text3"},
  ]
  return (
    <div className='container'>
      n:{n}
      <button onClick={fn}>click</button>
      {/*<Interval/>*/}

      <div ref={divRef}>hello react</div>
      <button onClick={()=>{
        //通过useRef操作dom
        console.log(divRef.current.innerHTML);
        divRef.current.style.backgroundColor = '#f40';
      }}>change color</button>


      {/*遍历的时候操作ref*/}
      <ul>
        {list.map((e)=><li key={e.id} ref={ref=>{
          ref.style.background = '#3c8cff'
        }}>{e.text}</li>)}
      </ul>
    </div>
  )
}
