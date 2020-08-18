import Taro from '@tarojs/taro'
export const toast = function (title, duration = 1500, icon = 'none') {
    Taro.showToast({
        title: title,
        icon: icon,
        duration: duration
    })
}

export const showModal = function (obj) {
  Taro.showModal({
      title: obj.title || '温馨提示',
      content: obj.content,
      showCancel: obj.showCancel || false,
      confirmText: obj.confirmText || '确定',
      cancelText: obj.cancelText || '',
      success(res) {
        if(res.confirm){
          obj.confirm && obj.confirm(res)
        } else if (res.cancel) {
          obj.cancel && obj.cancel(res)
        }
      },
      fail(err) {
        console.log('提示框错误, 错误信息:', err)
      }
  })
}


export const loading = function (isShow, title = '加载中. . .') {
    if(isShow){
        Taro.showLoading({
            title: title,
            mask: true
        })
    } else {
        Taro.hideLoading()
    }
    
}


export const deepCopy = function(obj) {
  return JSON.parse(JSON.stringify(obj))
}

export const pageBack = function (backNum = 1) {
    return Taro.navigateBack({
        delta: backNum
    })
}

export const goPage = function (url) {
  Taro.navigateTo({
      url: url
  })
}

// 保存用户信息
export const saveUserInfo = function (obj) {
  Taro.setStorageSync('userObj', obj)
}

// 设置购物 tabbar 文本
export const setCartsNum = function(num) {
  Taro.setTabBarBadge({
    index: 1,
    text: String(num)
  })
}

// 获取openid
export const getOpenId = function(param) {
  let openId = wx.getStorageSync('openId')
  if (openId) {
    return 0
  } else {
    Taro.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          Taro.request({
            url: 'https://online.mmj.zksr.cn/shop/getOpenId.do',
            data: {
              code: res.code
            },
            success(res) {
              console.log(res)
              if (res.code == -1) return console.log('获取 openid 失败')
              param.success(res)
              openId = res.data.data
              Taro.setStorageSync('openId', openId)
            },
            complete(res){
              console.log(res)
            }
          })
        } else {
          openId = 0
          console.log('获取商城信息失败！' + res.errMsg)
        }
      }
    })
  }
  return openId
}



// 判断当前环境
export const IS_WEAPP_ENV = process.env.TARO_ENV == 'weapp' 
export const IS_H5_ENV = process.env.TARO_ENV == 'h5'