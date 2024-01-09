import React from 'react'
import PropTypes from 'prop-types';
/*
函数组件中的props使用
 */

const Person = (props)=>{
  return <div>
    <ul>
      <li>name:{props.name}</li>
      <li>age:{props.age}</li>
    </ul>
  </div>
}
Person.propTypes = {
  name: PropTypes.string
}

const Fn= () =>{
  return <div className={'container'}>
    <Person name={'guocheng'} age={12}/>
  </div>
}
export default Fn