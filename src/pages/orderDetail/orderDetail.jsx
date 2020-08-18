import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './orderDetail.scss'
import { AtList, AtListItem, AtSearchBar } from 'taro-ui' // 搜索框

import VNavbar from '../../components/navbar/navbar.jsx' // 导航栏
import HeaderBG from '../../components/headerBG/headerBG.jsx'
import Orderlistcard from '../../components/orderlistcard/orderlistcard.jsx' // 订单卡片(信息)
import { IS_H5_ENV, IS_WEAPP_ENV } from '../../tool/main.js'
import API from '../../api/http.js'

import moren from '../../../public/images/moren.png'

export default class Orderdetail extends Component {
  state = {
    orderData: {},
    itemData: {},
    storeInfo: {},
    topBoinding: '' // 胶囊距离顶部位置
  }
  static options = {
    addGlobalClass: true
  }

  componentWillMount (e) {
    let data = JSON.parse(this.$router.params.data)
    let storeInfo = Taro.getStorageSync("storeInfo")
    console.log(data)
    let topBoinding
    if (IS_WEAPP_ENV) { // 微信端 胶囊距离顶部位置
      topBoinding = Taro.getMenuButtonBoundingClientRect().top 
    }  
    console.log(topBoinding)
    this.setState({ topBoinding, itemData: data, storeInfo })
    this.getOrderDetailData(data.id)
  }

  getOrderDetailData(srlId) {
    const { uid } = Taro.getStorageSync('storeInfo')
    const _this = this
    API.Order.searchOnlineOrderDetail({
      data: { srlId, uid}
    }).then(res => {
      console.log(res)
      _this.setState({ orderData: res.data })
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '订单详情',
    navigationBarBackgroundColor: '#fec10d'
  }

  render () {
    const { orderData, itemData, storeInfo } = this.state
    console.log(orderData)
    console.log(IS_H5_ENV)
    // const Navbar = IS_H5_ENV ? <VNavbar color='#333333' isShowCustomtTitle='flex' fixed={true} />: <VNavbar color='#333333' top={this.state.topBoinding} rightFirstIconType={false} text="订单详情" fixed={false} />
    return (
      <View className='orderDetail'>
        {/* <View style='height: 90px;width: 100%;' /> */}
        {/* {Navbar} */}

        {/* 订单信息区域 */}
        {/* <AtSearchBar
          actionName='搜一下'
          placeholder='请输入订单号'
          value={this.state.value}
          onClear={() => this.onClear()}
          onChange={val => this.onChange(val)}
          onActionClick={encodeURIComponent => this.onActionClick(encodeURIComponent)}
        /> */}
        <Orderlistcard orderInfo={this.state.orderInfo} isShowBottom='none' />
        <AtList className='order-info-list'>
          <AtListItem
            title={`订单状态: ${itemData.statusStr}`}
            extraText={'货到付款'}
          />
          <AtListItem
            title={storeInfo.storeName}
            extraText={storeInfo.contactPhone}
          />
        </AtList>

        <View className='info-box'>
          <View className='title'>付款信息</View>
          <AtList className='order-info-list payment amt'>
            {/* <AtListItem title={'成本合计'} extraText={'￥' + Number(itemData.stockMoney).toFixed(2)} /> */}
            <AtListItem title={'应付金额'} extraText={'￥' + Number(itemData.payableMoney).toFixed(2)} />
            <AtListItem title={'实付金额'} extraText={'￥' + Number(itemData.realMoney).toFixed(2)} />
          </AtList>
        </View>

        <View className='info-box'>
          <View className='title'>商品详情</View>
          {
            orderData.length && orderData.map((item, index) => {
              return (
                <View key={item.productId} className='goods-box'>
                  <Image 
                    className='goods-img' 
                    mode='scaleToFill'
                    src={item.picDomain + item.picUrl}
                    onClick={e => this.props.onEditClick(e)}
                    style={`background:url(${moren});background-size: 55%;background-position: center;background-repeat: no-repeat;`}
                    // src='https://pic2.zhimg.com/80/v2-0a80487d102fa8f4323279779e7ee940_720w.jpg'
                  />
                  {/* 组件在小程序中的层级不一样，需要套一个view */}
                  <View style='flex: 1;'>
                    <AtList className='order-info-list payment good' style='width: 80%;'>
                      <AtListItem title={item.productName}  />
                      <AtListItem title={`配送数量: ${item.salePrice}`}  extraText={`单价: ￥${item.saleNum}`}/>
                      <AtListItem title={`应付金额: ￥${item.payableMoney}`} extraText={`实付金额: ￥${item.realMoney}`} />
                    </AtList>
                  </View>
                  
                </View>
              )
            })
          }
          
        </View>
      </View>
    )
  }
}
