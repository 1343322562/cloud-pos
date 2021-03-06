import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './shopCards.scss'
import { AtIcon } from 'taro-ui'

export default class ShopCards extends Component {
  state ={ }
  // 定义 addGlobalClass 外部样式可以影响组件
  static options = {
    addGlobalClass: true
  }
  static defaultProps = {
    imageURL: ''
  }
  render () {
    return (
            <View className='shopCard'>
              <Image 
                style='width: 68px;height: 68px;background: #eee;border-radius: 50%;border: 1px solid #feba0e;' 
                className='shpo-pic' 
                src={this.props.imageURL}
              />

              <View className='shop-name'>{this.props.shopName}</View>
              <View className='shop-distence'>
                <AtIcon className='icons' value='map-pin' size='17' color='#666666' />
                  <Text> {this.props.distence}</Text>
                </View>
              <View className='shop-enter' onClick={() => this.props.onGoShopDetailClick()}>进入店铺</View>
            </View>
    )
  }
}