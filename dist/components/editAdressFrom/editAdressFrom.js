(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/editAdressFrom/editAdressFrom"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/editAdressFrom/editAdressFrom.jsx?taro&type=script&parse=COMPONENT&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/editAdressFrom/editAdressFrom.jsx?taro&type=script&parse=COMPONENT& ***!
  \*****************************************************************************************************************************************************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditAdressFrom = (_temp2 = _class = function (_BaseComponent) {
  _inherits(EditAdressFrom, _BaseComponent);

  function EditAdressFrom() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EditAdressFrom);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditAdressFrom.__proto__ || Object.getPrototypeOf(EditAdressFrom)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__222", "$compid__223", "$compid__224", "$compid__225", "$compid__226", "$compid__227", "$compid__228", "$compid__229", "states", "inputChange", "tagClick"], _this.state = {}, _this.customComponents = ["AtInput", "AtTag"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditAdressFrom, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(EditAdressFrom.prototype.__proto__ || Object.getPrototypeOf(EditAdressFrom.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }

    // 定义 addGlobalClass 外部样式可以影响组件

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log(this.props.states);
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
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__222"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__222 = _genCompid2[0],
          $compid__222 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__223"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__223 = _genCompid4[0],
          $compid__223 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__224"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__224 = _genCompid6[0],
          $compid__224 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__225"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__225 = _genCompid8[0],
          $compid__225 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__226"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__226 = _genCompid10[0],
          $compid__226 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__227"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__227 = _genCompid12[0],
          $compid__227 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__228"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__228 = _genCompid14[0],
          $compid__228 = _genCompid14[1];

      var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "$compid__229"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__229 = _genCompid16[0],
          $compid__229 = _genCompid16[1];

      this.anonymousFunc0 = function (v, e) {
        return _this2.__props.inputChange(v, e);
      };

      this.anonymousFunc1 = function (v, e) {
        return _this2.__props.inputChange(v, e);
      };

      this.anonymousFunc2 = function (v, e) {
        return _this2.__props.inputChange(v, e);
      };

      this.anonymousFunc3 = function (v, e) {
        return _this2.__props.inputChange(v, e);
      };

      this.anonymousFunc4 = function (e) {
        return _this2.__props.tagClick(e);
      };

      this.anonymousFunc5 = function (e) {
        return _this2.__props.tagClick(e);
      };

      this.anonymousFunc6 = function (e) {
        return _this2.__props.tagClick(e);
      };

      _taroWeapp.propsManager.set({
        "className": "editadress-input-margin",
        "name": "name",
        "title": "\u6536\u8D27\u4EBA :",
        "type": "text",
        "placeholder": "\u8BF7\u8F93\u5165\u6536\u8D27\u4EBA\u540D\u79F0",
        "value": this.__props.states.name,
        "onChange": this.anonymousFunc0
      }, $compid__222, $prevCompid__222);
      _taroWeapp.propsManager.set({
        "className": "editadress-input-margin",
        "name": "mobileNum",
        "title": "\u624B\u673A\u53F7\u7801 :",
        "type": "number",
        "placeholder": "\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",
        "value": this.__props.states.mobileNum,
        "onChange": this.anonymousFunc1
      }, $compid__223, $prevCompid__223);
      _taroWeapp.propsManager.set({
        "className": "editadress-input-margin",
        "name": "adress",
        "title": "\u6536\u8D27\u5730\u5740 :",
        "type": "text",
        "placeholder": "\u8BF7\u8F93\u5165\u6536\u8D27\u5730\u5740",
        "value": this.__props.states.adress,
        "onChange": this.anonymousFunc2
      }, $compid__224, $prevCompid__224);
      _taroWeapp.propsManager.set({
        "className": "editadress-input-margin",
        "name": "homeNo",
        "title": "\u697C\u53F7\u95E8\u724C :",
        "type": "text",
        "placeholder": "\u8BF7\u8F93\u5165\u697C\u53F7\u95E8\u724C",
        "value": this.__props.states.homeNo,
        "onChange": this.anonymousFunc3
      }, $compid__225, $prevCompid__225);
      _taroWeapp.propsManager.set({
        "className": "editadress-input-margin",
        "title": "\u5730\u5740\u7C7B\u578B :",
        "disabled": true
      }, $compid__226, $prevCompid__226);
      _taroWeapp.propsManager.set({
        "onClick": this.anonymousFunc4,
        "active": this.__props.states.tagAcive.compony,
        "name": "compony",
        "size": "small"
      }, $compid__227, $prevCompid__227);
      _taroWeapp.propsManager.set({
        "onClick": this.anonymousFunc5,
        "active": this.__props.states.tagAcive.home,
        "name": "home",
        "size": "small"
      }, $compid__228, $prevCompid__228);
      _taroWeapp.propsManager.set({
        "onClick": this.anonymousFunc6,
        "active": this.__props.states.tagAcive.school,
        "name": "school",
        "size": "small"
      }, $compid__229, $prevCompid__229);
      Object.assign(this.__state, {
        $compid__222: $compid__222,
        $compid__223: $compid__223,
        $compid__224: $compid__224,
        $compid__225: $compid__225,
        $compid__226: $compid__226,
        $compid__227: $compid__227,
        $compid__228: $compid__228,
        $compid__229: $compid__229
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
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(e) {
      ;
    }
  }, {
    key: "anonymousFunc6",
    value: function anonymousFunc6(e) {
      ;
    }
  }]);

  return EditAdressFrom;
}(_taroWeapp.Component), _class.$$events = [], _class.options = {
  addGlobalClass: true
}, _class.$$componentPath = "components/editAdressFrom/editAdressFrom", _temp2);
exports.default = EditAdressFrom;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(EditAdressFrom));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:\\proj\\pos\\taroApp\\新建文件夹\\zksrpos-shangcheng-wxapp\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/editAdressFrom/editAdressFrom.jsx?taro&type=template&parse=COMPONENT&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:/proj/pos/taroApp/新建文件夹/zksrpos-shangcheng-wxapp/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/editAdressFrom/editAdressFrom.jsx?taro&type=template&parse=COMPONENT& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/editAdressFrom/editAdressFrom.wxml";

