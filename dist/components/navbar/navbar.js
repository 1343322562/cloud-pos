(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/navbar/navbar"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/navbar/navbar.jsx?taro&type=script&parse=COMPONENT&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/navbar/navbar.jsx?taro&type=script&parse=COMPONENT& ***!
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

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _main = __webpack_require__(/*! ../../tool/main */ "./src/tool/main.js");

__webpack_require__(/*! ./navbar.scss */ "./src/components/navbar/navbar.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * leftIcon：  左侧图标(默认箭头)
 * clickLeft： 左侧图标事件
 * color： 主题颜色
 * text：  标题
 * fixed： 是否 fixed 定位
 * rightFirstIcon：   右一图标
 * rightFirstClick：  右一图标事件
 */

var Navbar = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Navbar, _BaseComponent);

  function Navbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__221", "actTitle", "clickLeft", "backLevel", "rightFirstClick", "bg", "color", "leftIcon", "rightFirstIcon", "text", "fixed", "isShowCustomtTitle", "top"], _this.state = {
      actTitle: 1
    }, _this.customComponents = ["AtNavBar"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Navbar, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Navbar.prototype.__proto__ || Object.getPrototypeOf(Navbar.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "changeClick",
    value: function changeClick() {
      var actTitle = this.state.actTitle;
      actTitle = actTitle == 1 ? 2 : 1;
      this.setState({ actTitle: actTitle });
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__221"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__221 = _genCompid2[0],
          $compid__221 = _genCompid2[1];

      var clickLeft = void 0; // 左侧返回按钮的事件
      if (this.__props.clickLeft) {
        clickLeft = function clickLeft() {
          return _this2.__props.clickLeft();
        };
      } else {
        clickLeft = function clickLeft() {
          return (0, _main.pageBack)(_this2.__props.backLevel || 1);
        };
      }

      var rightFirstClick = void 0; // 右侧返回按钮的事件
      if (this.__props.rightFirstClick) {
        rightFirstClick = function rightFirstClick() {
          return _this2.__props.rightFirstClick();
        };
      } else {
        rightFirstClick = function rightFirstClick() {
          return (0, _main.pageBack)(_this2.__props.backLevel || 1);
        };
      }

      this.anonymousFunc0 = function () {
        return rightFirstClick();
      };

      this.anonymousFunc1 = function () {
        return clickLeft();
      };

      this.anonymousFunc2 = function (e) {
        return _this2.changeClick();
      };

      _taroWeapp.propsManager.set({
        "className": this.__props.bg && this.__props.bg + ' custom' || 'v-navbar-bg custom',
        "onClickRgIconSt": this.anonymousFunc0,
        "onClickLeftIcon": this.anonymousFunc1,
        "color": this.__props.color || '#999',
        "leftIconType": this.__props.leftIcon || 'chevron-left',
        "rightFirstIconType": this.__props.rightFirstIcon || 'list',
        "title": this.__props.text,
        "fixed": this.__props.fixed || false
      }, $compid__221, $prevCompid__221);
      Object.assign(this.__state, {
        $compid__221: $compid__221
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
  }]);

  return Navbar;
}(_taroWeapp.Component), _class.$$events = ["anonymousFunc2"], _class.options = {
  addGlobalClass: true
}, _class.$$componentPath = "components/navbar/navbar", _temp2);
exports.default = Navbar;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Navbar));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:\\proj\\pos\\taroApp\\新建文件夹\\zksrpos-shangcheng-wxapp\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/navbar/navbar.jsx?taro&type=template&parse=COMPONENT&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:/proj/pos/taroApp/新建文件夹/zksrpos-shangcheng-wxapp/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/navbar/navbar.jsx?taro&type=template&parse=COMPONENT& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/navbar/navbar.wxml";

/***/ }),

/***/ "./src/components/navbar/navbar.jsx":
/*!******************************************!*\
  !*** ./src/components/navbar/navbar.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.jsx?taro&type=template&parse=COMPONENT& */ "./src/components/navbar/navbar.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _navbar_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.jsx?taro&type=script&parse=COMPONENT& */ "./src/components/navbar/navbar.jsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _navbar_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _navbar_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/navbar/navbar.jsx?taro&type=script&parse=COMPONENT&":
/*!****************************************************************************!*\
  !*** ./src/components/navbar/navbar.jsx?taro&type=script&parse=COMPONENT& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_navbar_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./navbar.jsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/navbar/navbar.jsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_navbar_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_navbar_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_navbar_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_navbar_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_navbar_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/navbar/navbar.jsx?taro&type=template&parse=COMPONENT&":
/*!******************************************************************************!*\
  !*** ./src/components/navbar/navbar.jsx?taro&type=template&parse=COMPONENT& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_navbar_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=F:/proj/pos/taroApp/新建文件夹/zksrpos-shangcheng-wxapp/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./navbar.jsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:\\proj\\pos\\taroApp\\新建文件夹\\zksrpos-shangcheng-wxapp\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/navbar/navbar.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_navbar_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_navbar_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_navbar_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_navbar_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/navbar/navbar.scss":
/*!*******************************************!*\
  !*** ./src/components/navbar/navbar.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/components/navbar/navbar.jsx","runtime","vendors","common"]]]);