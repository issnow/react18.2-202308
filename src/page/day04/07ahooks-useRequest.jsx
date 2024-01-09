import React, {useState} from 'react'
import {useRequest} from 'ahooks'
import {getEmpByPage} from '@/api/ssm.js'
/*
ahooks useRequest使用
 */
async function service(n,m){
  console.log(n, m);
  let d = await  getEmpByPage(1, 4)
  return d.list
}
export default ()=>{

  // const { data, error, loading } = useRequest(service);
  // if(error) {
  //   return <div>err</div>
  // }
  // if(loading) {
  //   return <div>loading</div>
  // }

  const [data, setData] = useState([])
  // 手动调用
  const {run, error, loading, refresh, mutate} = useRequest(service, {
    manual: true,
    onSuccess(res, params){
      console.log(res);
      console.log('params'+ params);
      setData(res)
    }
  })

  //mutate-->修改数据 mutate()

  return (
    <div className='container'>
      <button onClick={()=>run(1,2)}>click</button>
      <button onClick={refresh}>refresh</button>
      <ul>
        {data.map(e=><li key={e.empId}>{e.empName}</li>)}
      </ul>
    </div>
  )
}
