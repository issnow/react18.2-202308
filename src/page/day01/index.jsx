import React from 'react';

const page = React.createElement("div", {
  className: "heihei",
}, "helo")
console.log(page);

/*
1.标签混入js表达式使用{}
2.class-->className
3.style-->style={{color: "#f40", border: "1px solid #ccc"}}
4.虚拟dom只有一个根标签
5.标签闭合
6.jsx
 */

const vdom = function () {
  const id = "myid"
  const data = "111"
  return (
    <div id={id} className="myClass">
      {data}
      <p style={{color: "#f40", border: "1px solid #ccc"}}>
        p标签
      </p>
    </div>
  )
}
export default vdom;