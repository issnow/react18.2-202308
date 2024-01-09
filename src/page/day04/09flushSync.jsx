import React, {useState} from 'react'
/*

 */
export default ()=>{
  console.log(111);
  const [count, setCount] = useState(0)
  const fn=()=>{
    setCount(count+1)
  }
  return (
    <div className='container'>
      <div>count:{count}</div>
      <button onClick={fn}>click</button>
    </div>
  )
}
