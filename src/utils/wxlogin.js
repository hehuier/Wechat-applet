import wepy from 'wepy'
import { api } from '../config'
import request from './request'

const wxlogin = {
  getUserInfo () {
    wepy.getUserInfo({
      success: function(res) {
        return res.userInfo
      }
    })
  },
  wxLogin (callback, success) {
    wepy.login({
      success: function(res) {
        if (res.code) {
          callback && callback(res.code, success)
        } else {
          wepy.showModal({
            title: '提示',
            content: `授权失败。${res.errMsg}`
          })
        }
      }
    })
  },
  weLogin (jscode, success) {
    request({
      url: api.login.url + '&jscode=' + jscode,
      method: api.login.method,
      success: function (res) {
        if (res.data.statusCode == 0) {
          // 登录成功
          wepy.setStorage({
            key: 'ukey',
            data: res.data.data
          })
          success && success()
        } else {
          // 登录失败
          wepy.showModal({
            title: '提示',
            content: `登录失败，${res.data}`
          })
        }
      }
    })
  },
  login (success) {
    let callback = this.weLogin
    this.wxLogin(callback, success)
  }
}

export default wxlogin