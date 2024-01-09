import React from 'react'
import PropTypes from 'prop-types';
/*
使用refs
this.$refs.xxx获取真实dom
 */



class MyComponent extends React.Component {
  onclick=()=>{
    // var input = document.getElementById(`input1`)
    // console.log(input.value);
    console.log(this.refs);
    console.log(this.refs.input1.value);
  }
  render() {
    return <div className={"container"}>
      <input ref={'input1'} type="text" placeholder={'left'}/><br/>
      <button onClick={this.onclick}>click</button><br/>
      <input ref={'input2'} type="text" placeholder={'right'}/>
      <input type="text" ref={()=>{}}/>
    </div>
  }
}
export default MyComponent