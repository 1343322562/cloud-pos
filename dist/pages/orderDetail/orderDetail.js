(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/orderDetail/orderDetail"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/orderDetail/orderDetail.jsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/orderDetail/orderDetail.jsx?taro&type=script&parse=PAGE& ***!
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

var _class, _temp2; // 搜索框

// 导航栏
// 订单卡片(信息)


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./orderDetail.scss */ "./src/pages/orderDetail/orderDetail.scss");

var _main = __webpack_require__(/*! ../../tool/main */ "./src/tool/main.js");

var _http = __webpack_require__(/*! ../../api/http */ "./src/api/http.js");

var _http2 = _interopRequireDefault(_http);

var _moren = __webpack_require__(/*! ../../../public/images/moren.png */ "./public/images/moren.png");

var _moren2 = _interopRequireDefault(_moren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Orderdetail = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Orderdetail, _BaseComponent);

  function Orderdetail() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Orderdetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Orderdetail.__proto__ || Object.getPrototypeOf(Orderdetail)).call.apply(_ref, [this].concat(args))), _this2), _this2.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "loopArray28", "$compid__195", "$compid__196", "$compid__197", "$compid__198", "$compid__199", "$compid__200", "$compid__201", "orderData", "moren", "itemData", "storeInfo", "topBoinding", "orderInfo", "onEditClick"], _this2.state = {
      orderData: {},
      itemData: {},
      storeInfo: {},
      topBoinding: '' // 胶囊距离顶部位置
    }, _this2.config = {
      navigationBarTitleText: '订单详情',
      navigationBarBackgroundColor: '#fec10d'
    }, _this2.anonymousFunc0Map = {}, _this2.customComponents = ["Orderlistcard", "AtList", "AtListItem"], _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Orderdetail, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Orderdetail.prototype.__proto__ || Object.getPrototypeOf(Orderdetail.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount(e) {
      var data = JSON.parse(this.$router.params.data);
      var storeInfo = _taroWeapp2.default.getStorageSync("storeInfo");
      console.log(data);
      var topBoinding = void 0;
      if (_main.IS_WEAPP_ENV) {
        // 微信端 胶囊距离顶部位置
        topBoinding = _taroWeapp2.default.getMenuButtonBoundingClientRect().top;
      }
      console.log(topBoinding);
      this.setState({ topBoinding: topBoinding, itemData: data, storeInfo: storeInfo });
      this.getOrderDetailData(data.id);
    }
  }, {
    key: "getOrderDetailData",
    value: function getOrderDetailData(srlId) {
      var _Taro$getStorageSync = _taroWeapp2.default.getStorageSync('storeInfo'),
          uid = _Taro$getStorageSync.uid;

      var _this = this;
      _http2.default.Order.searchOnlineOrderDetail({
        data: { srlId: srlId, uid: uid }
      }).then(function (res) {
        console.log(res);
        _this.setState({ orderData: res.data });
      });
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
    key: "_createData",
    value: function _createData() {
      var _this3 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__195"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__195 = _genCompid2[0],
          $compid__195 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__196"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__196 = _genCompid4[0],
          $compid__196 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__197"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__197 = _genCompid6[0],
          $compid__197 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__198"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__198 = _genCompid8[0],
          $compid__198 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__199"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__199 = _genCompid10[0],
          $compid__199 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__200"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__200 = _genCompid12[0],
          $compid__200 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__201"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__201 = _genCompid14[0],
          $compid__201 = _genCompid14[1];

      var _state = this.__state,
          orderData = _state.orderData,
          itemData = _state.itemData,
          storeInfo = _state.storeInfo;

      console.log(orderData);
      console.log(_main.IS_H5_ENV);
      // const Navbar = IS_H5_ENV ? <VNavbar color='#333333' isShowCustomtTitle='flex' fixed={true} />: <VNavbar color='#333333' top={this.state.topBoinding} rightFirstIconType={false} text="订单详情" fixed={false} />
      var anonymousState__temp = "\u8BA2\u5355\u72B6\u6001: " + itemData.statusStr;
      var anonymousState__temp2 = '￥' + Number(itemData.payableMoney).toFixed(2);
      var anonymousState__temp3 = '￥' + Number(itemData.realMoney).toFixed(2);
      var loopArray28 = orderData.length ? orderData.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "iizzz" + index;

        _this3.anonymousFunc0Map[_$indexKey] = function (e) {
          return _this3.__props.onEditClick(e);
        };

        var $loopState__temp5 = orderData.length ? "\u914D\u9001\u6570\u91CF: " + item.$original.salePrice : null;
        var $loopState__temp7 = orderData.length ? "\u5355\u4EF7: \uFFE5" + item.$original.saleNum : null;
        var $loopState__temp9 = orderData.length ? "\u5E94\u4ED8\u91D1\u989D: \uFFE5" + item.$original.payableMoney : null;
        var $loopState__temp11 = orderData.length ? "\u5B9E\u4ED8\u91D1\u989D: \uFFE5" + item.$original.realMoney : null;

        var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "ijzzzzzzzz" + index, true),
            _genCompid16 = _slicedToArray(_genCompid15, 2),
            $prevCompid__191 = _genCompid16[0],
            $compid__191 = _genCompid16[1];

        _taroWeapp.propsManager.set({
          "className": "order-info-list payment good",
          "style": "width: 80%;"
        }, $compid__191, $prevCompid__191);

        var _genCompid17 = (0, _taroWeapp.genCompid)(__prefix + "jazzzzzzzz" + index, true),
            _genCompid18 = _slicedToArray(_genCompid17, 2),
            $prevCompid__192 = _genCompid18[0],
            $compid__192 = _genCompid18[1];

        _taroWeapp.propsManager.set({
          "title": item.$original.productName
        }, $compid__192, $prevCompid__192);

        var _genCompid19 = (0, _taroWeapp.genCompid)(__prefix + "jbzzzzzzzz" + index, true),
            _genCompid20 = _slicedToArray(_genCompid19, 2),
            $prevCompid__193 = _genCompid20[0],
            $compid__193 = _genCompid20[1];

        _taroWeapp.propsManager.set({
          "title": $loopState__temp5,
          "extraText": $loopState__temp7
        }, $compid__193, $prevCompid__193);

        var _genCompid21 = (0, _taroWeapp.genCompid)(__prefix + "jczzzzzzzz" + index, true),
            _genCompid22 = _slicedToArray(_genCompid21, 2),
            $prevCompid__194 = _genCompid22[0],
            $compid__194 = _genCompid22[1];

        _taroWeapp.propsManager.set({
          "title": $loopState__temp9,
          "extraText": $loopState__temp11
        }, $compid__194, $prevCompid__194);
        return {
          _$indexKey: _$indexKey,
          $loopState__temp5: $loopState__temp5,
          $loopState__temp7: $loopState__temp7,
          $loopState__temp9: $loopState__temp9,
          $loopState__temp11: $loopState__temp11,
          $compid__191: $compid__191,
          $compid__192: $compid__192,
          $compid__193: $compid__193,
          $compid__194: $compid__194,
          $original: item.$original
        };
      }) : [];
      _taroWeapp.propsManager.set({
        "orderInfo": this.__state.orderInfo,
        "isShowBottom": "none"
      }, $compid__195, $prevCompid__195);
      _taroWeapp.propsManager.set({
        "className": "order-info-list"
      }, $compid__196, $prevCompid__196);
      _taroWeapp.propsManager.set({
        "title": anonymousState__temp,
        "extraText": '货到付款'
      }, $compid__197, $prevCompid__197);
      _taroWeapp.propsManager.set({
        "title": storeInfo.storeName,
        "extraText": storeInfo.contactPhone
      }, $compid__198, $prevCompid__198);
      _taroWeapp.propsManager.set({
        "className": "order-info-list payment amt"
      }, $compid__199, $prevCompid__199);
      _taroWeapp.propsManager.set({
        "title": '应付金额',
        "extraText": anonymousState__temp2
      }, $compid__200, $prevCompid__200);
      _taroWeapp.propsManager.set({
        "title": '实付金额',
        "extraText": anonymousState__temp3
      }, $compid__201, $prevCompid__201);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        loopArray28: loopArray28,
        $compid__195: $compid__195,
        $compid__196: $compid__196,
        $compid__197: $compid__197,
        $compid__198: $compid__198,
        $compid__199: $compid__199,
        $compid__200: $compid__200,
        $compid__201: $compid__201,
        moren: _moren2.default
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
  }]);

  return Orderdetail;
}(_taroWeapp.Component), _class.$$events = ["anonymousFunc0"], _class.options = {
  addGlobalClass: true
}, _class.$$componentPath = "pages/orderDetail/orderDetail", _temp2);
exports.default = Orderdetail;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Orderdetail, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:\\proj\\pos\\taroApp\\新建文件夹\\zksrpos-shangcheng-wxapp\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/orderDetail/orderDetail.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:/proj/pos/taroApp/新建文件夹/zksrpos-shangcheng-wxapp/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/orderDetail/orderDetail.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/orderDetail/orderDetail.wxml";

