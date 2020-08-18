import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Input } from '@tarojs/components'
import './shopDetail.scss'
import { goPage, IS_WEAPP_ENV, toast, loading, getOpenId } from '../../tool/main.js'
import HeaderBG from '../../components/headerBG/headerBG.jsx' // top 背景
import { AtSearchBar, AtTag, AtIcon } from 'taro-ui'
import API from '../../api/http.js'
import CardView from '../../components/cardView/cardView.jsx' // 卡片视图
import dispatch from '../../store/action.js' 

import phoneIcon from '../../../public/images/phone.png'
import addIcon from '../../../public/images/addIcon.png'
import subIcon from '../../../public/images/subIcon.png'
import moren from '../../../public/images/moren.png'
import notInfo from '../../../public/images/notInfo.png'
import storeMR from '../../../public/images/storeMR.jpg'

export default class ShopDetail extends Component {
  state = {
    topBoinding: '',// 微信端 胶囊距离顶部位置
    clsOneIndex: 0, // cls1 下标 
    clsTwoIndex: 0, // cls2 下标
    currentClsId: '', // 当前 cls 下标
    goodsData: [],
    clsData: [],
    carsObj: {},
    openId: '',
    storeInfo: ''   // 当前门店信息
  }

  componentWillMount() {
    loading(1)
    console.log(33,this)
    console.log(34,getApp())
    let topBoinding
    if (IS_WEAPP_ENV) topBoinding = Taro.getMenuButtonBoundingClientRect().top // 微信端 胶囊距离顶部位置
    this.state.topBoinding = topBoinding
    this.state.storeInfo = Taro.getStorageSync('storeInfo')
    // this.state.openId = Taro.getStorageSync('openId')
  }

  componentDidMount() { 
    console.log(33,this)
    const _this = this
    const uid = this.$router.params.uid
    console.log('params 中的 uid', uid)
    console.log(Taro.getSystemInfoSync())
    
    this.searchStore(uid) // 查询并保存门店
    // 获取 openid 保存
    getOpenId({
      success(res) {
        console.log(res)
        const userObj = Taro.getStorageSync('userObj')
        if (!userObj) _this.getUserInfo(res.data.data)
      }
    })
   }

  componentWillUnmount() { }

  componentDidShow() {
    this.getClsData()
  }

  componentDidHide() { }

  config = {
    navigationBarTitleText: '首页',
    navigationBarBackgroundColor: '#fec10d',
    navigationStyle: 'custom'
  }
  
  getUserInfo(openId) {
    const _this = this
    let storeInfo = Taro.getStorageSync('storeInfo')
    API.Users.saveMember({
      data: { 
        openid: openId,
        nowStoreId: storeInfo.uid || 2
      }
    }).then(res => {
      const userObj = res.data
      Taro.setStorageSync('userObj', userObj)
    })
  }
  
  // 获取并缓存门店信息
  searchStore(uid = 2) {
    const _this = this
    API.Store.searchStore({
      data: { id: uid || 2 }
    }).then(res => {
      console.log(73,res)
      if (!res.data) return toast('查询门店信息失败')
      Taro.setStorageSync('storeInfo', res.data)
      _this.setState({ storeInfo: res.data })
    }).catch(err => {
      if (err) {
        toast('查询门店信息失败')
      }
    })
  }

  getGoodsData(clsId = this.state.currentClsId, type) {
    const { storeInfo, openId } = this.state
    const carsObj = Taro.getStorageSync('carsObj')
    console.log('s', carsObj, this.state)
    if (clsId == this.state.currentClsId && type == 'click') return
    API.Goods.searchOnlineProduct({
      data: { id: '', uid: storeInfo.uid, cid: clsId, condition: '' }
    }).then(res => {
      console.log(67, res, carsObj)
      let goodsData = res.data
      goodsData.forEach(item => {
        if (carsObj[item.id]) {
          console.log(321)
          item.saleNum = carsObj[item.id].saleNum
          // item.salePrice = item.salePrice.toFixed(2)
        }
      })
      this.setState({ goodsData })
    })
  }

