import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index' 
import './custom-variables.scss'
import './app.scss'
import API from './api/http.js'
import { goPage, getOpenId } from './tool/main.js'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  state = {}
  componentDidMount () {
    
  }

  componentDidShow () {
    let carsObj = Taro.getStorageSync('carsObj')
    Taro.setTabBarBadge({ index: 1, text: carsObj['num'].toString() })
  }

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages: [
      'pages/shopDetail/shopDetail',
      'pages/orderDetail/orderDetail',
      'pages/my/my',
      'pages/editAdress/editAdress',
      'pages/orderList/orderList',
      'pages/goodsCar/goodsCar',
      'pages/liquidation/liquidation',
      'pages/index/index',
      'pages/selectAdress/selectAdress'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: "pages/shopDetail/shopDetail",
        text: "商城",
        iconPath: './static/home.png',
        selectedIconPath: './static/homeActive.png'
      },{
        pagePath: "pages/goodsCar/goodsCar",
        text: "购物车",
        iconPath: './static/shopCar.png',
        selectedIconPath: './static/shopCarActive.png'
      },{
        pagePath: "pages/my/my",
        text: "我的",
        iconPath: './static/my.png',
        selectedIconPath: './static/myActive.png'
      }],
      color: "#666",
      selectedColor: "#d81e06",
      backgroundColor: "#fafafa",
      borderStyle: "black",
      networkTimeout: 15000
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
