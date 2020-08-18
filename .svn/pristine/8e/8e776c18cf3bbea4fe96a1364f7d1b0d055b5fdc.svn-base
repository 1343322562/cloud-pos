import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './orderList.scss'
import VNavbar from '../../components/navbar/navbar.jsx' // 导航栏
import Orderlistcard from '../../components/orderlistcard/orderlistcard.jsx' // 订单卡片(信息)
import { AtSearchBar } from 'taro-ui' // 搜索框
import mockData from './mockData.js'  // mock 数据
import API from '../../api/http.js'
import { IS_H5_ENV, goPage } from '../../tool/main.js'

export default class Orderlist extends Component {
  constructor(props) {
    super(props)
    console.log(props, this)
  }
  state = {
    value: '', // 搜索框
    orderData: [],
    openId: '',
    storeInfo: {},
    seachData: [],
    seachValue: ''
  }

  componentWillMount () { 
    this.state.openId = Taro.getStorageSync('openId')
    this.state.storeInfo = Taro.getStorageSync('storeInfo')
    this.getOrderData()
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '全部订单',
    navigationBarBackgroundColor	: '#fec20c',
  }
  
  static options = {
    addGlobalClass: true
  }

  // 获取订单数据
  getOrderData() {
    const _this = this
    const { openId, storeInfo } = this.state
    const userObj = Taro.getStorageSync('userObj')
    const request = {
      srl: '',  //流水号
      id: '',   // id
      vipId: '', // 会员id
      uid: 2,   // 商户 id
      sid: '',   // 门店id
      uuId: '',  //uuid
      orderStatus: ''
    }
    request.openId = openId
    request.sid = storeInfo.id
    request.vipId = userObj.id
    console.log('请求订单参数', request)
    
    API.Order.searchOnlineOrder({
      data: request
    }).then(res => {
      console.log(res)
      let orderData = res.data
      orderData.forEach(item => {
        let statusStr
        switch (item.orderStatus) {
          case 1:
            item.statusStr = '待发货'
            break;
          case 2:
            item.statusStr = '已发货'
            break;
          case 3:
            item.statusStr = '已收货'
            break;
          case 4:
            item.statusStr = '已完成'
            break;
          case -1:
            item.statusStr = '退单中'
            break;
          case -2:
            item.statusStr = '已退货'
            break;
        }
      })
      _this.setState({ orderData })
    })
  }

  // 搜索框数据绑定
  onChange (val) {
    this.state.seachValue = val
    if(!val) this.setState({ seachData: '' })
  }

  // 点击搜索
  onActionClick (e) {
    let seachData = []
    const { orderData } = this.state
    orderData.map(item => {
      if (item['srl'] == this.state.seachValue) {
        seachData.push(item)
      }
    })
    this.setState({ orderData: seachData })
  }

  // 清除搜索内容
  onClear() {
    this.getOrderData()
    this.state.seachValue = ''
    this.setState({ seachValue: '', seachData: '' })
  }

  toOrderDetail(e, item) {
    const data = JSON.stringify(item)
    goPage('../orderDetail/orderDetail?data='+data)
  }

  renderOrderList() {
    let { orderData } = this.state
    return (
      <View style='padding-bottom: 150rpx;'>
        {
          orderData.map((item, index) => {
            return (
              <View key={index} className='orderListCard' onClick={e => this.toOrderDetail(e, item)}>
                <View className='order-line order-top'>
                  <Text className='orderNo'>
                    <Text className='sign' />
                    <Text className='text'>订单号: {item.srl}</Text>
                  </Text>
                  <View className='orderDate'>
                    <View className='dateInfo'>{item.orderTime.slice(0, 10)}</View>
                    <View className='dateInfo'>{item.orderTime.slice(11, 19)}</View>
                  </View>
                </View>
                <View style={`display: ${this.props.isShowBottom || 'flex'};`} className='order-line order-bottom'>
                  <Text className='orderState orderPayInfo'>{item.statusStr}</Text>
                  <Text>{'共' + item.orderQty + '件商品'}</Text>
                  <Text className='orderPrice orderPayInfo'>￥{item.realMoney}</Text>
                </View>
              </View>
            )
            
          })
        }
      </View>
    )
  }

  render () {
    let openNavbarClass = IS_H5_ENV ? 'fixed-height' : 'custom'
    const Navbar = IS_H5_ENV ? <VNavbar color='#333333' text='全部订单' fixed={true}/> : null
    let orderList = this.renderOrderList()
    let seachData = this.state.seachData
    // if (seachData) {
    //   orderList = seachData.map((item, index) => {
    //     return <Orderlistcard key={index} orderInfo={item} />
    //   })
    // } else {
    //   orderList = mockData.map((item, index) => {
    //     return <Orderlistcard key={index} orderInfo={item} />
    //   })
    // } 
    return (
      <View className='orderList'>
        { Navbar }
        <AtSearchBar
          className={openNavbarClass}
          actionName='搜一下'
          placeholder='请输入订单号'
          value={this.state.seachValue}
          onClear={() => this.onClear()}
          onChange={val => this.onChange(val)}
          onActionClick={encodeURIComponent => this.onActionClick(encodeURIComponent)}
        />
        {orderList}
      </View>
    )
  }
}
