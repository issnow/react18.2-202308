import React, {useState} from 'react'
import {useRequest} from 'ahooks'
import {getEmpByPage} from '@/api/ssm.js'
/*
ahooks 高级用法
 */
async function service(n,m){
  console.log(n, m);
  let d = await  getEmpByPage(1, 4)
  return d.list
}
export default ()=>{

  const [data, setData] = useState([])
  // 手动调用
  const {run, error, loading, refresh, mutate} = useRequest(service, {
    manual: true,
    onSuccess(res, params){
      console.log(res);
      console.log('params'+ params);
      setData(res)
    },
    // pollingInterval: 3000,
    loadingDelay: 300,//.3s内不会显示loading
    refreshOnWindowFocus: true
  })

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
