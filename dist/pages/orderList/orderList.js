(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/orderList/orderList"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/orderList/orderList.jsx?taro&type=script&parse=PAGE&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/orderList/orderList.jsx?taro&type=script&parse=PAGE& ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2; // 导航栏
// 订单卡片(信息)
// 搜索框
// mock 数据


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./orderList.scss */ "./src/pages/orderList/orderList.scss");

var _http = __webpack_require__(/*! ../../api/http */ "./src/api/http.js");

var _http2 = _interopRequireDefault(_http);

var _main = __webpack_require__(/*! ../../tool/main */ "./src/tool/main.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Orderlist = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Orderlist, _BaseComponent);

  function Orderlist() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Orderlist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Orderlist.__proto__ || Object.getPrototypeOf(Orderlist)).call.apply(_ref, [this].concat(args))), _this2), _this2.$usedState = ["$compid__233", "$compid__234", "IS_H5_ENV", "anonymousState__temp5", "value", "orderData", "openId", "storeInfo", "seachData", "seachValue", "isShowBottom"], _this2.state = {
      value: '', // 搜索框
      orderData: [],
      openId: '',
      storeInfo: {},
      seachData: [],
      seachValue: ''
    }, _this2.config = {
      navigationBarTitleText: '全部订单',
      navigationBarBackgroundColor: '#fec20c'
    }, _this2.anonymousFunc0Map = {}, _this2.customComponents = ["VNavbar", "AtSearchBar"], _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Orderlist, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Orderlist.prototype.__proto__ || Object.getPrototypeOf(Orderlist.prototype), "_constructor", this).call(this, props);
      console.log(props, this);
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.state.openId = _taroWeapp2.default.getStorageSync('openId');
      this.state.storeInfo = _taroWeapp2.default.getStorageSync('storeInfo');
      this.getOrderData();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "getOrderData",
    value: function getOrderData() {
      var _this = this;
      var _state = this.state,
          openId = _state.openId,
          storeInfo = _state.storeInfo;

      var userObj = _taroWeapp2.default.getStorageSync('userObj');
      var request = {
        srl: '', //流水号
        id: '', // id
        vipId: '', // 会员id
        uid: 2, // 商户 id
        sid: '', // 门店id
        uuId: '', //uuid
        orderStatus: ''
      };
      request.openId = openId;
      request.sid = storeInfo.id;
      request.vipId = userObj.id;
      console.log('请求订单参数', request);

      _http2.default.Order.searchOnlineOrder({
        data: request
      }).then(function (res) {
        console.log(res);
        var orderData = res.data;
        orderData.forEach(function (item) {
          var statusStr = void 0;
          switch (item.orderStatus) {
            case 1:
              item.statusStr = '待发货';
              break;
            case 2:
              item.statusStr = '已发货';
              break;
            case 3:
              item.statusStr = '已收货';
              break;
            case 4:
              item.statusStr = '已完成';
              break;
            case -1:
              item.statusStr = '退单中';
              break;
            case -2:
              item.statusStr = '已退货';
              break;
          }
        });
        _this.setState({ orderData: orderData });
      });
    }

    // 搜索框数据绑定

  }, {
    key: "onChange",
    value: function onChange(val) {
      this.state.seachValue = val;
      if (!val) {
        this.setState({ seachData: '' });
      }
    }

    // 点击搜索

  }, {
    key: "onActionClick",
    value: function onActionClick(e) {
      var _this3 = this;

      var seachData = [];
      var orderData = this.state.orderData;

      orderData.map(function (item) {
        if (item['srl'] == _this3.state.seachValue) {
          seachData.push(item);
        }
      });
      this.setState({ orderData: seachData });
    }

    // 清除搜索内容

  }, {
    key: "onClear",
    value: function onClear() {
      this.getOrderData();
      this.state.seachValue = '';
      this.setState({ seachValue: '', seachData: '' });
    }
  }, {
    key: "toOrderDetail",
    value: function toOrderDetail(e, item) {
      var data = JSON.stringify(item);
      (0, _main.goPage)('../orderDetail/orderDetail?data=' + data);
    }
  }, {
    key: "_createOrderListData",
    value: function _createOrderListData(_$uid) {
      var _this4 = this;

      return function () {
        var orderData = _this4.state.orderData;

        var loopArray33 = orderData.map(function (item, index) {
          item = {
            $original: (0, _taroWeapp.internal_get_original)(item)
          };

          var _$indexKey = "bahzz" + index;

          _this4.anonymousFunc0Map[_$indexKey] = function (e) {
            return _this4.toOrderDetail(e, item.$original);
          };

          var $loopState__temp2 = item.$original.orderTime.slice(0, 10);
          var $loopState__temp4 = item.$original.orderTime.slice(11, 19);
          return {
            _$indexKey: _$indexKey,
            $loopState__temp2: $loopState__temp2,
            $loopState__temp4: $loopState__temp4,
            $original: item.$original
          };
        });
        return {
          loopArray33: loopArray33,
          orderData: orderData
        };
      };
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this5 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__233"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__233 = _genCompid2[0],
          $compid__233 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__234"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__234 = _genCompid4[0],
          $compid__234 = _genCompid4[1];

      var openNavbarClass = _main.IS_H5_ENV ? 'fixed-height' : 'custom';

      var anonymousState__temp5 = this._createOrderListData(__prefix + "baizzzzzzz")();

      var seachData = this.__state.seachData;
      // if (seachData) {
      //   orderList = seachData.map((item, index) => {
      //     return <Orderlistcard key={index} orderInfo={item} />
      //   })
      // } else {
      //   orderList = mockData.map((item, index) => {
      //     return <Orderlistcard key={index} orderInfo={item} />
      //   })
      // } 

      this.anonymousFunc1 = function () {
        return _this5.onClear();
      };

      this.anonymousFunc2 = function (val) {
        return _this5.onChange(val);
      };

      this.anonymousFunc3 = function (encodeURIComponent) {
        return _this5.onActionClick(encodeURIComponent);
      };

      _main.IS_H5_ENV && _taroWeapp.propsManager.set({
        "color": "#333333",
        "text": "\u5168\u90E8\u8BA2\u5355",
        "fixed": true
      }, $compid__233, $prevCompid__233);
      _taroWeapp.propsManager.set({
        "className": openNavbarClass,
        "actionName": "\u641C\u4E00\u4E0B",
        "placeholder": "\u8BF7\u8F93\u5165\u8BA2\u5355\u53F7",
        "value": this.__state.seachValue,
        "onClear": this.anonymousFunc1,
        "onChange": this.anonymousFunc2,
        "onActionClick": this.anonymousFunc3
      }, $compid__234, $prevCompid__234);
      Object.assign(this.__state, {
        $compid__233: $compid__233,
        $compid__234: $compid__234,
        IS_H5_ENV: _main.IS_H5_ENV,
        anonymousState__temp5: anonymousState__temp5
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(e) {
      ;
    }
  }]);

  return Orderlist;
}(_taroWeapp.Component), _class.$$events = ["anonymousFunc0"], _class.options = {
  addGlobalClass: true

  // 获取订单数据
}, _class.$$componentPath = "pages/orderList/orderList", _temp2);
exports.default = Orderlist;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Orderlist, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:\\proj\\pos\\taroApp\\新建文件夹\\zksrpos-shangcheng-wxapp\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/orderList/orderList.jsx?taro&type=template&parse=PAGE&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:/proj/pos/taroApp/新建文件夹/zksrpos-shangcheng-wxapp/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/orderList/orderList.jsx?taro&type=template&parse=PAGE& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/orderList/orderList.wxml";

