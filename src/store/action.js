import commit from './mutations.js'
import { setCartsNum } from '../tool/main.js'
import Taro from '@tarojs/taro'

const actions = {
  /**  
    * 改变商品数量, 并保存购物车
    * carsObj = { num, keyArr, change, ..... }
    * num 商品总数量     keyArr 商品种类(以编号为键)    change(是否在购物车有修改数量操作)
    */ 
  CHANGE_CARTS(good, type, id) {
    console.log(8,good)
    let carsObj = commit.GET_CARTS()
    if (good.id in carsObj) {
      switch (type) {
        case 'add':
          carsObj['num'] += 1
          carsObj[`${good.id}`].saleNum += 1
          break;
        case 'sub':
          if (good.saleNum == 0) {
            delete carsObj[`${good.id}`]
            carsObj['keyArr'].forEach((item, index) => {
              console.log(19,item, good.id, index)
              if (item == good.id) carsObj['keyArr'].splice(index, 1)
            })
          }
          carsObj['num'] -= 1
          break;
      }
    } else {
      switch (type) {
        // 删除商品
        case 'delete':
          carsObj['num'] -= Number(carsObj[id].saleNum)
          carsObj['keyArr'].forEach((item, index) => {
            if (item == id) carsObj['keyArr'].splice(index, 1)
          })
          delete carsObj[id]
          break;
        default:
            // 第一次加购
          const itemData = {
            id: good.id,          // 商品id
            saleNum: good.saleNum,       // 销售数量
            salePrice: good.salePrice,   // 销售价格
            stockPrice: good.buyingPrice,// 进货价
            remark: good.remark,         // 备注
            payableMoney: '', // 应付金额
            realMoney: '',    // 实付金额
            picUrl: good.picDomain + good.picUrl, // 图片路径
            productName: good.productName // 商品名
          }
          carsObj[`${good.id}`] = itemData
          carsObj['keyArr'].push(`${good.id}`)
          carsObj['num'] += good.saleNum
          break;
      }
    }
    Taro.setTabBarBadge({ index: 1, text: carsObj['num'].toString() })
    commit.SAVE_CARTS(carsObj)
  }

}

export default actions