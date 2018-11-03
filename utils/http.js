import { config } from '../config.js'

const tips = {
  0: '成功',
  1: '出现了一个错误',
  1000: '输入参数错误',
  1005: '不正确的开发者key'
}

class HTTP{
  request(params){
    if(!params.method) {
      params.method = 'GET'
    }
    wx.request({
      url: config.baseUrl + params.url,
      method: params.method,
      data: params.data,
      header: {
        'content-type': 'application/json',
        'appkey': '98HcsgdJ3mx4Ufcm'
      },
      success: (res) => {
        let code = res.statusCode.toString()
        console.log(res.data)
        if (code.startsWith('2')) {
          params.success && params.success(res)
        } else{
          let error_code  = res.data.error_code
          this._show_error(error_code)
        }
      },
      fail: (err) => {
        this._show_error(1)
      }
    })      
  }

  _show_error(error_code){
    if (!error_code){
      error_code = 1
    }

    wx.showToast({
      title: tips[error_code],
      icon: 'none',
      duration: 3000,
      mask: false
    })

  }
}


export { HTTP }