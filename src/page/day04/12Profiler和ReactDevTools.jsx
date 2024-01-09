import React, {Profiler, useState} from 'react'

/*
<Profiler> 允许你编程式测量 React 树的渲染性能。
<Profiler id="App" onRender={onRender}>
  <App />
</Profiler>
 */

function App({count}) {
  return (
    <div>
      he,{count}
    </div>
  )
}

export default () => {
  const [count, setCount] = useState(0)
  const fn = () => {
    setCount(count + 1)
  }
  return (
    <div className='container'>
      <Profiler id={"App"} onRender={(...arr) => {
        console.log(arr);
        //id, phase, actualDuration, baseDuration, startTime, commitTime
        //['App', 'mount', 2.9000000059604645, 0.4000000059604645, 620.3000000119209, 625.2000000178814]
        // ['App', 'update', 0.30000001192092896, 0.09999999403953552, 2841.4000000059605, 2842]
      }}>
        <App count={count}></App>
      </Profiler>
      <div>count:{count}</div>
      <button onClick={fn}>click</button>
    </div>
  )
}
