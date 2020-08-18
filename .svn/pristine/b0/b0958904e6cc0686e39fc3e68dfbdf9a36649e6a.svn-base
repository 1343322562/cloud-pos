import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { IS_H5_ENV } from '../../tool/main.js'
import { AtTag, AtAvatar, AtCard, AtTabBar, AtList, AtListItem } from 'taro-ui'
import CardView from '../cardView/cardView.jsx'

// 导入图片
import payBack from '../../../public/images/payBack.png'
import waitGoods from '../../../public/images/waitGoods.png'
import waitTransport from '../../../public/images/t.png'
import wallet from '../../../public/images/wallet.png'
import adress from '../../../public/images/adress.png'
import shopSwitch from '../../../public/images/shopSwitch.png'
import order from '../../../public/images/order.png'


export default class MyCrads extends Component {
  state = {}

  // 定义 addGlobalClass 外部样式可以影响组件
  static options = {
    addGlobalClass: true
  }

  static defaultProps = {
    isEnable: true
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='myCards'>
        {/* 头部区域（用户头像，名称等） */}
        <View className='my-header-card-box'>
          

          {/* 头部card */}
          <CardView
            leftImgSize={this.props.leftImgSize}
            leftImgUrl={this.props.leftImgUrl}
            title={this.props.title}
            infoType={this.props.infoType}
            infoContent={this.props.infoContent}
            onRightImgClick={() => this.props.onRightImgClick()}
            rightImgStyle={this.props.rightImgStyle}
            rightImgUrl={this.props.rightImgUrl}
            getUserInfo={this.props.onGetUserInfoClick}
          />
        </View>

        {/* 我的订单区域 */}
        {/* <AtCard
          className='my-user-order-card'
          extra='全部订单 >'
          title='我的订单'
        >
          <View className='orderClickBox' onClick={() => this.props.onAllorderClick()}></View>
          <AtTabBar
            tabList={[
              { title: '待支付', iconSize: '26', image: wallet, text: '' },
              { title: '待配送', image: waitTransport },
              { title: '待收货', image: waitGoods, text: '', max: 99 },
              { title: '售后/退款', image: payBack, text: '' },
            ]}
            onClick={i => this.props.onOrderItemsClick(i)}
          />
        </AtCard> */}

        {/* list 区域 */}
        <View className='my-List-card-box'>
          <AtList>
            <AtListItem
              title='全部订单'
              arrow='right'
              thumb={order}
              onClick={() => this.props.onAllorderClick()}
            />
            {/* <AtListItem
              title='店铺切换'
              arrow='right'
              thumb={shopSwitch}
              onClick={e => this.props.onListItemsClick(e)}
            /> */}
            {/* <AtListItem
              title='退出登录'
              arrow='right'
              thumb={loginBack}
              onClick={e => this.props.onListItemsClick(e)}
            /> */}
          </AtList>
        </View>
      </View>
    )
  }
}