import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Input } from '@tarojs/components'
import './liquidation.scss'
import VNavbar from '../../components/navbar/navbar.jsx' // 导航栏
import { AtButton } from "taro-ui"
import { goPage, IS_WEAPP_ENV, loading, toast, pageBack, showModal } from '../../tool/main.js'
import Card from './card/card.jsx'
import API from '../../api/http.js'

// 导入图片
import editAdress from '../../../public/images/edit.png'
import moren from '../../../public/images/moren.png'

export default class Liquidation extends Component {

  state = {
    goodsData: [],  // 结算页商品信息
    storeInfo: {},
    openId: '',
    settlementData: {} // 结算信息
  }

  componentWillMount (e) {
    console.log(e)
    const goodsData = JSON.parse(this.$router.params.liquidationData)
    console.log(564564, goodsData)
    const settlementData = JSON.parse(this.$router.params.settlementData)
    this.state.goodsData = goodsData
    this.state.settlementData = settlementData
    this.state.storeInfo = Taro.getStorageSync('storeInfo')
    this.state.userObj = Taro.getStorageSync('userObj')
    this.state.openId = Taro.getStorageSync('openId')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '订单确认',
    navigationBarBackgroundColor: '#ffaf11'
  }

  // 下单
  placeOrder() {
    loading(0)
    let { goodsData, storeInfo, userObj, openId } = this.state
    let request = {
      uid: 2,            // 商户 id
      sid: storeInfo.id, // 门店 id
      realMoney: 0,      // 实付金额
      payableMoney: 0,   // 应付总金额
      stockMoney: 0,     // 总成本
      paytype: 1,         // 支付方式 1: 货到付款
      deliveryTypeId: 2,  // 配送方式 1: 送上门 2: 自提
      remark: '',         // 订单备注
      vipId: userObj.id,  // 会员 id
      realname: userObj.nickName,  // 联系人
      mobile: '',         // 电话
      address: '',        // 地址
      data: [],           // 商品详情
    }

    console.log(goodsData, storeInfo)
    goodsData.forEach(item => {
      let goodsItem = {
        productId: '',  // 商品 id
        saleNum: '',    // 销售数量
        salePrice: '',  // 销售价格
        stockPrice: '', // 进货价
        payableMoney: '',  // 应付金额
        realMoney: '',  // 实付金额
        remark: '',     // 备注
        productName: '' // 商品名
      }
      goodsItem.productId = item.id
      goodsItem.saleNum = item.saleNum
      goodsItem.salePrice = item.salePrice
      goodsItem.stockPrice = item.stockPrice
      goodsItem.realMoney = item.realMoney || parseFloat(item.salePrice * item.saleNum).toFixed(2)
      goodsItem.payableMoney = item.payableMoney || parseFloat(item.salePrice * item.saleNum).toFixed(2)
      goodsItem.remark = item.remark || ''
      goodsItem.productName = item.productName
      request.data.push(goodsItem)

      request.realMoney += parseFloat(item.salePrice * item.saleNum)
      request.payableMoney += parseFloat(item.payableMoney || (item.salePrice * item.saleNum))
      request.stockMoney += parseFloat(Number(item.stockPrice) * item.saleNum)
    });
    request.realMoney = request.realMoney.toFixed(2)
    request.payableMoney = request.payableMoney.toFixed(2)
    request.stockMoney = request.stockMoney.toFixed(2)
    request.data = JSON.stringify(request.data)

    console.log(request)

    this.saveOnlineOrder(request)
  }

  // 保存订单
  saveOnlineOrder(request) {
    API.Order.saveOnlineOrder({
      data: request
    }).then(res => {
      console.log(res)
      showModal({
        content: res.msg,
        showCancel: false,
        confirm() {
          pageBack()
        }
      })
      if (res.code == 0) Taro.removeStorageSync('carsObj')
    }).catch(res => {
      showModal({
        content: res.msg,
        showCancel: false,
        confirm() {
          pageBack()
          // Taro.removeStorageSync('carsObj')
        }
      })
    })
  }

  render () {
    // 导航栏
    let Navbar = IS_WEAPP_ENV ? null : <VNavbar bg='transparent' text='订单确认' fixed='true' rightFirstIcon={true} />
    // 微信端时的头部背景
    let headerBG = IS_WEAPP_ENV ? 'we-top-bg' : null
    let { goodsData, settlementData } = this.state
    let { storeInfo } = this.state
    return (
      <View className='liquidation'>
        {Navbar}
        {/* 背景 */}
        <View className={'top-bg ' + headerBG} />


        {/* 地址卡片 */}
        {/* <Card 
          adressTitle='北京市北京城区通州区通州区76'
          userName='任利兵'
          userPhone='13855684458'
          onSubGoodNumClick={() => this.onEditClick()}
        /> */}

        {/* 结算卡片 */}
        <View className='pay-res-box'>
          <View className='shop-title'>
            <Image
              mode='aspectFill'
              onClick={e => this.props.onEditClick(e)}
              style='border-radius: 50%;width: 36px;height: 36px;background: #999999;vertical-align: sub;'
              src='https://pic2.zhimg.com/80/v2-0a80487d102fa8f4323279779e7ee940_720w.jpg'
            />
            <Text className='title'>{storeInfo.storeName}</Text>
          </View>
          
          {/* 商品 */}
          {
            goodsData.map((item, index) => {
              return (
                <View className='goods-detail' key={item.id}>
                  <View className='goods-item'>
                    <Image
                      mode='scaleToFill'
                      onClick={e => this.props.onEditClick(e)}
                      style={`width: 75px;height: 75px;vertical-align: sub;background:url(${moren})back;ground-size: 55%;background-position: center;background-repeat: no-repeat;`}
                      src={item.picUrl}
                    />
                    <View className='detail'>
                    <View className='name'>{item.productName}</View>
                      <View className='props'>
                        <Text>￥{item.salePrice}</Text>
                        <Text>x{item.saleNum}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              )
            })
          }
          
          <View className='contact'>共{settlementData['num']}件商品</View>
        </View>

        <View className='pay-way'>
          <Text className='title'>支付方式</Text>
          <Text className='way'>货到付款</Text>
        </View>

        {/* <View className='order-note'>
          <Text className='title'>订单备注</Text>
          <Input 
            className='note' 
            type='text' 
            placeholder='填写安全存放地址,请按门铃等配送相关要求'
          />
        </View> */}

        <View className='order-price'>
          <Text className='info'>全场不限购~~~</Text>
          <Text className='content'>小计: ￥<Text className='all-price'>{settlementData['amt']}</Text></Text>
        </View>

        {/* 总价区域 */}

        <View className='pay-bottom'>
          <View className='price-info'>应付款: <Text className='price'>￥{settlementData['amt']}</Text></View>
          <AtButton className='btn' onClick={() => this.placeOrder()} type='primary'>确认下单</AtButton>
        </View>
      </View>
    )
  }
}
