import React from 'react';
/*
遍历数据
1.遍历数组
2.遍历对象
 */

export default () => {
  const arr = ['react', 'js', 'jq']
  const obj = {
    id:1001,
    name: "guocheng",
    age: 12
  }
  return (
    <div className="container">
      <div>
        数组:
        {
          arr.map((e, i)=>(<div key={i}>
            {e}
          </div>))
        }
      </div>
      <div>
        对象
        {
          Object.keys(obj).map((item,index)=>(
            <div key={index}>
              {item}:{obj[item]}
            </div>
          ))
        }
      </div>
    </div>
  )
}