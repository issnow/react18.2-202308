import React, {useDeferredValue, useState, useTransition} from 'react'
/*
useTransition 是一个让你在不阻塞 UI 的情况下来更新状态的 React Hook。

const [isPending, startTransition] = useTransition()
useTransition 返回一个具有两个项的数组：
isPending 标志，告诉你是否存在挂起的转换状态。
startTransition 方法 允许你将状态更新标记为转换状态。

2.useDeferredValue(value)
在组件的顶层调用 useDeferredValue 来获取该值的延迟版本。
 */
function List({query}) {
  const item = []
  const word = 'hello world'
  if(query !== '' && word.includes(query)) {
    for(let i = 0; i < 1000; i++) {
      var arr = word.split(query)
      item.push(
        <li key={i}>
          <span>{arr[0]}</span>
          <span style={{color: 'red'}}>{query}</span>
          <span>{arr[1]}</span>
        </li>
      )
    }
  }else {
    for(let i = 0; i < 40000; i++) {
      item.push(<li key={i}>{word}</li>)
    }
  }
  return (
    <ul>
      {item}
    </ul>
  )
}
export default ()=>{
  const [val, setVal] = useState('')
  // const [query, setQuery] = useState('')
  // const [isPending, startTransition]  = useTransition()

  //useDeferredValue 来获取val的延迟版本。
  const deferredQuery  = useDeferredValue(val)
  const fn = (e)=>{
    //1.紧急
    setVal(e.target.value)
    //2.紧急-->非紧急
    // startTransition(()=>{
    //   setQuery(e.target.value)
    // })
  }
  return (
    <div className='container'>
      <input type="text" value={val} onChange={fn}/>
      {/*{isPending && <div>loading...</div>}*/}
      <List query={deferredQuery} />
    </div>
  )
}
