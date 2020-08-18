import Taro, { Component } from '@tarojs/taro'
import { View, Input, Image, Text } from '@tarojs/components'
import './goodsCar.scss'
import VNavbar from '../../components/navbar/navbar.jsx' // 导航栏
import GoodsCarItem from '../../components/goodsCarItem/goodsCarItem.jsx' // 商品列表 Item
import { goPage, IS_WEAPP_ENV, showModal, toast } from '../../tool/main.js'
import dispatch from '../../store/action.js'
import { AtList, AtListItem, AtIcon, AtButton } from "taro-ui"
// 导入图片
import scanCode from '../../../public/images/scanCode.png'
import adress from '../../../public/images/adress.png'
import asd from '../../../public/images/asd.jpg'
import addIcon from '../../../public/images/addIcon.png'
import subIcon from '../../../public/images/subIcon.png'
import selectedGood from '../../../public/images/selectedGood.png'
import allSelectDefalut from '../../../public/images/allSelectDefalut.png'
import deleteGood from '../../../public/images/deleteGood.png'
import moren from '../../../public/images/moren.png'

export default class Goodscar extends Component {

  state = {
    allSelect: true,   // 商品全选
    goodsData: [],     // 商品信息
    storeInfo: {},     // 门店信息
    settlementData: { goodsType: 0, amt: 0, num: 0 }  // 结算信息
  }

