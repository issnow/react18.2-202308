import React from 'react'
/*
两种实现组件的点标记写法
1.使用对象
2.使用函数
 */
// function Welcome(){
//   return <div>
//     welcome
//   </div>
// }
const Qf = {
  Welcome(){
    return (
      <div>
        hello1
      </div>
    )
  }
}


const {Welcome} = Qf

const Qg = ()=>{
  return (
    <div>
      qg
    </div>
  )
}
Qg.Welcome = ()=>{
  return (
    <div>
      hello,qg.welcome
    </div>
  )
}
export default ()=>{
  return (
    <div className='container'>
      <Welcome />
      <Qf.Welcome></Qf.Welcome>
      <Welcome />

      <Qg.Welcome></Qg.Welcome>
    </div>
  )
}
