(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/liquidation/liquidation"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/liquidation/liquidation.jsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/liquidation/liquidation.jsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************************************************************************************************/
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

// 导入图片

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./liquidation.scss */ "./src/pages/liquidation/liquidation.scss");

var _main = __webpack_require__(/*! ../../tool/main */ "./src/tool/main.js");

var _http = __webpack_require__(/*! ../../api/http */ "./src/api/http.js");

var _http2 = _interopRequireDefault(_http);

var _moren = __webpack_require__(/*! ../../../public/images/moren.png */ "./public/images/moren.png");

var _moren2 = _interopRequireDefault(_moren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Liquidation = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Liquidation, _BaseComponent);

  function Liquidation() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Liquidation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Liquidation.__proto__ || Object.getPrototypeOf(Liquidation)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray34", "$compid__236", "$compid__237", "headerBG", "goodsData", "moren", "IS_WEAPP_ENV", "storeInfo", "settlementData", "openId", "onEditClick"], _this.state = {
      goodsData: [], // 结算页商品信息
      storeInfo: {},
      openId: '',
      settlementData: {} // 结算信息
    }, _this.config = {
      navigationBarTitleText: '订单确认',
      navigationBarBackgroundColor: '#ffaf11'

      // 下单
    }, _this.anonymousFunc1Map = {}, _this.customComponents = ["VNavbar", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Liquidation, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Liquidation.prototype.__proto__ || Object.getPrototypeOf(Liquidation.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount(e) {
      console.log(e);
      var goodsData = JSON.parse(this.$router.params.liquidationData);
      console.log(564564, goodsData);
      var settlementData = JSON.parse(this.$router.params.settlementData);
      this.state.goodsData = goodsData;
      this.state.settlementData = settlementData;
      this.state.storeInfo = _taroWeapp2.default.getStorageSync('storeInfo');
      this.state.userObj = _taroWeapp2.default.getStorageSync('userObj');
      this.state.openId = _taroWeapp2.default.getStorageSync('openId');
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
    key: "placeOrder",
    value: function placeOrder() {
      (0, _main.loading)(0);
      var _state = this.state,
          goodsData = _state.goodsData,
          storeInfo = _state.storeInfo,
          userObj = _state.userObj,
          openId = _state.openId;

      var request = {
        uid: 2, // 商户 id
        sid: storeInfo.id, // 门店 id
        realMoney: 0, // 实付金额
        payableMoney: 0, // 应付总金额
        stockMoney: 0, // 总成本
        paytype: 1, // 支付方式 1: 货到付款
        deliveryTypeId: 2, // 配送方式 1: 送上门 2: 自提
        remark: '', // 订单备注
        vipId: userObj.id, // 会员 id
        realname: userObj.nickName, // 联系人
        mobile: '', // 电话
        address: '', // 地址
        data: [] // 商品详情
      };

      console.log(goodsData, storeInfo);
      goodsData.forEach(function (item) {
        var goodsItem = {
          productId: '', // 商品 id
          saleNum: '', // 销售数量
          salePrice: '', // 销售价格
          stockPrice: '', // 进货价
          payableMoney: '', // 应付金额
          realMoney: '', // 实付金额
          remark: '', // 备注
          productName: '' // 商品名
        };
        goodsItem.productId = item.id;
        goodsItem.saleNum = item.saleNum;
        goodsItem.salePrice = item.salePrice;
        goodsItem.stockPrice = item.stockPrice;
        goodsItem.realMoney = item.realMoney || parseFloat(item.salePrice * item.saleNum).toFixed(2);
        goodsItem.payableMoney = item.payableMoney || parseFloat(item.salePrice * item.saleNum).toFixed(2);
        goodsItem.remark = item.remark || '';
        goodsItem.productName = item.productName;
        request.data.push(goodsItem);

        request.realMoney += parseFloat(item.salePrice * item.saleNum);
        request.payableMoney += parseFloat(item.payableMoney || item.salePrice * item.saleNum);
        request.stockMoney += parseFloat(Number(item.stockPrice) * item.saleNum);
      });
      request.realMoney = request.realMoney.toFixed(2);
      request.payableMoney = request.payableMoney.toFixed(2);
      request.stockMoney = request.stockMoney.toFixed(2);
      request.data = JSON.stringify(request.data);

      console.log(request);

      this.saveOnlineOrder(request);
    }

    // 保存订单

  }, {
    key: "saveOnlineOrder",
    value: function saveOnlineOrder(request) {
      _http2.default.Order.saveOnlineOrder({
        data: request
      }).then(function (res) {
        console.log(res);
        (0, _main.showModal)({
          content: res.msg,
          showCancel: false,
          confirm: function confirm() {
            (0, _main.pageBack)();
          }
        });
        if (res.code == 0) {
          _taroWeapp2.default.removeStorageSync('carsObj');
        }
      }).catch(function (res) {
        (0, _main.showModal)({
          content: res.msg,
          showCancel: false,
          confirm: function confirm() {
            (0, _main.pageBack)();
            // Taro.removeStorageSync('carsObj')
          }
        });
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__236"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__236 = _genCompid2[0],
          $compid__236 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__237"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__237 = _genCompid4[0],
          $compid__237 = _genCompid4[1];

      // 微信端时的头部背景

      // 导航栏


      var headerBG = _main.IS_WEAPP_ENV ? 'we-top-bg' : null;
      var _state2 = this.__state,
          goodsData = _state2.goodsData,
          settlementData = _state2.settlementData;
      var storeInfo = this.__state.storeInfo;


      this.anonymousFunc0 = function (e) {
        return _this2.__props.onEditClick(e);
      };

      this.anonymousFunc2 = function () {
        return _this2.placeOrder();
      };

      var loopArray34 = goodsData.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "bajzz" + index;

        _this2.anonymousFunc1Map[_$indexKey] = function (e) {
          return _this2.__props.onEditClick(e);
        };

        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      });
      !_main.IS_WEAPP_ENV && _taroWeapp.propsManager.set({
        "bg": "transparent",
        "text": "\u8BA2\u5355\u786E\u8BA4",
        "fixed": "true",
        "rightFirstIcon": true
      }, $compid__236, $prevCompid__236);
      _taroWeapp.propsManager.set({
        "className": "btn",
        "onClick": this.anonymousFunc2,
        "type": "primary"
      }, $compid__237, $prevCompid__237);
      Object.assign(this.__state, {
        loopArray34: loopArray34,
        $compid__236: $compid__236,
        $compid__237: $compid__237,
        headerBG: headerBG,
        moren: _moren2.default,
        IS_WEAPP_ENV: _main.IS_WEAPP_ENV
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(_$indexKey) {
      var _anonymousFunc1Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc1Map[_$indexKey] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey].apply(_anonymousFunc1Map, e);
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }]);

  return Liquidation;
}(_taroWeapp.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1"], _class.$$componentPath = "pages/liquidation/liquidation", _temp2);
exports.default = Liquidation;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Liquidation, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:\\proj\\pos\\taroApp\\新建文件夹\\zksrpos-shangcheng-wxapp\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/liquidation/liquidation.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:/proj/pos/taroApp/新建文件夹/zksrpos-shangcheng-wxapp/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/liquidation/liquidation.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/liquidation/liquidation.wxml";

/***/ }),

/***/ "./src/pages/liquidation/liquidation.jsx":
/*!***********************************************!*\
  !*** ./src/pages/liquidation/liquidation.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _liquidation_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./liquidation.jsx?taro&type=template&parse=PAGE& */ "./src/pages/liquidation/liquidation.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _liquidation_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liquidation.jsx?taro&type=script&parse=PAGE& */ "./src/pages/liquidation/liquidation.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _liquidation_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _liquidation_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/liquidation/liquidation.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************!*\
  !*** ./src/pages/liquidation/liquidation.jsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_liquidation_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./liquidation.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/liquidation/liquidation.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_liquidation_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_liquidation_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_liquidation_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_liquidation_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_liquidation_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/liquidation/liquidation.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************************!*\
  !*** ./src/pages/liquidation/liquidation.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_liquidation_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=F:/proj/pos/taroApp/新建文件夹/zksrpos-shangcheng-wxapp/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./liquidation.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:\\proj\\pos\\taroApp\\新建文件夹\\zksrpos-shangcheng-wxapp\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/liquidation/liquidation.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_liquidation_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_liquidation_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_liquidation_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_liquidation_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/liquidation/liquidation.scss":
/*!************************************************!*\
  !*** ./src/pages/liquidation/liquidation.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/liquidation/liquidation.jsx","runtime","vendors","common"]]]);