import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './headerBG.scss'
import { IS_H5_ENV } from '../../tool/main.js'


export default class headerBG extends Component {
  state = { }
  static defaultProps = {
    isEnable: true
  }

  componentWillMount() { 
    
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    let headerBG = IS_H5_ENV ? 'h5-top-bg' : 'we-top-bg' 
    return (
      <View className={this.props.headerProps || headerBG} />
    )
  }
}