  // 获取商品类别
  getClsData() {
    const { uid } = Taro.getStorageSync('storeInfo')
    console.log('这是 uid', uid)
    const _this = this
    if (!uid) return setTimeout(() => _this.getClsData(), 500)
    console.log(1.03,uid)
    API.Store.searchProductCls({
      data: { uid }
    }).then(res => {
      console.log('请求类别', res)
      let data = res.data
      let temp = []
      data.forEach((item, index) => {
        if (item.pid == 0) {
          temp.push(item)
        }
      })
      temp.forEach(item => {
        item.cls2 = []
        data.forEach(t => {
          if (item.id == t.pid) {
            item.cls2.push(t)
          }
        })
      })
      console.log(temp)
      const oneIndex = _this.state.clsOneIndex || 0
      const twoInddex = _this.state.clsTwoIndex || 0
      const currentClsId = temp[oneIndex].cls2[twoInddex].id
      _this.setState({ clsData: temp, currentClsId }) 
      _this.getGoodsData(currentClsId)
    })
    // let data = [{"id":3,"pid":0,"uid":2,"clsName":"默认"},{"id":4,"pid":3,"uid":2,"clsName":"其它"},{"id":44,"pid":0,"uid":2,"clsName":"酒水饮料"},{"id":46,"pid":0,"uid":2,"clsName":"休闲食品"},{"id":47,"pid":0,"uid":2,"clsName":"熟食"},{"id":48,"pid":0,"uid":2,"clsName":"粮油调料"},{"id":49,"pid":48,"uid":2,"clsName":"调料"},{"id":50,"pid":48,"uid":2,"clsName":"其它"},{"id":64,"pid":46,"uid":2,"clsName":"方便面"},{"id":7632,"pid":44,"uid":2,"clsName":"其它"},{"id":28831,"pid":3,"uid":2,"clsName":"冲剂"},{"id":28832,"pid":3,"uid":2,"clsName":"豆制品"},{"id":67485,"pid":46,"uid":2,"clsName":"301冲调食品"},{"id":87642,"pid":47,"uid":2,"clsName":"其它"},{"id":94533,"pid":0,"uid":2,"clsName":"实时称重"},{"id":94534,"pid":94533,"uid":2,"clsName":"菜"}]
    // let temp = []
    // data.forEach((item, index) => {
    //   if (item.pid == 0) {
    //     temp.push(item)
    //   }
    // })
    // temp.forEach(item => {
    //   item.cls2 = []
    //   data.forEach(t => {
    //     if (item.id == t.pid) {
    //       item.cls2.push(t)
    //     }
    //   })
    // })
    // console.log(86,temp)
    // this.setState({ clsData: temp })
  }

  // 则边栏 items 选中效果更新
  onClsOneClick(i) {
    console.log(108,i)
    const { clsData } = this.state
    // const clsId = clsData[i].cls2.length == 0 ? clsData[i].id : clsData[i].cls2[0].id 
    const clsId = clsData[i].cls2[0].id
    console.log(clsId)
    this.setState({ clsOneIndex: i, clsTwoIndex: 0, currentClsId: clsId})
    this.getGoodsData(clsId, 'click')
  }
  onClsTwoClick(i, clsId) {
    console.log(113, i, clsId)
    this.setState({ clsTwoIndex: i, currentClsId: clsId })
    this.getGoodsData(clsId, 'click')
  }

  // 商品 tag 分类
  // onGoodTagClick(e) {
  //   let goodsData = this.state.goodsData
  //   let index = this.state.sliderItemsIndex

  //   
  // }

  // 点击改变商品数量
  onChangeGoodNumClick (e, obj) {
    console.log(e, obj)
    const { type, index } = obj,
          item = this.state.goodsData[index]
    console.log(item)
    switch (type) {
      case 'add':
        if (!('saleNum' in item)) item.saleNum = 0
        item.saleNum++
        // 改变商品数量, 并保存购物车
        dispatch.CHANGE_CARTS(this.state.goodsData[index], type)
        break;
      case 'sub':
        if (!item.saleNum) return item.saleNum = 0
        item.saleNum--
        console.log(193,!'saleNum' in item || item.saleNum == 0, type, item.saleNum)
        // 改变商品数量, 并保存购物车
        dispatch.CHANGE_CARTS(this.state.goodsData[index], type)
        break;
    }
    console.log(94, item)
    this.setState({ [`goodsData[${index}]`]: item })
  } 

  // 点击复制商家电话号码
  onCallShopClick (number) {
    Taro.makePhoneCall({
      phoneNumber: number  // contactPhone
    })
  }

  // 渲染侧边栏
  renderSliderItemsSelected() {
    let { clsOneIndex, clsTwoIndex, clsData } = this.state
    console.log(161,clsData)
    let sliderList = clsData.map((item, index) => {
      return (
        <View>
          <View 
            className={(clsOneIndex == index ? 'item-selected' : false) + ' menu-item1'} 
            key={index} 
            onClick={() => this.onClsOneClick(index)}
          >
            <Text className='item-text'>{item.clsName}</Text>
          </View>
          {
            item.cls2.map((t, i) => {
              return (
                <View 
                  className='menu-item2' 
                  key={i}
                  style={clsOneIndex == index ? `height:40px;` : 'height: 0;overflow: hidden;'}
                  onClick={() => this.onClsTwoClick(i, t.id)}
                >
                  <View className={'item-text' + (clsTwoIndex == i ? ' act': '')}>{t.clsName}</View>
                </View>
              )
            })
          }
        </View>
      )
    })
    return sliderList
  }

  // 渲染 商品分类 tag
  // renderGoodTags() {
  //   const goodsType = this.state.goodsType
  //   let index = this.state.clsOneIndex
  //   // 无 tag分类信息时，不渲染
  //   if (goodsType.length == 0) return null

