import React from 'react'
/*
组件通信默认值
1.es6默认参数
2.组件的defaultProps属性
 */
function App({name, age=20, gender='男', email}){
  // 1.es6默认参数
  return (
    <div>
      <div>name:{name}</div>
      <div>age:{age}</div>
      <div>gender:{gender}</div>
      <div>email:{email}</div>
    </div>
  )
}
//2.组件的defaultProps属性
App.defaultProps = {
  email:"guocheng@qq.com"
}
export default ()=>{
  return (
    <div className='container'>

      <App name={'guocheng'} age={18}/>
    </div>
  )
}
