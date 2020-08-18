import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './my.scss'
import VNavbar from '../../components/navbar/navbar.jsx'
import { goPage, IS_H5_ENV, saveUserInfo, toast, getOpenId } from '../../tool/main.js'
import MyCards from '../../components/myCards/myCards.jsx'
import HeaderBG from '../../components/headerBG/headerBG.jsx'
import API from '../../api/http.js'
import { timCurrentDay } from '../../tool/date-format.js'
import { AtTag } from 'taro-ui'

// 导入图片
import scanCode from '../../../public/images/scanCode.png'

export default class My extends Component {
  state = { 
    userInfo: {}, // 用户信息
    openId: ''
  }
  static defaultProps = {
    isEnable: true
  }

  componentWillMount() { 
    const userInfo = Taro.getStorageSync('userObj')
    this.state.userInfo = userInfo
    this.setState({ userInfo })
    this.state.openId = Taro.getStorageSync('openId')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  config = {
    navigationBarTitleText: '我的',
    navigationBarBackgroundColor: '#fec10d',
  }

  // 获取用户信息并保存
  getUserInfo(e) {
    console.log(e)
    if (!e.currentTarget.userInfo) return 
    const userInfo = e.currentTarget.userInfo
    const { nickName, avatarUrl } = userInfo
    const storeInfo = Taro.getStorageSync('storeInfo')
    const { openId } = this.state
    // 保存用户信息请求
    API.Users.saveMember({
      data: { 
              openid: openId,
              userPhone: '', 
              userPic: avatarUrl, 
              nickName, 
              nowStoreId: storeInfo.uid || 2
            }
    }).then(res => {
      console.log(res)
      saveUserInfo(res.data)
      // 缓存用户信息
      toast('授权成功')
    }) 
    this.setState({ userInfo })

  }

  // 我的订单 Item Click
  onOrderItemsClick (i) {
    console.log(i)
    // goPage('')
  }

  // 列表 Click
  onListItemsClick(e){
    console.log(e)
    // goPage('') 
  }

  // 扫码
  onScanCodeClick () {
    console.log('调用扫码')
  }

  // 跳转订单页
  onAllorderClick () {
    goPage('../orderList/orderList')
  }

  render() {
    let headerBG = IS_H5_ENV ? 'h5-top-bg' : 'we-top-bg' 
    let Navbar = IS_H5_ENV ? <VNavbar bg='transparent' leftIcon='false' rightFirstIcon='false' text='我的' color='#333333' rightFirstClick={() => false} /> : null
    const { userInfo } = this.state
    console.log(userInfo)
    return (
      <View className='my'>
        {/* 导航栏背景 */}
        <HeaderBG />
        {/* 导航栏 */}
        {Navbar}
        {/* 卡片区域 */}
        <MyCards 
        // 头部卡片配置
          leftImgSize='large'
          leftImgUrl={userInfo.userPic || userInfo.avatarUrl}  
          title={userInfo.nickName || ''}  
          infoType={userInfo.nickName ? 'Tag' : ''}
          infoContent={userInfo.nickName ? '普通会员' : ''}
          rightImgUrl={''}
          rightImgStyle='width: 20px;height: 20px;background: #fff;'
          onRightImgClick={() => this.onScanCodeClick()}

        // 我的订单，底部卡片事件配置
          onListItemsClick={e => this.onListItemsClick(e)} 
          onOrderItemsClick={i => this.onOrderItemsClick(i)}
          onAllorderClick={() => this.onAllorderClick() }

        // 用户授权
          onGetUserInfoClick={e => this.getUserInfo(e)}
        />
      </View>
    )
  }
}