import Taro, { Component } from '@tarojs/taro'
import { AtNavBar } from 'taro-ui'
import { View } from '@tarojs/components'
import { pageBack } from '../../tool/main.js'
import './navbar.scss'
/*
 * leftIcon：  左侧图标(默认箭头)
 * clickLeft： 左侧图标事件
 * color： 主题颜色
 * text：  标题
 * fixed： 是否 fixed 定位
 * rightFirstIcon：   右一图标
 * rightFirstClick：  右一图标事件
 */


export default class Navbar extends Component {

  state = {
    actTitle: 1
  }

  static options = {
    addGlobalClass: true
  }

  changeClick () {
    let actTitle = this.state.actTitle
    actTitle = actTitle == 1 ? 2 : 1
    this.setState({ actTitle })
  }

  render () {
    let clickLeft // 左侧返回按钮的事件
    if (this.props.clickLeft){
      clickLeft = () => this.props.clickLeft()
    } else {
      clickLeft = () => pageBack(this.props.backLevel || 1)
    }

    let rightFirstClick // 右侧返回按钮的事件
    if (this.props.rightFirstClick){
      rightFirstClick = () => this.props.rightFirstClick()
    } else {
      rightFirstClick = () => pageBack(this.props.backLevel || 1)
    }
    return (
        <AtNavBar
          className={(this.props.bg && this.props.bg + ' custom')|| 'v-navbar-bg custom'}  
          onClickRgIconSt={() => rightFirstClick() }
          onClickLeftIcon={() => clickLeft()}
          color={this.props.color || '#999'}
          leftIconType={this.props.leftIcon || 'chevron-left'}
          rightFirstIconType={this.props.rightFirstIcon || 'list'}
          title={this.props.text}
          fixed={this.props.fixed || false}
        >
          {/* 自定义的交互 title (订单详情/状态) */}
          <View
            style={`display: ${this.props.isShowCustomtTitle || 'none'};margin-top: ${this.props.top || null}px;margin-bottom:${this.props.top?8:0}px;`}  
            className='switch-center' 
            onClick={e => this.changeClick()}
          >
            <View className={`title left ${this.state.actTitle == 1?'act-title':''}`}>订单详情</View>
            <View className={`title right ${this.state.actTitle == 2?'act-title':''}`}>订单状态</View>
          </View>
        
        </AtNavBar>
    )
  }
}