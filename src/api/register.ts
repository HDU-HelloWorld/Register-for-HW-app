import api from './index'

export const register = async (paramList:any)=> {
  try {
    const res = await api.post('/register', paramList)
    console.log(res)
    return res
  } catch (error) {
    console.log(error)
  }
}