import React, {useReducer, useState} from 'react'
import {func} from "prop-types";
import {useImmerReducer} from "use-immer";

/*
useReducer 是一个 React Hook，它允许你向组件里面添加一个 reducer。
const [state, dispatch] = useReducer(reducer, initialArg, init?)
reducer管理组件所有的状态-->是一个外部函数

useImmerReducer-->是useReducer的immer版本
 */
function reducer(draft, action) {
  switch (action.type) {
    case 'add':
      draft.push(draft.length + 1)
    case 'edit':
      draft.forEach(e=>{
        if(e==action.item) {
          e=  'new'+ e
        }
      })
    case 'del':
      draft.splice(draft.indexOf(action.item), 1)
  }
}

export default () => {
  const [list, dispatch] = useImmerReducer(reducer, [1, 2, 3])
  return (
    <div className='container'>
      <div>list2</div>
      <button onClick={() => dispatch({type: "add"})}>click</button>
      <ul>
        {list.map((e, i) => <li key={i}>
          {e}
          <button onClick={() => dispatch({type: "edit", item: e})}>edit</button>
          <button onClick={() => dispatch({type: "del", item: e})}>del</button>
        </li>)}
      </ul>
    </div>
  )
}
