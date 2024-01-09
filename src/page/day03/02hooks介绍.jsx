import React, {useState} from 'react'
/*
hooks
Hook 让你可以在组件中使用不同的 React 功能。你可以使用内置的 Hook
或者把它们组合起来建立你自己的。本页列出了 React 中所有的内置 Hook。
1.状态 Hook
  useState 声明了一个你可以直接更新的 state 变量。
  useReducer 声明了一个带有更新逻辑的 state 变量在一个 reducer 函数 中。
2.Context Hook
  useContext 读取并订阅一个 context
3.Ref Hook
  useRef 声明一个 ref。你可以在其中保存任何值，但最常见的是它用来保存一个 DOM 节点。
  useImperativeHandle 可以让你自定义组件所暴露的 ref。一般很少使用。
4.Effect Hook
  useEffect 将一个组件连接到外部系统。
  useEffect 有两个很少使用的变换形式，它们在时机上有一些差异：
  useLayoutEffect 在浏览器重新绘制屏幕前执行。在这里，你可以测量布局。
  useInsertionEffect 在 React 对 DOM 进行更改之前触发。在这里，库可以插入动态的 CSS。
5.性能 Hook
  useMemo 让你缓存一个代价非常高的计算结果。
  useCallback 让你在将一个函数定义传递给一个优化的组件之前缓存它。
6.自定义 Hook
7.第三方hook
 */
export default ()=>{
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
