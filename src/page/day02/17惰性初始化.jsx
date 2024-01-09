import React, {useState} from 'react'
/*

 */
function getD(n){
  console.log('getD');
  return n*2
}
export default ()=>{
  // const [count, setCount] = useState(getD(2))
  const [count, setCount] = useState(()=>getD(2))//惰性初始化值
  const fn = ()=>{
    setCount(count+1)
  }
  return (
    <div className='container'>
      count:{count}
      <button onClick={fn}>click</button>
    </div>
  )
}