/***/ }),

/***/ "./src/components/editAdressFrom/editAdressFrom.jsx":
/*!**********************************************************!*\
  !*** ./src/components/editAdressFrom/editAdressFrom.jsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editAdressFrom_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editAdressFrom.jsx?taro&type=template&parse=COMPONENT& */ "./src/components/editAdressFrom/editAdressFrom.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _editAdressFrom_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editAdressFrom.jsx?taro&type=script&parse=COMPONENT& */ "./src/components/editAdressFrom/editAdressFrom.jsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _editAdressFrom_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _editAdressFrom_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/editAdressFrom/editAdressFrom.jsx?taro&type=script&parse=COMPONENT&":
/*!********************************************************************************************!*\
  !*** ./src/components/editAdressFrom/editAdressFrom.jsx?taro&type=script&parse=COMPONENT& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAdressFrom_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./editAdressFrom.jsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/editAdressFrom/editAdressFrom.jsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAdressFrom_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAdressFrom_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAdressFrom_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAdressFrom_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAdressFrom_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/editAdressFrom/editAdressFrom.jsx?taro&type=template&parse=COMPONENT&":
/*!**********************************************************************************************!*\
  !*** ./src/components/editAdressFrom/editAdressFrom.jsx?taro&type=template&parse=COMPONENT& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAdressFrom_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=F:/proj/pos/taroApp/新建文件夹/zksrpos-shangcheng-wxapp/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./editAdressFrom.jsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:\\proj\\pos\\taroApp\\新建文件夹\\zksrpos-shangcheng-wxapp\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/editAdressFrom/editAdressFrom.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAdressFrom_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAdressFrom_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAdressFrom_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_editAdressFrom_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/components/editAdressFrom/editAdressFrom.jsx","runtime","vendors"]]]);