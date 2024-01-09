import React from 'react'
import { createPortal } from 'react-dom';
/*
createPortal 允许你将 JSX 作为 children 渲染至 DOM 的不同部分。
<div>
  <SomeComponent />
  {createPortal(children, domNode, key?)}
</div>
 */
export default ()=>{
  return (
    <div className='container'>
      {createPortal(<p>p标签</p>, document.body)}
    </div>
  )
}