/***/ }),

/***/ "./src/pages/orderList/orderList.jsx":
/*!*******************************************!*\
  !*** ./src/pages/orderList/orderList.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _orderList_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderList.jsx?taro&type=template&parse=PAGE& */ "./src/pages/orderList/orderList.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _orderList_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderList.jsx?taro&type=script&parse=PAGE& */ "./src/pages/orderList/orderList.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _orderList_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _orderList_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/orderList/orderList.jsx?taro&type=script&parse=PAGE&":
/*!************************************************************************!*\
  !*** ./src/pages/orderList/orderList.jsx?taro&type=script&parse=PAGE& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderList_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./orderList.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/orderList/orderList.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderList_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderList_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderList_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderList_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderList_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/orderList/orderList.jsx?taro&type=template&parse=PAGE&":
/*!**************************************************************************!*\
  !*** ./src/pages/orderList/orderList.jsx?taro&type=template&parse=PAGE& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderList_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=F:/proj/pos/taroApp/新建文件夹/zksrpos-shangcheng-wxapp/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./orderList.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:\\proj\\pos\\taroApp\\新建文件夹\\zksrpos-shangcheng-wxapp\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/orderList/orderList.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderList_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderList_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderList_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderList_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/orderList/orderList.scss":
/*!********************************************!*\
  !*** ./src/pages/orderList/orderList.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/orderList/orderList.jsx","runtime","vendors","common"]]]);