  //   let renderGoodTagList = goodsType[index].tags.map((item, index) => {
  //     return (
  //       <AtTag key={index} onClick={e => this.onGoodTagClick(e)} active={item.active} size='normal' name={item.tagName} className='type-tag'>{item.tagName}</AtTag>
  //     )
  //   })
  //   return renderGoodTagList
  // }

  // 渲染商品卡片
  renderGoodCards() {
    console.log(250 ,this.state.goodsData)
    const { goodsData, carsObj } = this.state
    let renderGoodCardList = goodsData.length ? goodsData.map((item, index)=> {
      return (
        <View className='sd-good-cards-item' key={index}>
          <Image
            className='goodImg'
            mode='aspectFit'
            onClick={() => ''}
            style={`padding: 15rpx;width: 85px;height: 85px;min-width: 85px;min-height: 85px;background:url(${moren});background-size: 55%;background-position: center;background-repeat: no-repeat;`}
            src={item.picDomain + item.picUrl}
          />
          <View className='goodInfo'>
            <View className='title' style={{ '-webkit-box-orient': 'vertical' }}>{item.productName}</View>
            {/* <View className='tags'>
              <AtTag size='small' active className='PromoionTag'>限时抢购</AtTag>
            </View> */}

            <View className='price'>
              <Text className='new'>￥{item.salePrice}</Text>
              {/* <Text className='old'>￥{item.oldPrice}</Text> */}
            </View>
            <View className='goodBottom'>
              <View className='salesNum'></View>
              <View className='changeGoodsCar'>
                <Image
                  mode='scaleToFill'
                  onClick={(e) => this.onChangeGoodNumClick(e, { type: 'sub', index })}
                  style={(item.saleNum ? '' : 'display: none;') + 'width: 23px;height: 23px;background: #fff;vertical-align: sub;'}
                  src={subIcon}
                />
                <Input disabled maxLength='3' value={item.saleNum || ''} type='number' className='goodsCarNum'></Input>
                <Image
                  mode='aspectFill'
                  mockData
                  onClick={(e) => this.onChangeGoodNumClick(e, { type: 'add', index })}
                  style='width: 23px;height: 23px;background: #fff;vertical-align: sub;'
                  src={addIcon}
                />
              </View>
            </View>
          </View>
        </View>
      ) 
    }) : (
      <View style='margin: 80px;'>
        <Image
          mode='aspectFill'
          style='width: 123px;height: 123px;background: #fff;'
          src={notInfo}
        />
        <View className='none-default'>此分类暂无商品~~~~</View>
      </View>
    )
    return renderGoodCardList
  }

  onGoodTypesClick(i) {
    console.log(i)
  }



  render() {
    console.log('进入render')
    let SliderList = this.renderSliderItemsSelected() // 侧边栏
    // let RenderGoodTagList = this.renderGoodTags()
    let GoodCardsList = this.renderGoodCards() // 商品卡片
    let { storeInfo } = this.state
    let topBar
    if (IS_WEAPP_ENV) topBar = 'topBar'
    console.log(topBar, this.state.goodsType)
    return (
      <View className={topBar + ' shopDetail'}>
        {/* top 背景 */}
        <HeaderBG headerProps='h5-top-bg' />

        {/* 搜索框 */}
        <View className='sd-seach-container' style={{ 'padding-top': this.state.topBoinding+'px' }}>
          <AtSearchBar
            className='sd-seach'
            inputType='text'
            value={this.state.value}
            onChange={this.onChange}
            onActionClick={this.onActionClick}
          />
        </View>

        {/* 店铺卡片区域 */}
        <View className='sd-shopCard-container'>
          <CardView
            // 左侧图片，main 信息
            leftImgSize='large'
            leftImgUrl={storeMR}
            title={storeInfo.storeName}
            infoType={'Text'}
            infoContent={`地址: ${storeInfo.contactAddr} ${'\n'} 联系人: ${storeInfo.contactName}`}
            // 右侧图片以及事件
            rightImgUrl={phoneIcon}
            rightImgStyle='width: 25px;height: 25px;background: #fff;'
            rightImgText='联系卖家'
            onRightImgClick={() => this.onCallShopClick(storeInfo.contactPhone)}
          />
        </View>

        {/* 商品区域 */}
        <View className='sd-shop-detail-container'>

          {/* 分类栏 */}
          <View className='sd-good-menu-box'>
            {SliderList}
          </View>

          {/* 商品区域 */}
          <View className='sd-good-detail-box'>

            {/* 分类区域 */}
            {/* <View className='sd-good-type-box'>
              {RenderGoodTagList}
            </View> */}

            {/* 商品卡片区域 */}
            <View className='sd-good-cards-box'>
              {GoodCardsList}
            </View>
          </View>
        </View>
      </View>
    )
  }
}