/***/ }),

/***/ "./src/pages/orderDetail/orderDetail.jsx":
/*!***********************************************!*\
  !*** ./src/pages/orderDetail/orderDetail.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _orderDetail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderDetail.jsx?taro&type=template&parse=PAGE& */ "./src/pages/orderDetail/orderDetail.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _orderDetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderDetail.jsx?taro&type=script&parse=PAGE& */ "./src/pages/orderDetail/orderDetail.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _orderDetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _orderDetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/orderDetail/orderDetail.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************!*\
  !*** ./src/pages/orderDetail/orderDetail.jsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderDetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./orderDetail.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/orderDetail/orderDetail.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderDetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderDetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderDetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderDetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderDetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/orderDetail/orderDetail.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************************!*\
  !*** ./src/pages/orderDetail/orderDetail.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderDetail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=F:/proj/pos/taroApp/新建文件夹/zksrpos-shangcheng-wxapp/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./orderDetail.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:\\proj\\pos\\taroApp\\新建文件夹\\zksrpos-shangcheng-wxapp\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/orderDetail/orderDetail.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderDetail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderDetail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderDetail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_orderDetail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/orderDetail/orderDetail.scss":
/*!************************************************!*\
  !*** ./src/pages/orderDetail/orderDetail.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/orderDetail/orderDetail.jsx","runtime","vendors","common"]]]);