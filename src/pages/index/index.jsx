import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { goPage, IS_WEAPP_ENV } from '../../tool/main.js'
import './index.scss'
import HeaderBG from '../../components/headerBG/headerBG.jsx'
import ShopCards from '../../components/shopCards/shopCards.jsx' // 商铺卡片
import mockData from './mockData.js'

import { AtIcon } from 'taro-ui'
export default class Index extends Component {
  state ={ }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页',
    navigationStyle: 'custom',
    navigationBarBackgroundColor: '#fec10d'
  }

  render () {
    let weappStyle
    if (IS_WEAPP_ENV) weappStyle = 'index-weapp' 
    let shopCards = mockData.map((item, index) => {
      return <ShopCards 
               key={index} 
               onGoShopDetailClick={() => goPage('../shopDetail/shopDetail')}
               imageURL={item['img']} 
               shopName={item['name']}
               distence={item['distance']}
              />
    })
    return (
      <View className={weappStyle + ' index'}>
        {/* top 背景 */}
        <HeaderBG headerProps='h5-top-bg'/>
        {/* 选择地址区域 */}
        <View onClick={() => console.log('跳转选择地址页')} className='ind-selectAdress'>
          <Text className='ind-adress-sign'>送至: </Text>
          <Text className='ind-adress-content'>某某大厦888</Text>
          <AtIcon onClick={() => goPage('')} className='ind-adress-icon' value='chevron-down' size='20' color='#333333'></AtIcon>
        </View>
        {/* 卡片区域 */}
        <View className='ind-shopCard-container'>
          <View className='center'>
            {shopCards}
          </View>
        </View>
      </View> 
    )
  }
}