  componentWillMount() {
    this.state.storeInfo = Taro.getStorageSync('storeInfo')
    console.log(1)
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() {
    console.log(2) 
    this.getCarsData()
  }

  componentDidHide() { }

  config = {
    navigationBarTitleText: '购物车',
    navigationBarBackgroundColor: '#ffaf11'
  }
  // 获取购物车信息
  getCarsData() {
    const carsObj = Taro.getStorageSync('carsObj')
    // if (!carsObj) return 
    let goodsData = []
    for(let key in carsObj) {
      if (key == 'num' || key == 'keyArr') continue
      carsObj[key].selectd = 1
      goodsData.unshift(carsObj[key])
    }
    this.setState({ goodsData })
    this.settlementHandle(goodsData)
  }

  // 结算区域计算
  settlementHandle(goodsData = this.state.goodsData) {
    let settlementData = { goodsType: 0, amt: 0, num: 0 }
    goodsData.forEach(item => {
      if (item.selectd == 0) return
      settlementData['goodsType'] += 1
      settlementData['amt'] += parseFloat(item.salePrice) * parseInt(item.saleNum)
      settlementData['num'] += parseInt(item.saleNum)
    })
    settlementData['amt'] = settlementData['amt'].toFixed(2)
    this.setState({ settlementData })
  }

  // 跳转至结算页面
  toLiquidationClick(num) {
    let userObj = Taro.getStorageSync('userObj')
    if (!userObj) {
      return showModal({
        content: '请先登录授权',
        showCancel: false,
        confirmText: '去授权',
        confirm() {
          Taro.switchTab({url: '../my/my'})
        }
      })
    } 
    if (num == 0) return toast('请选择需要购买的商品')
    let liquidationData = []
    let { goodsData, settlementData } = this.state
    goodsData.forEach(item => {
      if (item.selectd == 1) liquidationData.push(item) 
    })
    liquidationData = JSON.stringify(liquidationData)
    settlementData = JSON.stringify(settlementData)
    goPage(`../liquidation/liquidation?liquidationData=${liquidationData}&settlementData=${settlementData}`)
  }


  // 点击改变商品数量
  onChangeGoodNumClick (e, obj) {
    console.log(e, obj)
    const { type, index } = obj,
          _this = this
    let goodsData = this.state.goodsData,
        item = goodsData[index]
    console.log(item)
    switch (type) {
      case 'add':
        if (!('saleNum' in item)) item.saleNum = 0
        item.saleNum++
        // 改变商品数量, 并保存购物车
        dispatch.CHANGE_CARTS(item, type)
        break;
      case 'sub':
        if (item.saleNum == 1) {
          showModal({
            content: '确认删除此商品?',
            confirm() {
              item.saleNum--
              dispatch.CHANGE_CARTS(item, type)
              goodsData.splice(index, 1) 
              _this.state.goodsData = goodsData
              _this.setState({ goodsData })
              _this.settlementHandle()
            }
          })
        } else {
          item.saleNum--
          // 改变商品数量, 并保存购物车
          dispatch.CHANGE_CARTS(item, type)
        }
        break;
    }
    console.log(94, item)


    this.state.goodsData[index] = item
    this.setState({ [`goodsData[${index}]`]: item })

    this.settlementHandle()
  }

  // 全选
  selectAll() {
    let { allSelect, goodsData } = this.state
    switch(allSelect) {
      case true:
        goodsData.forEach(item => {
          item.selectd = 0
        })
        break;
      case false:
        goodsData.forEach(item => {
          item.selectd = 1
        })
        break;
        
    }
    this.settlementHandle(goodsData)
    this.setState({ allSelect: !allSelect, goodsData })
  }

  // 获取 头部地址卡片区域
  getGoodCarAdressCard () {
    let { storeInfo } = this.state  
    return (
      <View className='car-edit-adress-box'>
          {/* <View className='car-sign'>
            <Image src={scanCode} style='height:20px;width:20px;' />
            <View className='edit'>编辑</View>
          </View> */}
          <AtList className='car-adress-card'>
            <AtListItem
              title={`${storeInfo.provinceName}${storeInfo.cityName}${storeInfo.areaName} ${storeInfo.contactAddr}`}
              arrow='right'
              thumb={adress}
            />
          </AtList>
      </View>
    )
  } 

  // 删除商品
  deleteGoods() {
    let _this = this
    let { goodsData } = this.state
    let itemId = []
    let isDelete = false
    goodsData.forEach(item => {
      if (item.selectd) {
        isDelete = true
        itemId.push(item.id)
      }
    })
    if (!isDelete) return toast('请选择需要删除的商品')
    showModal({
      content: '确认删除？',
      confirm() {
        itemId.forEach(id => {
          dispatch.CHANGE_CARTS('' , 'delete', id) // 删除对应id的商品
          _this.getCarsData()
        })
      }
    })

  }

  // 选择商品
  selectdGood(e, index) {
    const goodsData = this.state.goodsData
    goodsData[index].selectd == 1 ? goodsData[index].selectd = 0 : goodsData[index].selectd = 1
    this.settlementHandle(goodsData)
    if (goodsData[index].selectd == 0) {
      this.setState({ goodsData, allSelect: false })
    } else {
      this.setState({ goodsData })
    }
  }

  // 获取 结算区域
  getGoodCarResCard () {
    const { allSelect, settlementData } = this.state
    return (
      <View className='res-info-box'>
        <View className='res-info'>
          <View className='selected-all' onClick={() => this.selectAll()}>
            {/* <AtIcon className= {allSelect ? 'none' : 'checkout-all'}  value='check-circle' size='26' color='#ddd'/> */}
            <Image
              src={allSelect ? selectedGood : allSelectDefalut}
              style={allSelect ? 'height: 22px;width: 22px;border-radius: 50%;' :'height: 25px;width: 25px;'}
            />
            <Text style='white-space: nowrap;'>全选</Text>
          </View>
          <View className='price-info'>
            <View className='after'>合计: <Text className='span'>￥{settlementData.amt}</Text></View>
            {/* <View className='before'>总额: <Text className='span'>￥21.90</Text></View> */}
          </View>
        </View>
        <AtButton className='res-btn' type='primary' onClick={() => this.toLiquidationClick(settlementData.num)}>结算({settlementData.num})</AtButton>
        <Image onClick={() => this.deleteGoods()} className='goods-delete' src={deleteGood} />
      </View>
    )
  } 

  render() {
    // 导航栏
    let Navbar = IS_WEAPP_ENV ? null : <VNavbar bg='transparent' text='购物车' leftIcon={true} rightFirstIcon={true} />
    // 头部背景
    let headerBG = IS_WEAPP_ENV ? 'we-bg' : 'h5-bg'
    // 头部地址卡片区域
    let GoodCarAdressCard = this.getGoodCarAdressCard()
    // 结算区域
    let GoodCarResCard = this.getGoodCarResCard()
    let goodsData = this.state.goodsData
    console.log(141,goodsData)
    return (
      <View className='goodsCar'>
        {/* 背景和导航栏 */}
        <View className= { 'car-top-bg ' + headerBG } />
        {Navbar}

        {/* 商户卡片 */}
        {GoodCarAdressCard}

        <View className='goods-car-detail-box'>
           {/* 商品列表 */}
          <GoodsCarItem
            goodsData={goodsData}
            onChangeGoodNumClick={(e, obj) => this.onChangeGoodNumClick(e, obj)}
            selectdGood={(e, index) => this.selectdGood(e, index)}
          />
          {/* 结算区域 */}
          {GoodCarResCard}
        </View>

      </View>
    )
  }
}
