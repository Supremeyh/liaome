import { HTTP } from '../utils/http.js'

class ClassicModel extends HTTP {
  getLatest(scb){
    this.request({
      url: 'classic/latest',
      success: (res) => {
        scb(res)
      }

    })
  }
}

export { ClassicModel }