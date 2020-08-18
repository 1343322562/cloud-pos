import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtIcon } from "taro-ui"
import { goPage, IS_WEAPP_ENV } from '../....//tool/main.js'


// 导入图片
import editAdress from '../../../../public/images/edit.png'

export default class Card extends Component {
    // 定义 addGlobalClass 外部样式可以影响组件
    static options = {
      addGlobalClass: true
    }
  
  render() {
    return (
      <View className='li-adress-card-box'>
            <View className='li-adress'>
              <View className='title'>收货地址</View>
              <View className='adress-box'>
                <View className='detail'>
                  <View className='content'>{this.props.adressTitle}</View>
                  <View className='user-info'>
                    <Text className='name'>{this.props.userName}</Text>
                    <Text className='phone'>{this.props.userPhone}</Text>
                  </View>
                </View>
                <Image
                  mode='aspectFill'
                  onClick={e => this.props.onEditClick(e)}
                  style='width: 24px;height: 25px;background: #999999;vertical-align: sub;'
                  src={editAdress}
                />
              </View>
            </View>
            <View className='li-transport-way'>
              <View className='title'>配送方式</View>
              <View className='way'>
                <Text className='text'>送货上门</Text>
                <AtIcon value='chevron-right' size='16' color='#666666'></AtIcon>
              </View>
            </View>
          </View>
    )
  }
  
}