import React, {useState} from 'react'
/*
组件被销毁,数据也会重置
组件检查名字一样则数据会被保留
使用key值,可以标记独立的组件,或者元素的结构不一样
 */
function App({style={}}){
  const [n, setN] = useState(0)
  const fn = ()=>{
    setN(n + 1)
  }
  return (
    <div>
      n:{n}
      <button onClick={fn} style={style}>click</button>
    </div>
  )
}
export default ()=>{
  const [show, setShow] = useState(true)
  const [addStyle, setAddStyle] = useState(false)
  const toggleApp = ()=>{
    setShow(!show)
    setAddStyle(!addStyle)
  }
  return (
    <div className='container'>
      {show && <App />}
      {addStyle ? <App style={{borderColor: "#f40"}} key={1}></App> : <App key={2}/>}
      <button onClick={toggleApp}>toggle app</button>
    </div>
  )
}
