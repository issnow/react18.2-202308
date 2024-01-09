import React, {useState, memo} from 'react'

/*
memo 允许你的组件在 props 没有改变的情况下跳过重新渲染。
 问题:当前组件更新,会一同更新子组件
 使用 memo 将组件包装起来，以获得该组件的一个 记忆化 版本。通常情况下，只要该组件的 props
 没有改变，这个记忆化版本就不会在其父组件重新渲染时重新渲染。但 React 仍可能会重新渲染它：记忆化是一种性能优化，而非保证。
 */
function App() {
  return (
    <div>
      app,{Math.random()}
    </div>
  )
}
//使用 memo 将组件包装起来，只要该组件的 props
//  没有改变，这个记忆化版本就不会在其父组件重新渲染时重新渲染
App = memo(App)

export default () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div className='container'>
      {/*当前组件更新,会一同更新子组件*/}
      <App/>
      <button onClick={handleClick}>click</button>
    </div>
  )
}
