import React from "react"
import classNames from "classnames";
import style1 from './index.module.css'
/*
classnames模块使用
1.控制classname的添加
var btnClass = classNames({
  btn: true,
  'btn-pressed': this.state.isPressed,
  'btn-over': !this.state.isPressed && this.state.isHovered
});

 */
function App(){
  const style = classNames({
    box1: true,
    box2: true,
    box3: false,
    container:true,
    [style1['box-bgc']]: true
  })
  return (
    <>
      <div className={style}>
        12313
      </div>
    </>
  )
}

export default App