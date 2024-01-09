import React, {lazy, Suspense} from 'react'
// import App09 from './09flushSync'
/*
  lazy懒加载
 */
const App = lazy(() => import('./09flushSync'))
export default () => {
  return (
    <div className='container'>
      <Suspense fallback={<div>loading...</div>}>
        <App/>
      </Suspense>
    </div>
  )
}
