import React from 'react'
import {useMouse} from "ahooks";
import style from './index.module.css'
/*

 */

export default ()=>{
  let mouse = useMouse();
  return (
    <div className='container'>
      <div className={style.box}>
        {
          JSON.stringify(mouse)
        }
      </div>

      <div>pagex:{mouse.pageX}</div>
      <div>pagey:{mouse.pageY}</div>
    </div>
  )
}
