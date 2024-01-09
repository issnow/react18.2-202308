import React, {useState} from 'react'
/*
1.通过props控制的组件-->受控组件
2.通过state控制的组件-->非受控组件
react表单内置受控组件的行为
value + onchange
checked + onchange
 */
export default ()=>{
  const [value, setValue] = useState('')
  const handleChange=(e)=>{
    setValue(e.target.value)
  }

  const [checked, setChecked] = useState(false)
  const fn = (e)=>{
    setChecked(e.target.checked)
  }

  return (
    <div className='container'>
      <input type="text" value={value} onChange={handleChange}/>
      <input type="checkbox" checked={checked} onChange={fn}/>
    </div>
  )
}

