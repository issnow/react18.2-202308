import React from 'react'
/*
数组遍历渲染元素
1.默认是join操作
2.使用map
3.key属性-->这些 key 会告诉 React，每个组件对应着数组里的哪一项,
  一个合适的 key 可以帮助 React 推断发生了什么，从而得以正确地更新 DOM 树
 */
export default ()=>{
  const list = [11,22,33]
  return (
    <div className='container'>
      {list}
      <ul>
        {
          list.map((e,index)=>(
            <li key={index}>
              数字:{e}
            </li>
          ))
        }
      </ul>

    </div>
  )
}
