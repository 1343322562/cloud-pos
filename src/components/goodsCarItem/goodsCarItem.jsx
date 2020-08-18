import Taro, { Component } from '@tarojs/taro'
import { View, Input, Image, Text } from '@tarojs/components'
import { goPage, IS_WEAPP_ENV } from '../../tool/main.js'
import { AtList, AtListItem, AtIcon, AtButton } from "taro-ui"
// 导入图片
import scanCode from '../../../public/images/scanCode.png'
import adress from '../../../public/images/adress.png'
import asd from '../../../public/images/asd.jpg'
import addIcon from '../../../public/images/addIcon.png'
import subIcon from '../../../public/images/subIcon.png'
import selectedGood from '../../../public/images/selectedGood.png'
import allSelectDefalut from '../../../public/images/allSelectDefalut.png'
import moren from '../../../public/images/moren.png'

export default class Goodscaritem extends Component {

  // 定义 addGlobalClass 外部样式可以影响组件
  static options = {
    addGlobalClass: true
  }

  componentWillMount() {
    this.state.goodsData = this.props.goodsData
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  state = {
    selectGoods: false,
    goodsData: []
  }

  selectGoodClick() {
    let selectGoods = this.state.selectGoods
    this.setState({ selectGoods: !selectGoods })
  }

  render() {
    console.log('商品Item')
    console.log(44, this)
    let goodsData = this.props.goodsData || []
    console.log(goodsData, goodsData.length)
    return (
      <View>
        {
           goodsData.map((item, index) => {
            return (
              <View className='good-info-item' key={item.id}>
                {/* <AtIcon className='checkout-selected' value='check-circle' size='25' color='#ddd'/> */}
                <View className='checkout-selected' onClick={e => this.props.selectdGood(e, index)}>
                  <Image
                    src={item.selectd ? selectedGood : allSelectDefalut}
                    style={item.selectd ? 'height: 22px;width: 22px;border-radius: 50%;margin-left: 2rpx;' : 'height: 25px;width: 25px;'}
                  />
                </View>
                <Image 
                  className='goods-Img' 
                  style={`background:url(${moren});background-size: 55%;background-position: center;background-repeat: no-repeat;`}
                  src={item.picUrl} 
                />
                <View className='goods-props'>
                  <View className='title'>{item.productName}</View>
                  <View className='props'>
                    <View className='price'>￥{item.salePrice}</View>
                    <View className='swicth'>
                      <Image
                        mode='scaleToFill'
                        onClick={e => this.props.onChangeGoodNumClick(e, { type: 'sub', index: index })}
                        style={(item.saleNum ? '' : 'display: none;') + 'width: 23px;height: 23px;background: #fff;vertical-align: sub;'}
                        src={subIcon}
                      />
                      <Input maxLength='3' value={item.saleNum} type='number' disabled className='goodsCarNum'></Input>
                      <Image
                        mode='aspectFill'
                        onClick={e => this.props.onChangeGoodNumClick(e, { type: 'add', index: index })}
                        style='width: 23px;height: 23px;background: #fff;vertical-align: sub;'
                        src={addIcon}
                      />
                    </View>
                  </View>
                </View>
              </View>
            )
          })
        }
      </View>
    )
  }
}
