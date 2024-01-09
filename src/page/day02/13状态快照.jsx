import React, {useState} from 'react'
/*
1.作用域的count都是0
设置 state 只会为下一次渲染变更 state 的值。
一个 state 变量的值永远不会在一次渲染的内部发生变化， 即使其事件处理函数的代码是异步的。
 */
export default ()=>{
  const [count, setCount] = useState(0)
  return (
    <div className='container'>
      <p>count:{count}</p>
      <button onClick={()=>{
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
        //state快照为0
        console.log(count);
        setTimeout(()=>{
          console.log(count);
        }, 3000)
      }}>click</button>
    </div>
  )
}
