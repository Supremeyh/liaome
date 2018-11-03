import { HTTP } from '../utils/http.js'

class classicModel extends HTTP {
  getLatest(scb){
    this.request({
      url: 'classic/latest',
      success: (res) => {
        // console.log(res)
        scb(res)
      }

    })
  }
}

export { classicModel }