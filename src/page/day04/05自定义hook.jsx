import React, {useEffect, useState} from 'react'
/**
 * 这个组件是自定义hook
 * 目的: 有时候我们会想要在组件之间重用一些状态逻辑。目前为止，有两种主流方案来解决这个问题：高阶组件和 render props。
 * 自定义 Hook 可以让你在不增加组件的情况下达到同样的目的。
 */

function useMouse(){
  //理解就是一个函数,处理某些逻辑,返回数据
  const [state, setState] = useState({
    pageX: NaN,
    pageY: NaN
  })
  useEffect(() => {
    function move(e){
      setState({
        pageX: e.pageX,
        pageY: e.pageY
      })
    }
    document.addEventListener('mousemove', move)
    return ()=>{
      document.removeEventListener('mousemove', move)
    }
  }, []);
  return state
}
export default ()=>{
  const mouse = useMouse()
  return (
    <div className='container'>
      <div>pagex:{mouse.pageX}</div>
      <div>pagey:{mouse.pageY}</div>
    </div>
  )
}
