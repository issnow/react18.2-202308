import React, {useState} from 'react'
import { cloneDeep } from 'lodash'
/*
使用set函数才可以修改状态,不可以直接操作state
两次state值一样,则不会重新渲染
数组使用要不改变原数组的方法,才会生成新数组
避免使用 (会改变原始数组)	          推荐使用 (会返回一个新数组）
添加元素	push，unshift	          concat，[...arr] 展开语法（例子）
删除元素	pop，shift，splice	      filter，slice（例子）
替换元素	splice，arr[i]=...赋值	  map（例子）
排序	reverse，sort	              先将数组复制一份（例子）

2.修改对象
 */
export default ()=>{
  const [count, setCount] = useState(0)
  const [arr, setArr] = useState([1,2,3])
  const [obj, setObj] = useState({
    name: 'guocheng',
    age: 12
  })
  const fn = ()=>{
    // count++//Assignment to constant variable.
    // setArr(arr=>{
    //   // return arr.concat(4)
    //   return [...arr, 4]
    // })

    const newarr = cloneDeep(arr)
    newarr.reverse()
    setArr(newarr)

    // setObj((obj)=>({
    //   ...obj,name:"tom"
    // }))

    // setObj({
    //   ...obj,
    //   name: "jerry"
    // })

    const tempobj = cloneDeep(obj)
    setObj({
      ...tempobj,
      name: 'dog'
    })
  }
  return (
    <div className='container'>

      <p>count:{count}</p>
      <ul>
        {arr.map((e,i)=>(
          <li key={i}>
            {e}
          </li>
        ))}
      </ul>
      <ul>
        {arr.filter(e=>e>2).map((c,i)=><li key={i}>{c}</li>)}
      </ul>
      <button onClick={fn}>click</button>
      {JSON.stringify(obj)}
    </div>
  )
}
