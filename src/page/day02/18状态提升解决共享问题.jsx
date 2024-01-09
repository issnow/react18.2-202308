import React, {useState} from 'react'
/*
共享数据
父传子-->将数据和逻辑提升到父级
 */


function Button(){
  const [count, setCount] = useState(0)
  return (
    <div>
      count:{count}
      <button onClick={()=>{
        setCount(count+1)
      }}>click</button>
    </div>
  )
}
function Button2({count,fn}){
  return (
    <div>
      count:{count}
      <button onClick={fn}>click</button>
    </div>
  )
}
export default ()=>{
  const [count, setCount] = useState(0)
  const fn=()=>{
    setCount(count+1)
  }
  return (
    <div className='container'>
      {/*<Button />*/}
      {/*<Button />*/}
      <Button2 count={count} fn={fn}/>
      <Button2 count={count} fn={fn}/>
    </div>
  )
}
