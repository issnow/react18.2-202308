import React, {Fragment} from "react"
import style from './index.module.css'
/*
1.Fragment 组件-->不会生成外层元素
2.{}-->放js表达式,放jsx元素
3.内联样式-->通过对象设置
4.局部样式-->import style from './index.module.css'
  具体元素使用className={style['box-bgc'] 中括号或者点语法 className={style.box}
 */
const App = ()=>{
  // console.log(<div className={"hello"}>hello</div>);

  const username = 'xiaoming'
  const jsxEle = <p>p标签</p>
  return(
    <Fragment data-id={"11"} >
      {username}
      <br/>

      {jsxEle}

      <div style={{width: '50px', height: '50px',border: "1px solid #f40"}}>
        demo01
      </div>

      <div className={style.box}>
        demo02
      </div>
    </Fragment>
  )
}

export default App