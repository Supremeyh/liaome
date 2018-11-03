
import { HTTP } from '../../utils/http.js'

let http = new HTTP()

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    http.request({
      url: 'classic/latest',
      success: (res) => {
        console.log(res)
      }

    })

    // wx.request({
    //   method: 'GET',
    //   url: 'http://bl.7yue.pro/v1/classic/latest',
    //   header: {
    //     'content-type': 'application/json',
    //     'appkey': '98HcsgdJ3mx4Ufcm'
    //   },
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: (res) => {
    //     console.log(res)
    //     console.log(this)
    //   }

    // })
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})