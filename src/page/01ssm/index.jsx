import React, { useState, useEffect } from 'react';
import { getemployee, delEmp, getEmpByPage, getEmpById, editEmpById,addEmp } from "../../api/ssm"
import { Space, Table, Pagination, Button, Form, Input, Radio } from 'antd';
import './index.less'
export default () => {

  const columns = [
    {
      title: 'empName',
      dataIndex: 'empName',
      key: 'empName',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => _delEmp(record)}>Delete</a>
          <a onClick={() => { _getEmpById(record) }}>Update</a>
        </Space>
      ),
    },
  ];
  const [form] = Form.useForm();

  const _delEmp = (record) => {
    console.log(record)
    delEmp(record.empId)
    setcurrentpage(1)
    getData()
  }
  const _getEmpById = (record) => {
    getEmpById(record.empId).then(d => {
      console.log("D", d)
      // form.setFieldsValue({
      //   empName: '小明2',
      //   age: 22,
      //   gender: '男',
      //   email: 'xiaoming2@163.com'
      // })
      form.setFieldsValue(d)
      setId(d.empId)
    })
  }


  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0)
  const [currentpage, setcurrentpage] = useState(1)
  const[id, setId] = useState(-1)

  const getData = () => {
    getEmpByPage(currentpage, 4).then(d => {
      console.log(d)
      d.list.forEach(e => e.key = e.empId)
      setData(d.list)
      setTotal(d.total)
    })
  }
  useEffect(() => {
    getData()
  }, [])
  const onChange = (page, pageSize) => {
    getEmpByPage(page, pageSize).then(d => {
      d.list.forEach(e => e.key = e.empId)
      setData(d.list)
      setTotal(d.total)
    })
  }

  const [formLayout, setFormLayout] = useState('horizontal');
  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 14,
    },
  }
  const buttonItemLayout = {
    wrapperCol: {
      span: 14,
      offset: 4,
    },
  }
  const onFinish = (values) => {
    console.log('Success:', values);
    if(id == -1) {
      addEmp(values)
    }else {
      editEmpById({...values, empId: id})
    }
    getData()
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='container'>
      <div>员工列表</div>
      <Table
        columns={columns}
        dataSource={data}
        className='table'
        bordered
        pagination={{
          defaultCurrent: 1,
          total: total,
          defaultPageSize: 4,
          onChange,
          currentpage
        }}
      />

      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="empName" name="empName">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="age" name="age">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="gender" name="gender">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="email" name="email">
          <Input placeholder="input placeholder" />
        </Form.Item>

        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>

    </div>
  )
}