import React from 'react'
/*
1.组件通信
a.通过props传参
b.如果属性没有赋值,则为true
c.还可以传递函数
  自定义函数
d.只要{}可以写的表达式,都可以传递过去
e.批量传输
 */

function Wel(props){
  const {name,age} = props
  return (
    <div>
      wel
      <hr/>
      name:{name},
      age:{age}
    </div>
  )
}
function Person({name,age, gender, onClick, getdata}){
  return (
    <div>
      name:{name},
      age:{age},
      gender:{gender+""}
      <button onClick={onClick}>click</button>
      <button onClick={()=>getdata(1231)}>click2</button>
    </div>
  )
}
export default ()=>{
  const n = 12
  const handleClick=()=>{
    console.log(123);
  }

  const getdata = (data)=>{
    console.log(data);
  }
  const personObj = {
    name: "xiaoxia",
    age: 23
  }
  return (
    <div className='container'>
      <Wel name={"guocheng"} age={18}/>
      <Person name={"guocheng2"} age={n} gender onClick={handleClick}
              getdata={getdata}
      />
      <Wel {...personObj}/>
    </div>
  )
}
