import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './editAdress.scss'
import { AtForm, AtButton} from 'taro-ui'
import VNavbar from '../../components/navbar/navbar.jsx'
import VAdressInput from '../../components/editAdressFrom/editAdressFrom.jsx'
import API from '../../api/http.js'
import { IS_WEAPP_ENV, IS_H5_ENV } from '../../tool/main.js'

export default class editAdress extends Component {
  state = {
    name: '',
    mobileNum: '',
    adress: '',
    homeNo: '',
    tagAcive: {
      compony: true,
      home: false,
      school: false
    }
  }
  
  componentWillMount () {
    // $http.Users.getUserData().then(data => {
    //   if (!data) return
    //   console.log(data)
    // })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '编辑收货地址'
  }

  // 绑定 input 数据
  handleChange(v, e) {
    let inputBindProp
    if (IS_H5_ENV) {
      inputBindProp = e.target.name
    } else if (IS_WEAPP_ENV) {
      inputBindProp = e.target.id
    }
    if(this.state[inputBindProp] == v) return // 防止切换 input 时会输出上一 input 的数据
    this.state[inputBindProp] = v
  }

  tagClick(e) {
    this.setState({
      tagAcive: {
        [e.name]: !e.active
      }
    })
  }

  onSubmit(e) {
    console.log(e, this.state)
  }
  render () {
    let Navbar = IS_H5_ENV ? <VNavbar bg='custom' leftIcon='chevron-left' rightFirstIcon='trash' text='编辑收货地址'color='#333333'rightFirstClick={() => console.log('删除')} /> : null
    return (
      <View className='editAdress custom'>
        { Navbar }
        <AtForm onSubmit={e => this.onSubmit(e)}>
          <VAdressInput tagClick={e => this.tagClick(e)} states={this.state} inputChange={(v, e) => this.handleChange(v, e)} />
          <AtButton className='editadress-btn' type='primary' circle formType='submit'>保存</AtButton>
        </AtForm>
      </View>
    )
  }
}