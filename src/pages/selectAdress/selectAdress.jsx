import Taro, { Component,  } from '@tarojs/taro'
import { View, Picker, Input } from '@tarojs/components'
import './selectAdress.scss'
import VNavbar from '../../components/navbar/navbar.jsx' // 导航栏
import { IS_H5_ENV, IS_WEAPP_ENV } from '../../tool/main.js'
import { AtList, AtListItem, AtInput } from 'taro-ui' // 搜索框

export default class Selectadress extends Component {

  state = {  
    selector: [['北京城区', '中国', '巴西', '日本'], ['北京城区', '中国', '巴西', '日本']],
    selectorChecked: ['北京城区'],
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '选择收货地址'
  }
  onChange = e => {
    console.log(e)
    this.setState({
      selectorChecked: this.state.selector[1][e.detail.value[1]]
    })
  }

  
  render () {
    const Navbar = IS_H5_ENV ? <VNavbar bg='transparent' color='#333333' text='选择收货地址' fixed={true} /> : ''
    return (
      <View className='selectAdress'>
        <View style='height: 60px;width: 100%;' />
        {Navbar}
        <View className='select-top'>
          <View className='select-location-box'>
            <Picker 
              mode='multiSelector' 
              range={this.state.selector} 
              onChange={this.onChange}
            >
              <View className='picker'>
                {this.state.selectorChecked}
              </View>
            </Picker>
          </View>
          <View className='select-content'>
            <Input type='text' placeholder='请输入收货地址'/>
          </View>
        </View>
      </View>
    )
  }
}
