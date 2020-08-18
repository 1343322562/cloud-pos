(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/editAdress/editAdress"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/editAdress/editAdress.jsx?taro&type=script&parse=PAGE&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/editAdress/editAdress.jsx?taro&type=script&parse=PAGE& ***!
  \***********************************************************************************************************************************************************/
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

__webpack_require__(/*! ./editAdress.scss */ "./src/pages/editAdress/editAdress.scss");

var _main = __webpack_require__(/*! ../../tool/main */ "./src/tool/main.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var editAdress = (_temp2 = _class = function (_BaseComponent) {
  _inherits(editAdress, _BaseComponent);

  function editAdress() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, editAdress);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = editAdress.__proto__ || Object.getPrototypeOf(editAdress)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "$compid__202", "$compid__203", "$compid__204", "$compid__205", "IS_H5_ENV", "name", "mobileNum", "adress", "homeNo", "tagAcive"], _this.state = {
      name: '',
      mobileNum: '',
      adress: '',
      homeNo: '',
      tagAcive: {
        compony: true,
        home: false,
        school: false
      }
    }, _this.config = {
      navigationBarTitleText: '编辑收货地址'

      // 绑定 input 数据
    }, _this.customComponents = ["VNavbar", "AtForm", "VAdressInput", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(editAdress, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(editAdress.prototype.__proto__ || Object.getPrototypeOf(editAdress.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      // $http.Users.getUserData().then(data => {
      //   if (!data) return
      //   console.log(data)
      // })
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
    key: "handleChange",
    value: function handleChange(v, e) {
      var inputBindProp = void 0;
      if (_main.IS_H5_ENV) {
        inputBindProp = e.target.name;
      } else if (_main.IS_WEAPP_ENV) {
        inputBindProp = e.target.id;
      }
      if (this.state[inputBindProp] == v) {
        return;
      } // 防止切换 input 时会输出上一 input 的数据
      this.state[inputBindProp] = v;
    }
  }, {
    key: "tagClick",
    value: function tagClick(e) {
      this.setState({
        tagAcive: _defineProperty({}, e.name, !e.active)
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      console.log(e, this.state);
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__202"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__202 = _genCompid2[0],
          $compid__202 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__203"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__203 = _genCompid4[0],
          $compid__203 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__204"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__204 = _genCompid6[0],
          $compid__204 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__205"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__205 = _genCompid8[0],
          $compid__205 = _genCompid8[1];

      var anonymousState__temp = _main.IS_H5_ENV ? function () {
        return console.log('删除');
      } : null;

      this.anonymousFunc0 = function (e) {
        return _this2.onSubmit(e);
      };

      var anonymousState__temp2 = function anonymousState__temp2(e) {
        return _this2.tagClick(e);
      };

      var anonymousState__temp3 = function anonymousState__temp3(v, e) {
        return _this2.handleChange(v, e);
      };

      _main.IS_H5_ENV && _taroWeapp.propsManager.set({
        "bg": "custom",
        "leftIcon": "chevron-left",
        "rightFirstIcon": "trash",
        "text": "\u7F16\u8F91\u6536\u8D27\u5730\u5740",
        "color": "#333333",
        "rightFirstClick": anonymousState__temp
      }, $compid__202, $prevCompid__202);
      _taroWeapp.propsManager.set({
        "onSubmit": this.anonymousFunc0
      }, $compid__203, $prevCompid__203);
      _taroWeapp.propsManager.set({
        "tagClick": anonymousState__temp2,
        "states": this.__state,
        "inputChange": anonymousState__temp3
      }, $compid__204, $prevCompid__204);
      _taroWeapp.propsManager.set({
        "className": "editadress-btn",
        "type": "primary",
        "circle": true,
        "formType": "submit"
      }, $compid__205, $prevCompid__205);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        $compid__202: $compid__202,
        $compid__203: $compid__203,
        $compid__204: $compid__204,
        $compid__205: $compid__205,
        IS_H5_ENV: _main.IS_H5_ENV
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return editAdress;
}(_taroWeapp.Component), _class.$$events = [], _class.$$componentPath = "pages/editAdress/editAdress", _temp2);
exports.default = editAdress;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(editAdress, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:\\proj\\pos\\taroApp\\新建文件夹\\zksrpos-shangcheng-wxapp\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/editAdress/editAdress.jsx?taro&type=template&parse=PAGE&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:/proj/pos/taroApp/新建文件夹/zksrpos-shangcheng-wxapp/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/editAdress/editAdress.jsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/editAdress/editAdress.wxml";

/***/ }),

/***/ "./src/pages/editAdress/editAdress.jsx":
/*!*********************************************!*\
  !*** ./src/pages/editAdress/editAdress.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editAdress_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editAdress.jsx?taro&type=template&parse=PAGE& */ "./src/pages/editAdress/editAdress.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _editAdress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editAdress.jsx?taro&type=script&parse=PAGE& */ "./src/pages/editAdress/editAdress.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _editAdress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _editAdress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/editAdress/editAdress.jsx?taro&type=script&parse=PAGE&":
/*!**************************************************************************!*\
  !*** ./src/pages/editAdress/editAdress.jsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAdress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./editAdress.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/editAdress/editAdress.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAdress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAdress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAdress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAdress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAdress_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/editAdress/editAdress.jsx?taro&type=template&parse=PAGE&":
/*!****************************************************************************!*\
  !*** ./src/pages/editAdress/editAdress.jsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAdress_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=F:/proj/pos/taroApp/新建文件夹/zksrpos-shangcheng-wxapp/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./editAdress.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:\\proj\\pos\\taroApp\\新建文件夹\\zksrpos-shangcheng-wxapp\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/editAdress/editAdress.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAdress_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAdress_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAdress_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAdress_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/editAdress/editAdress.scss":
/*!**********************************************!*\
  !*** ./src/pages/editAdress/editAdress.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/editAdress/editAdress.jsx","runtime","vendors","common"]]]);