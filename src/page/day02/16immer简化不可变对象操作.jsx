import React from 'react'
import {useImmer} from "use-immer";
/*
1.immer是一个第三放模块,相对于深拷贝,不需要赋值数据树中的未更改部分,
  并且在内存中与相同状态的旧版本共享,
  场景:用来处理复杂引用类型数据
 */
export default ()=>{
  const [arr,setArr] = useImmer([
    {id:1,name:'guocheng'},
    {id:2,name:'guocheng2'},
    {id:3,name:'guocheng3'},
  ])

  const [obj,setObj]  = useImmer({name:'guocheng',age:12})
  const fn = ()=>{
    setArr((draft)=>{
      console.log(draft);
      draft.push({
        id: 4,name:'guocheng4'
      })
      return draft
    })
    setObj(draft=>{
      draft.name = 'xiaoming'
    })
  }
  return (
    <div className='container'>
      name:{obj.name},
      age:{obj.age}
      <button onClick={fn}>click</button>
      <ul>
        {
          arr.map((e,index)=>(
            <li key={index}>
              {e.id},{e.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
