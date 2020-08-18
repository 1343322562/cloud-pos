(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/my/my"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/my/my.jsx?taro&type=script&parse=PAGE&":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/my/my.jsx?taro&type=script&parse=PAGE& ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./my.scss */ "./src/pages/my/my.scss");

var _main = __webpack_require__(/*! ../../tool/main */ "./src/tool/main.js");

var _http = __webpack_require__(/*! ../../api/http */ "./src/api/http.js");

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 导入图片

var My = (_temp2 = _class = function (_BaseComponent) {
  _inherits(My, _BaseComponent);

  function My() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, My);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = My.__proto__ || Object.getPrototypeOf(My)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "$compid__211", "$compid__212", "IS_H5_ENV", "userInfo", "openId"], _this.state = {
      userInfo: {}, // 用户信息
      openId: ''
    }, _this.config = {
      navigationBarTitleText: '我的',
      navigationBarBackgroundColor: '#fec10d'

      // 获取用户信息并保存
    }, _this.customComponents = ["VNavbar", "HeaderBG", "MyCards"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(My, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(My.prototype.__proto__ || Object.getPrototypeOf(My.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var userInfo = _taroWeapp2.default.getStorageSync('userObj');
      this.state.userInfo = userInfo;
      this.setState({ userInfo: userInfo });
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
    key: "getUserInfo",
    value: function getUserInfo(e) {
      console.log(e);
      if (!e.currentTarget.userInfo) {
        return;
      }var userInfo = e.currentTarget.userInfo;
      var nickName = userInfo.nickName,
          avatarUrl = userInfo.avatarUrl;

      var storeInfo = _taroWeapp2.default.getStorageSync('storeInfo');
      var openId = this.state.openId;
      // 保存用户信息请求

      _http2.default.Users.saveMember({
        data: {
          openid: openId,
          userPhone: '',
          userPic: avatarUrl,
          nickName: nickName,
          nowStoreId: storeInfo.uid || 2
        }
      }).then(function (res) {
        console.log(res);
        (0, _main.saveUserInfo)(res.data);
        // 缓存用户信息
        (0, _main.toast)('授权成功');
      });
      this.setState({ userInfo: userInfo });
    }

    // 我的订单 Item Click

  }, {
    key: "onOrderItemsClick",
    value: function onOrderItemsClick(i) {
      console.log(i);
      // goPage('')
    }

    // 列表 Click

  }, {
    key: "onListItemsClick",
    value: function onListItemsClick(e) {
      console.log(e);
      // goPage('') 
    }

    // 扫码

  }, {
    key: "onScanCodeClick",
    value: function onScanCodeClick() {
      console.log('调用扫码');
    }

    // 跳转订单页

  }, {
    key: "onAllorderClick",
    value: function onAllorderClick() {
      (0, _main.goPage)('../orderList/orderList');
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__211"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__211 = _genCompid2[0],
          $compid__211 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__212"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__212 = _genCompid4[0],
          $compid__212 = _genCompid4[1];

      var headerBG = _main.IS_H5_ENV ? 'h5-top-bg' : 'we-top-bg';
      var anonymousState__temp = _main.IS_H5_ENV ? function () {
        return false;
      } : null;

      var userInfo = this.__state.userInfo;

      console.log(userInfo);

      this.anonymousFunc0 = function () {
        return _this2.onScanCodeClick();
      };

      this.anonymousFunc1 = function (e) {
        return _this2.onListItemsClick(e);
      };

      this.anonymousFunc2 = function (i) {
        return _this2.onOrderItemsClick(i);
      };

      this.anonymousFunc3 = function () {
        return _this2.onAllorderClick();
      };

      this.anonymousFunc4 = function (e) {
        return _this2.getUserInfo(e);
      };

      _main.IS_H5_ENV && _taroWeapp.propsManager.set({
        "bg": "transparent",
        "leftIcon": "false",
        "rightFirstIcon": "false",
        "text": "\u6211\u7684",
        "color": "#333333",
        "rightFirstClick": anonymousState__temp
      }, $compid__211, $prevCompid__211);
      _taroWeapp.propsManager.set({
        "leftImgSize": "large",
        "leftImgUrl": userInfo.userPic || userInfo.avatarUrl,
        "title": userInfo.nickName || '',
        "infoType": userInfo.nickName ? 'Tag' : '',
        "infoContent": userInfo.nickName ? '普通会员' : '',
        "rightImgUrl": '',
        "rightImgStyle": "width: 20px;height: 20px;background: #fff;",
        "onRightImgClick": this.anonymousFunc0,
        "onListItemsClick": this.anonymousFunc1,
        "onOrderItemsClick": this.anonymousFunc2,
        "onAllorderClick": this.anonymousFunc3,
        "onGetUserInfoClick": this.anonymousFunc4
      }, $compid__212, $prevCompid__212);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        $compid__211: $compid__211,
        $compid__212: $compid__212,
        IS_H5_ENV: _main.IS_H5_ENV
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
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(e) {
      ;
    }
  }]);

  return My;
}(_taroWeapp.Component), _class.$$events = [], _class.defaultProps = {
  isEnable: true
}, _class.$$componentPath = "pages/my/my", _temp2);
exports.default = My;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(My, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:\\proj\\pos\\taroApp\\新建文件夹\\zksrpos-shangcheng-wxapp\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/my/my.jsx?taro&type=template&parse=PAGE&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:/proj/pos/taroApp/新建文件夹/zksrpos-shangcheng-wxapp/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/my/my.jsx?taro&type=template&parse=PAGE& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/my/my.wxml";

/***/ }),

/***/ "./src/pages/my/my.jsx":
/*!*****************************!*\
  !*** ./src/pages/my/my.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my.jsx?taro&type=template&parse=PAGE& */ "./src/pages/my/my.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _my_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my.jsx?taro&type=script&parse=PAGE& */ "./src/pages/my/my.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _my_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _my_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/my/my.jsx?taro&type=script&parse=PAGE&":
/*!**********************************************************!*\
  !*** ./src/pages/my/my.jsx?taro&type=script&parse=PAGE& ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./my.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/my/my.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/my/my.jsx?taro&type=template&parse=PAGE&":
/*!************************************************************!*\
  !*** ./src/pages/my/my.jsx?taro&type=template&parse=PAGE& ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=F:/proj/pos/taroApp/新建文件夹/zksrpos-shangcheng-wxapp/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./my.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:\\proj\\pos\\taroApp\\新建文件夹\\zksrpos-shangcheng-wxapp\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/my/my.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_my_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/my/my.scss":
/*!******************************!*\
  !*** ./src/pages/my/my.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/my/my.jsx","runtime","vendors","common"]]]);