import React from 'react';
import { createRoot } from 'react-dom/client';
import "./app.less"
// import App from './App';
import 'antd/dist/reset.css';
// console.log('NODE_ENV', process.env.NODE_ENV)
// console.log('BASE_ENV', process.env.BASE_ENV)

// import Page from "./page/day04/12Profiler和ReactDevTools.jsx"
import Page from "./page/01ssm/index"


const root = document.getElementById('root');

createRoot(root).render(
  <React.StrictMode>
    <Page />
    {/*<div >*/}
    {/*  123123*/}
    {/*</div>*/}
  </React.StrictMode>
)
