// import axios from 'axios'
interface LoginRes {
	errMsg: string
	code: string
}

export const getCode = () => {
	return new Promise((resolve, reject) => {
		uni.login({
			provider: "weixin",
			success: (res) => {

				resolve(res)
			},
			fail: (err) => {
				reject(err)
			},
		})
	})
}

export const loginInit = async (loginRes: LoginRes) => {
	const { errMsg, code } = loginRes
	if (code && ["login:ok"].includes(errMsg)) {
    // console.log(code)
		let openIdRes:any = await getWechatOpenIdByCode({code:code})	
    console.log(openIdRes)
		if (openIdRes.success) {
			let { openId, sessionKey } = openIdRes
			return {
				openId,
				sessionKey,
			}
		}
	}
}

const getWechatOpenIdByCode = async (paramList:Object) => {
  let res = await uni.request({
    url: 'http://66054d80.r3.cpolar.cn/user/verify',
    method: 'POST',
    data: paramList,
    header: {
      'content-type': 'application/json'
    }
  })
  console.log(res.data)
  return res
}
