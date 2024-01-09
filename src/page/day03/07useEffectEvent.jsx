import React, {useEffect, useState} from 'react'

/*
useEffectEvent:从effect中提取非反应性逻辑
这个api是实验性的,暂时没有在主版本使用
 */

function App({title, theme}){
  useEffect(()=>{
    console.log("进入" + title)
    console.log("theme" + theme)
    return ()=>{
      console.log("推出" + title)
      console.log("theme" + theme)
    }
  }, [title, theme])
  return (
    <div>
      hello chat
      <div>
        title:{title}
      </div>
    </div>
  )
}
export default ()=>{
  const [title, setTitle] = useState("聊天室1")
  const fn =(e)=>{
    setTitle(e.target.value)
  }
  const [inputval, setInputval] = useState(false)
  const change2 = ()=>{
    setInputval(!inputval)
  }
  return (
    <div className='container'>
      <select value={title} onChange={fn}>
        <option value={"聊天室1"}>聊天室1</option>
        <option value={"聊天室2"}>聊天室2</option>
      </select>
      <input type="checkbox" value={inputval} onChange={change2}/>黑色主题
      <App title={title} theme={inputval?"dark":"light"}/>
    </div>
  )
}
