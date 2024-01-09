import React from 'react'
import PropTypes from 'prop-types';
/*
类组件
1.this.state
2.绑定时间  onClick={()=>{
            this.setState({name:"sdfs"})
          }
3.this.setState-->合并操作
4.props传递
5.PropTypes props类型设置
 */

class Person extends React.Component{
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
  }

  static defaultProps = {
    age: 20
  }
  render() {
    //props只读,不允许修改
    const {name,age} = this.props
    return <div>
      <ul>
        <li>name:{name}</li>
        <li>age:{age + 1}</li>
      </ul>
    </div>
  }
}

// //类型
// Person.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number
// }
// //默认值
// Person.defaultProps = {
//   age: 20
// }

class Mycomponent extends React.Component {

  //初始化状态
  state = {
    name: "guocheng",
    age: 12
  }

  //箭头函数-->this继承父级,向上找
  fn=()=> {
    //因为开启了严格模式,所以默认this-->undefined
    this.setState({name: "sdfs"})
  }
  render() {
    console.log('render');
    console.log(this);
    const {name} = this.state

    const props = {
      name:"小明", age: 12
    }
    return (
      <div className="container">
        {/*name:{this.state.name}*/}
        {/*<br/>*/}
        {/*age:{this.state.age}*/}
        {/*<button onClick={this.fn}>click</button>*/}

        <Person name='guocheng' age={12}/>
        <Person {...props}/>
        <Person name="xiaoxia"/>

      </div>
    )
  }
}
export default Mycomponent