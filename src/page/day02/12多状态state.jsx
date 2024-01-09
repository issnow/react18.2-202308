import React, {useState} from 'react'
/*
1.多状态是如何正确记忆的
useState按顺序添加索引值,不要改变useState的顺序
 */
export default ()=>{
  const [n, setN] = useState(0)
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)
  return (
    <div className='container'>
      <button onClick={()=>{setN2(n2+1)}}>click</button>
      {n},{n1},{n2}
    </div>
  )
}
