import React, {useState} from 'react'
/*
React 会等到事件处理函数中的 所有 代码都运行完毕再处理你的 state 更新
这让你可以更新多个 state 变量——甚至来自多个组件的 state 变量——而不会触发太多的 重新渲染。
但这也意味着只有在你的事件处理函数及其中任何代码执行完成 之后，UI 才会更新。这种特性也就是 批处理，它会使你的 React 应用运行得更快。
更新函数。当你将它传递给一个 state 设置函数时：
React 会将此函数加入队列，以便在事件处理函数中的所有其他代码运行后进行处理。
在下一次渲染期间，React 会遍历队列并给你更新之后的最终 state。
 */
export default ()=>{
  const [n, setN] = useState(0)
  console.log('渲染');
  return (
    <div className='container'>
      <p>n:{n}</p>
      <button onClick={()=>{
        // setN(n+1)
        // setN(n+1)
        // setN(n+1)
        setN(n=>n+1)
        setN(n=>n+1)
        setN(n=>n+1)
        console.log(n);
      }}>click</button>

    </div>
  )
}
