import React, {startTransition, useState} from 'react'
/*
startTransition 可以让你在不阻塞 UI 的情况下更新 state。
startTransition(scope)
使用方法
startTransition 函数可以将 state 更新标记为 transition。
将 state 更新标记为非阻塞 transition
  const [tab, setTab] = useState('about');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }
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
    for(let i = 0; i < 2000; i++) {
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
  const [query, setQuery] = useState('')
  const fn = (e)=>{
    //1.紧急
    setVal(e.target.value)
    //2.紧急-->非紧急
    startTransition(()=>{
      setQuery(e.target.value)
    })
  }
  return (
    <div className='container'>
      <input type="text" value={val} onChange={fn}/>
      <List query={query} />
    </div>
  )
}
