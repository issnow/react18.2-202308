import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react'

/*
useImperativeHandle 是 React 中的一个 Hook，它能让你自定义由 ref 暴露出来的句柄。
语法:useImperativeHandle(ref, createHandle, dependencies?)
参数
ref：该 ref 是你从 forwardRef 渲染函数 中获得的第二个参数。
createHandle：该函数无需参数，它返回你想要暴露的 ref 的句柄。该句柄可以包含任何类型。通常，你会返回一个包含你想暴露的方法的对象。
可选的 dependencies：函数 createHandle 代码中所用到的所有反应式的值的列表。反应式的值包含 props、
  状态和其他所有直接在你组件体内声明的变量和函数。倘若你的代码检查器已 为 React 配置好，它会验证每一个反应
  式的值是否被正确指定为依赖项。该列表的长度必须是一个常数项，并且必须按照 [dep1, dep2, dep3] 的形式罗列
  各依赖项。React 会使用 Object.is 来比较每一个依赖项与其对应的之前值。如果一次重新渲染导致某些依赖项发生
  了改变，或你没有提供这个参数列表，你的函数 createHandle 将会被重新执行，而新生成的句柄则会被分配给 ref。
使用方法
1.向父组件暴露一个自定义的 ref 句柄
2.暴露你自己的命令式方法
 */

function App(props, ref) {
  const inputref = useRef(null);
  useImperativeHandle(ref, ()=>{
    return {
      focus(){
        inputref.current.focus()
      },
      doOtherThing(){
        //.........
      }
    }
  })
  return (
    <div>
      <input type="text" ref={inputref}/>
    </div>
  )
}

//需要forwardRef转发
App = forwardRef(App)
export default () => {
  const [count, setCount] = useState(0)
  const ref = useRef(null);
  const fn = () => {
    setCount(count + 1)
    ref.current.focus()
    // console.log(n);
    // ref.current.style.backgroundColor = '#f40'
  }
  return (
    <div className='container'>
      <div>count:{count}</div>
      <button onClick={fn}>click</button>
      <App ref={ref}/>
    </div>
  )
}
