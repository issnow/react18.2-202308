import React, {useCallback, useEffect, useRef, useState} from 'react';
/*
useEffect清理操作
卸载组件-->清理
也可以使用第三方ahooks中的useRequest
 */
function getData(){
  return [1,2,3]
}
function Chat({title}){
  const [data, setData] = useState([])
  useEffect(()=>{
    console.log('login' + title);

    let ignore = false
    if(!ignore) {
      setData(getData())
    }

    //使用async和await的demo
    // async function getList(){
    //   let res = await getData();
    // }
    // getList();


    //卸载清理
    //下次更新,清理作用域
    return ()=>{
      ignore = true
      console.log('out' + title);
    }
  }, [title])
  return (
    <div>
      hello chat:{title}
    </div>
  )
}
export default () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true)

  const [title, setTitle] = useState('聊天室1')
  const fn = (e)=>{
    setTitle(e.target.value)
  }
  return <div className="container">
    {show && <Chat title={title}/>}
    <button onClick={()=>{
      setShow(false)
    }}>关闭</button>

    <select value={title} onChange={fn}>
      <option value="聊天室1">聊天室1</option>
      <option value="聊天室2">聊天室2</option>
    </select>
  </div>;
};
