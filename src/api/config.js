import Taro from '@tarojs/taro'
import { toast, loading, deepCopy, showModal } from '../tool/main.js'

export default {
    baseURL: 'https://online.mmj.zksr.cn/shop/', // 根路径
    // http://192.168.2.113:8099/zksrpos-shangcheng/shop/
    // https://42.120.16.78/svn/yunpos_new/online
    // https://online.mmj.zksr.cn/shop/
    // get 请求
    get: function (url, obj) {
        loading(true)
        return this.http('GET', url, obj)
    },
    // post 请求
    post: function (url, obj) {
        return this.http('POST', url, obj)
    },
    // 参数预处理
    http: function (type, url, obj) {
        loading(1)
        console.log(url)
        let reqObj = {
            method: type,
            url: this.baseURL + url,
            data: obj.data,
            header: obj.header || { 'content-type': 'application/x-www-form-urlencoded' },
            dataType: obj.dataType || 'json',
            fail: function(res) {
              showModal({
                content: `请求失败请检查网络设置，错误信息: ${res.msg}`
              })
                console.log(res, '请求失败')
            },
            complete: function() { loading(false) }
        }
        // 数据预处理
        return Taro.request(reqObj).then(res => {
          console.log(url,res)
            if(res.code == -1) throw new Error(`网络请求错误, 状态码${res.statusCode}`)
            if(res.code == -1) return toast(`请求错误, ${res.msg}`)
            return res.data
        }).catch(err => {
          console.log(`请求错误, 错误信息: ${deepCopy(err)}`)
        })
    }
}