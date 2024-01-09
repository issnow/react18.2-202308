import React, {createContext, useContext, useState} from 'react'
/*
1.createContext 能让你创建一个 context 以便组件能够提供和读取。
  const SomeContext = createContext(defaultValue)
  参考
  createContext(defaultValue)
  SomeContext.Provider
  SomeContext.Consumer
  通过 useContext() 来读取上下文：
   // ✅ 推荐方式
  const theme = useContext(ThemeContext);
  return <button className={theme} />;
2.useContext 是一个 React Hook，可以让你读取和订阅组件中的 context。
  const value = useContext(SomeContext)
  用法
  向组件树深层传递数据
  通过 context 更新传递的数据
  指定回退默认值
  覆盖组件树一部分的 context
  在传递对象和函数时优化重新渲染
 */

const Context = createContext()

function Son1() {
  const context1 = useContext(Context)
  return (
    <div>
      son1
      <div>
        name:{context1.name}--
        age: {context1.age}
      </div>
      <Son2/>
    </div>
  )
}

function Son2() {
  const obj = useContext(Context)
  return (
    <div>
      son2
      <div>
        name:{obj.name},
        age:{obj.age},
      </div>
    </div>
  )
}

export default () => {
  const [obj, setObj] = useState({
    name: 'guocheng',
    age: 12
  })
  return (
    <div className='container'>
      app
      <Context.Provider value={obj}>
        <Son1/>
      </Context.Provider>
    </div>
  )
}
