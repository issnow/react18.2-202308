import React, {useReducer, useState} from 'react'
import {func} from "prop-types";

/*
useReducer 是一个 React Hook，它允许你向组件里面添加一个 reducer。
const [state, dispatch] = useReducer(reducer, initialArg, init?)
reducer管理组件所有的状态-->是一个外部函数
 */
function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, 4]
    case 'edit':
      const temp = state.map(e => {
        if (action.item == e) {
          return 'new' + e
        } else {
          return e
        }
      })
      return temp
    case 'del':
      const temp2 = state.filter(item => {
        if (action.item == item) {
          return false
        } else {
          return true
        }
      })
      return temp2
  }
}

export default () => {
  const [list2, dispatch] = useReducer(reducer, [1, 2, 3])
  const [list, setList] = useState([1, 2, 3])
  const fn = () => {
    setList([...list, 4])
  }
  const onedit = (item) => {
    setList(list.map(e => {
      if (item == e) {
        return 'new' + item
      } else {
        return e
      }
    }))

  }
  const ondel = (e) => {
    setList(list.filter(item => {
      if (e == item) {
        return false
      } else {
        return true
      }
    }))
  }
  return (
    <div className='container'>
      <button onClick={fn}>click</button>
      <ul>
        {list.map((e, i) => <li key={i}>
          {e}
          <button onClick={onedit.bind(null, e)}>edit</button>
          <button onClick={ondel.bind(null, e)}>del</button>
        </li>)}
      </ul>

      <hr/>
      <div>list2</div>
      <button onClick={() => dispatch({type: "add"})}>click</button>
      <ul>
        {list2.map((e, i) => <li key={i}>
          {e}
          <button onClick={() => dispatch({type: "edit", item: e})}>edit</button>
          <button onClick={() => dispatch({type: "del", item: e})}>del</button>
        </li>)}
      </ul>
    </div>
  )
}
