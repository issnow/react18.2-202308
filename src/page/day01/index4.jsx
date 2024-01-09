import React from 'react'

/*
类组件
1.this.state
2.绑定时间  onClick={()=>{
            this.setState({name:"sdfs"})
          }
3.this.setState-->合并操作
 */
class Mycomponent extends React.Component {
  // 构造器调用1次
  constructor(props) {
    super(props);
    this.state = {
      name: 'guocheng',
      age: 123
    }
    console.log(this);
    console.log(props);
    // this.fn = this.fn.bind(this)

  }


  // componentDidMount() {
  // }
  // componentDidUpdate(prevProps, prevState, snapshot) {
  // }
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  // }

  fn() {
    //因为开启了严格模式,所以默认this-->undefined
    this.setState({name: "sdfs"})
  }

  render() {
    console.log('render');
    const {name} = this.state
    return (
      <div className="container">
        name:{this.state.name}
        <br/>
        age:{this.state.age}
        <button onClick={this.fn.bind(this)}>click</button>
        {/*<button onClick={this.fn}>click</button>*/}
      </div>
    )
  }
}

export default Mycomponent