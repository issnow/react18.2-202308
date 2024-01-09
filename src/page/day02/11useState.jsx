import React, {useState} from 'react'
/*
11useState.jsx
状态是变化的数据
useState可创建状态和修改状态的方法

普通变量无法重新渲染jsx
state状态数据重新触发函数组件,重新运行函数组件
渲染与提交的过程(三个步骤)
1.触发 一次渲染（把客人的点单分发到厨房）
  当应用启动时，会触发初次渲染。框架和沙箱有时会隐藏这部分代码，但它是通过调用目标 DOM 节点的 createRoot，然后用你的组件调用 render 函数完成的
2.渲染 组件（在厨房准备订单）
  在您触发渲染后，React 会调用您的组件来确定要在屏幕上显示的内容。“渲染中” 即 React 在调用您的组件。
  在进行初次渲染时, React 会调用根组件。
  对于后续的渲染, React 会调用内部状态更新触发了渲染的函数组件。
3.提交 到 DOM（将菜品放在桌子上）
  在渲染（调用）您的组件之后，React 将会修改 DOM。
  对于初次渲染， React 会使用 appendChild() DOM API 将其创建的所有 DOM 节点放在屏幕上。
  对于重渲染， React 将应用最少的必要操作（在渲染时计算！），以使得 DOM 与最新的渲染输出相互匹配。
  React 仅在渲染之间存在差异时才会更改 DOM 节点。
*/
export default ()=>{
  let count = 0
  const [num, setNum] = useState(0)

  const handleClick = ()=>{
    count++
    // setNum((prevState)=>++prevState)
    setNum(num +1)
  }
  return (
    <div className='container'>
      <button onClick={handleClick}>click</button>
      count:{count},
      num:{num}
    </div>
  )
}
