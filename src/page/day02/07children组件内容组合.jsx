import React from 'react'
/*
children使用
props.children属性
通过props传递多个相同类型的组件
 */
function Son({index}){
  return <div>
    son:{index}
  </div>
}
function App({children}){
  console.log(children);
  return <div>
    app
    {children}
  </div>
}
function App2({son1,son2}){
  return <div>
    {son1}
    app
    {son2}
  </div>
}
export default ()=>{
  return (
    <div className='container'>

      {/*<App>*/}
      {/*  <Son index={1}></Son>*/}
      {/*  <Son index={2}></Son>*/}
      {/*</App>*/}
      <App2
        son1={<Son index={1}></Son>}
        son2={<Son index={2}></Son>}
      />
    </div>
  )
}
