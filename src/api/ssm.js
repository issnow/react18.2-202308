import api from "./api"
export const getData1 = ()=>{
  return api.get("/user?id=123")
}

export const getData2 = ()=>{
  return api.post("/user", {
    name: "xiaoming"
  })
}
export const getData3 = ()=>{
  return api.post("/test/ajax", {
    name: "xiaoming"
  })
}
export const getData4 = ()=>{
  return api.post("/test/responseBody/json")
}

// ssm整合
/**
 * 查询所有的员工信息-->/employee-->get
 * 查询员工的分页信息-->/employee/page/1-->get
 * 根据id查询员工信息-->/employee?id=1-->get
 * 跳转到添加页面-->/to/add-->get
 * 添加员工信息-->/employee-->post
 * 修改员工信息-->/employee-->post
 * 删除员工信息-->/employee?id=1-->get
 */
export const getemployee = ()=>{
  return api.get("/employee")
}
// export const insertEmp = ()=>{
//   return api.post("/employee")
// }
export const delEmp = (id)=>{
  return api.get("/del/employee", {
    params: {id}
  })
}

export const getEmpByPage = (pageNumber, pageSize)=>{
  return api.get("/employee/page", {
    params: {
      pageSize,pageNumber
    }
  })
}
export const getEmpById = (id)=>{
  return api.get("/employee/id", {
    params: {
      empId:id
    }
  })
}
export const editEmpById = (obj)=>{
  return api.post("/edit/employee", obj)
}
export const addEmp = (obj)=>{
  return api.post("/addEmpByMap", obj)
}