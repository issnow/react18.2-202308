import React, {useState, memo, useMemo} from 'react'
/*
useMemo 是一个 React Hook，它在每次重新渲染的时候能够缓存计算的结果
这个hook和useCallback类似,做性能优化用的
1.把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算
memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算

2.记住，传入 useMemo 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操
作，诸如副作用这类的操作属于 useEffect 的适用范畴，而不是 useMemo

3.如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值。
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
  const [msg, setMsg] = useState('hello react')
  // const list =
  const list = useMemo(() => {
    return [msg.toLowerCase(), msg.toUpperCase()]
  }, [msg]);
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div className='container'>
      {/*当前组件更新,会一同更新子组件*/}
      <App list={list}/>
      <button onClick={handleClick}>click</button>
    </div>
  )
}
