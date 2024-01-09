import React, {useState, memo, useMemo, useCallback} from 'react'
/*
useCallback 是一个允许你在多次渲染中缓存函数的 React Hook。
const cachedFn = useCallback(fn, dependencies)
 */

function App() {
  return (
    <div>
      app,{Math.random()}
    </div>
  )
}
App = memo(App)
export default () => {
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState('hello react')
  const fn = ()=>{
    console.log(msg);
  }
  const fn2 = useCallback(fn, [msg])
  // const list = useMemo(() => {
  //   return [msg.toLowerCase(), msg.toUpperCase()]
  // }, [msg]);
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div className='container'>
      {/*当前组件更新,会一同更新子组件*/}
      <App fn={fn2}/>
      <button onClick={handleClick}>click</button>
    </div>
  )
}
