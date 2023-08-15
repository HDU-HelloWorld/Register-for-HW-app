import api from './index'

export const register = (paramList:any)=> {
  try {
    const res = api.post('/register', paramList)
    return res
  } catch (error) {
    console.log(error)
  }
}