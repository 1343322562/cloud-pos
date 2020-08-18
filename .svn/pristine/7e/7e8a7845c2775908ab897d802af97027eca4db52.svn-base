import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtInput, AtTag } from 'taro-ui'

export default class EditAdressFrom extends Component {
  state = {}

  // 定义 addGlobalClass 外部样式可以影响组件
  static options = {
    addGlobalClass: true
  }

  componentWillMount() { console.log(this.props.states) }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='editAdressFrom'>
        <AtInput
          className='editadress-input-margin'
          name='name'
          title='收货人 :'
          type='text'
          placeholder='请输入收货人名称'
          value={this.props.states.name}
          onChange={(v, e) => this.props.inputChange(v, e)}
        />
        <AtInput
          className='editadress-input-margin'
          name='mobileNum'
          title='手机号码 :'
          type='number'
          placeholder='请输入手机号码'
          value={this.props.states.mobileNum}
          onChange={(v, e) => this.props.inputChange(v, e)}
        />
        <AtInput
          className='editadress-input-margin'
          name='adress'
          title='收货地址 :'
          type='text'
          placeholder='请输入收货地址'
          value={this.props.states.adress}
          onChange={(v, e) => this.props.inputChange(v, e)}
        />
        <AtInput
          className='editadress-input-margin'
          name='homeNo'
          title='楼号门牌 :'
          type='text'
          placeholder='请输入楼号门牌'
          value={this.props.states.homeNo}
          onChange={(v, e) => this.props.inputChange(v, e)}
        />
        <AtInput
          className='editadress-input-margin'
          title='地址类型 :'
          disabled
        >
          <AtTag
            onClick={e => this.props.tagClick(e)}
            active={this.props.states.tagAcive.compony}
            name='compony'
            size='small'>
            公司
          </AtTag>
          <AtTag
            onClick={e => this.props.tagClick(e)}
            active={this.props.states.tagAcive.home}
            name='home'
            size='small'>
            家
          </AtTag>
          <AtTag
            onClick={e => this.props.tagClick(e)}
            active={this.props.states.tagAcive.school}
            name='school'
            size='small'>
            学校
          </AtTag>
        </AtInput>

      </View>
    )
  }
}