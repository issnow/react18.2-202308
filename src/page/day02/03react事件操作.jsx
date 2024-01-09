import React from 'react'
/*
react事件操作
1.event合成事件
2.事件委托到容器元素
3.传参
  使用高阶函数
  使用箭头函数-->推荐

react条件渲染
1.使用if else
2.使用三元运算符
3.使用&&
4.boolean值,空串,null,undefined,对象,函数不会渲染,要想渲染使用JSON.stringify或者+""
 */
function App (){
  const fn = (e)=>{
    console.log(e);
  }
  const fn2 = (num)=>{
    return (e)=>{
      console.log(e);
      console.log(num);
    }
  }
  const fn3 = (e, num)=>{
    console.log(num);
    console.log(e);
  }

  const ele1 = <div>下雨天</div>
  const ele2 = <div>晴天</div>
  return (
    <div className={'container'}>
      1231
      <button onClick={fn}>111111111</button>
      <button onClick={fn2(123)}>222222</button>
      <button onClick={(e)=>fn3(e, 123)}>33333333</button>

      {
        true ?ele1:ele2
      }

      {
        true?<div>1</div> : <div>2</div>
      }

      {
        !!1 && <div>true</div>
      }
      <hr />
      {
        JSON.stringify(true)
      }
      <hr />
      {function fn(){} + ""}
    </div>
  )
}
export default App