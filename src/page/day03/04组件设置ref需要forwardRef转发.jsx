import React, {forwardRef, useRef, useState} from 'react'

/*
组件添加ref,需要forwardRef转发,
forwardRef让组件通过ref向父组件公开dom节点
 */

function App(props, ref) {
  return (
    <div>
      <input type="text" ref={ref}/>
    </div>
  )
}

//需要forwardRef转发
App = forwardRef(App)
export default () => {
  const [count, setCount] = useState(0)
  const ref = useRef(null);
  const fn = () => {
    setCount(count + 1)
    ref.current.focus()
    ref.current.style.backgroundColor = '#f40'
  }
  return (
    <div className='container'>
      <div>count:{count}</div>
      <button onClick={fn}>click</button>
      <App ref={ref}/>
    </div>
  )
}
