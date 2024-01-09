import React, {useId} from 'react'
/*
useId 是一个 React Hook，可以生成传递给无障碍属性的唯一 ID。
const id = useId()
为无障碍属性生成唯一 ID
为多个相关元素生成 ID
为所有生成的 ID 指定共享前缀
注意事项 :
useId 是一个 Hook，因此你只能 在组件的顶层 或自己的 Hook 中调用它。你不能在内部循环或
条件判断中调用它。如果需要，可以提取一个新组件并将 state 移到该组件中。
useId 不应该被用来生成列表中的 key。key 应该由你的数据生成。
 */
function MyInput(){
  const password = useId()
  return (
    <div>
      <label htmlFor="">
        密码:
        <input type="passowrd" aria-describedby={'prefix'+password}/>
      </label>
      <p id={'prefix'+password}>
        密码填写提示
      </p>
    </div>
  )
}
export default ()=>{
  return (
    <div className='container'>
      <MyInput />
      <MyInput />
    </div>
  )
}
