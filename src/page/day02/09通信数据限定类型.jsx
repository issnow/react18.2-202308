import React from 'react'
import PropTypes from "prop-types";
/*
09通信数据限定类型.jsx
1.设置propTypes属性
2.安装prop-types包
 */
function App({name,age,icon}){
  return(
    <div>
      app
      <p>name:{name}</p>
      <p>age:{age}</p>
      {icon}
    </div>
  )
}
App.propTypes = {
  name:PropTypes.string,
  age:PropTypes.number,
  gender:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
  icon:PropTypes.element
}
export default ()=>{
  return (
    <div className='container'>

      <App name={'guocheng'} age={19} icon={<div>jsx ele</div>}/>
    </div>
  )
}
