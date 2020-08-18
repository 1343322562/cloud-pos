import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import './cardView.scss'
import { AtTag, AtAvatar} from 'taro-ui'


import userD from '../../../public/images/userD.png'


export default class CardView extends Component {
  state = {}

  // 定义 addGlobalClass 外部样式可以影响组件
  static options = {
    addGlobalClass: true
  }

  static defaultProps = {
    rightImgUrl: '',
    leftImgSize: 'large',
    title: '请登录',
    rightImgStyle: 'width: 20px;height: 20px;background: #fff;',
    rightImgText: null
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    console.log('654564564564654654',this.props.leftImgUrl)
    let InfoType
    let InfoTitleClass
  if (this.props.infoType == 'Tag') {
    InfoType = <AtTag size='small' active>{this.props.infoContent}</AtTag>
  } else if (this.props.infoType == 'Text') {
    InfoTitleClass = 'InfoTitleClass'
    InfoType = <Text style='-webkit-box-orient: vertical;' className='infoText'>{this.props.infoContent}</Text>
  }
    return (
          <View className='cardView'>
            <View className='cv-user-info-box'>
              <View className='cv-user-info'>
                <View style={this.props.leftImgUrl ? '' : 'display: none;'}>
                  <AtAvatar className='hearder' circle size={this.props.leftImgSize } image={this.props.leftImgUrl}></AtAvatar>
                </View>
                
                <View className='texts'>
                  <View style='-webkit-box-orient: vertical;' className={InfoTitleClass + ' name'}>{this.props.title}</View>
                  <Button 
                    className="auz-btn" 
                    style={this.props.title ? 'display: none;' : ''} 
                    openType="getUserInfo" 
                    onGetUserInfo={e => this.props.getUserInfo(e)}
                  >点击授权/登录</Button>
                  {InfoType}
                </View>
              </View>
              
              <View className='cv-rightImg-box'>
              <Image
                onClick={() => this.props.onRightImgClick() || ''} 
                style={this.props.rightImgStyle}
                // style='width: 20px;height: 20px;background: #fff;'
                src={this.props.rightImgUrl}
              />
              <Text className='text'>{this.props.rightImgText || null}</Text>
              </View>
              
            </View>
          </View>
    )
  }
}