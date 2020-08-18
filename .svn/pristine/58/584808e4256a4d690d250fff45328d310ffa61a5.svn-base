import request from './config.js'

export default {
    Users: {
        getOpenId: obj => request.post('getOpenId.do', obj), // 获取openId
        /*
         * nickName   微信名称
         * userPhone  电话号码
         * userPic    用户图像
         * nowStoreId 当前门店
         * loginDate  登陆时间
         */
        saveMember: obj => request.post('saveMember.do', obj), // 保存商城用户信息
    },
    Store: {
      /*
        * storeId   商城id
        */
      searchProductCls: obj => request.post('searchProductCls.do', obj), // 查询类别
      /*
        * id   
        */
      searchStore: obj => request.post('searchStore.do', obj)  // 查询门店信息
    },
    Order: {
      saveOnlineOrder: obj => request.post('saveOnlineOrder.do', obj),     // 保存订单
      searchOnlineOrder: obj => request.post('searchOnlineOrder.do', obj), // 查询订单
      searchOnlineOrderDetail: obj => request.post('searchOnlineOrderDetail.do', obj) // 查询订单详情
    },
    Goods: {
      searchOnlineProduct: obj => request.post('searchOnlineProduct.do', obj)  // 查询商品
    }
}