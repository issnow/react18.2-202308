import React, {useCallback, useEffect, useRef, useState} from 'react';
/*
在useEffect中定义函数
函数可以成为计算变量,也需要作为依赖
虽然可以使用useCallback解决,但是非常不方便,最好的办法是把函数定义在useEffect内部
 */
export default () => {
  const [count, setCount] = useState(0);
  // let foo = () => {
  //   console.log(count);
  // };
  // foo=useCallback(foo, [count])
  // useEffect(() => {
  //   foo();
  // }, [foo]); //Object.is()

  useEffect(() => {
    const fn2 = ()=>{
      console.log(count);
    }
    fn2()
  }, [count]);

  return <div className="container">
    13
  </div>;
};
