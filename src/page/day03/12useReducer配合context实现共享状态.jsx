import React, {createContext, useContext, useReducer, useRef, useState} from 'react'
/*
reducer整合组件状态更新逻辑
context将信息深入传递其他组件

 */
const Context = createContext()

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]
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

const ListProvider = ({children}) => {
  const [list, dispatch] = useReducer(reducer, [1, 2, 3])
  return (
    <Context.Provider value={{list, dispatch}}>
      {children}
    </Context.Provider>
  )
}

function ListHead() {
  const {dispatch} = useContext(Context)
  const ref = useRef(null);
  const [value, setValue] = useState('')
  const change = (e) => {
    setValue(e.target.value)
  }
  return (
    <>
      <input type="text" ref={ref} value={value} onChange={change}/>
      <button onClick={() => dispatch({type: "add", payload: value})}>click</button>
    </>
  )
}

function ListContent() {
  const {list, dispatch} = useContext(Context)
  return (
    <ul>
      {list.map((e, i) => <li key={i}>
        {e}
        <button onClick={() => dispatch({type: 'edit', item: e})}>edit</button>
        <button onClick={() => dispatch({type: "del", item: e})}>del</button>
      </li>)}
    </ul>
  )
}

export default () => {
  return (
    <div className='container'>
      <div>app</div>
      <ListProvider>
        <ListHead/>
        <ListContent/>
      </ListProvider>
    </div>
  )
}
