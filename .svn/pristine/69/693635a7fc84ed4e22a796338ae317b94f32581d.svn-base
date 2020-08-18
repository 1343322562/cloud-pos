import Taro from '@tarojs/taro'


const mutations = {
  // 缓存 openID  
  SAVE_OPEN_ID(param) {

  },

  // 获取购物车
  GET_CARTS(param) {
    const obj = Taro.getStorageSync('carsObj') || { num: 0, keyArr: [] }
    return obj
  },

  // 保存购物车
  SAVE_CARTS(data) {
    Taro.setStorageSync('carsObj', data)
  },
}


export default mutations