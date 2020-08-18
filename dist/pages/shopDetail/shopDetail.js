(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/shopDetail/shopDetail"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/shopDetail/shopDetail.jsx?taro&type=script&parse=PAGE&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/shopDetail/shopDetail.jsx?taro&type=script&parse=PAGE& ***!
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

var _class, _temp2; // top 背景

// 卡片视图


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./shopDetail.scss */ "./src/pages/shopDetail/shopDetail.scss");

var _main = __webpack_require__(/*! ../../tool/main */ "./src/tool/main.js");

var _http = __webpack_require__(/*! ../../api/http */ "./src/api/http.js");

var _http2 = _interopRequireDefault(_http);

var _action = __webpack_require__(/*! ../../store/action */ "./src/store/action.js");

var _action2 = _interopRequireDefault(_action);

var _phone = __webpack_require__(/*! ../../../public/images/phone.png */ "./public/images/phone.png");

var _phone2 = _interopRequireDefault(_phone);

var _addIcon = __webpack_require__(/*! ../../../public/images/addIcon.png */ "./public/images/addIcon.png");

var _addIcon2 = _interopRequireDefault(_addIcon);

var _subIcon = __webpack_require__(/*! ../../../public/images/subIcon.png */ "./public/images/subIcon.png");

var _subIcon2 = _interopRequireDefault(_subIcon);

var _moren = __webpack_require__(/*! ../../../public/images/moren.png */ "./public/images/moren.png");

var _moren2 = _interopRequireDefault(_moren);

var _notInfo = __webpack_require__(/*! ../../../public/images/notInfo.png */ "./public/images/notInfo.png");

var _notInfo2 = _interopRequireDefault(_notInfo);

var _storeMR = __webpack_require__(/*! ../../../public/images/storeMR.jpg */ "./public/images/storeMR.jpg");

var _storeMR2 = _interopRequireDefault(_storeMR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShopDetail = (_temp2 = _class = function (_BaseComponent) {
  _inherits(ShopDetail, _BaseComponent);

  function ShopDetail() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, ShopDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = ShopDetail.__proto__ || Object.getPrototypeOf(ShopDetail)).call.apply(_ref, [this].concat(args))), _this2), _this2.$usedState = ["anonymousState__temp7", "anonymousState__temp8", "$compid__216", "$compid__217", "$compid__218", "anonymousState__temp5", "anonymousState__temp6", "topBar", "topBoinding", "clsOneIndex", "clsTwoIndex", "currentClsId", "goodsData", "clsData", "carsObj", "openId", "storeInfo", "value"], _this2.state = {
      topBoinding: '', // 微信端 胶囊距离顶部位置
      clsOneIndex: 0, // cls1 下标 
      clsTwoIndex: 0, // cls2 下标
      currentClsId: '', // 当前 cls 下标
      goodsData: [],
      clsData: [],
      carsObj: {},
      openId: '',
      storeInfo: '' // 当前门店信息
    }, _this2.config = {
      navigationBarTitleText: '首页',
      navigationBarBackgroundColor: '#fec10d',
      navigationStyle: 'custom'
    }, _this2.anonymousFunc0Map = {}, _this2.anonymousFunc1Map = {}, _this2.anonymousFunc2Map = {}, _this2.anonymousFunc3Map = {}, _this2.anonymousFunc4Map = {}, _this2.customComponents = ["HeaderBG", "AtSearchBar", "CardView"], _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(ShopDetail, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ShopDetail.prototype.__proto__ || Object.getPrototypeOf(ShopDetail.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      (0, _main.loading)(1);
      console.log(33, this);
      console.log(34, getApp());
      var topBoinding = void 0;
      if (_main.IS_WEAPP_ENV) {
        topBoinding = _taroWeapp2.default.getMenuButtonBoundingClientRect().top;
      } // 微信端 胶囊距离顶部位置
      this.state.topBoinding = topBoinding;
      this.state.storeInfo = _taroWeapp2.default.getStorageSync('storeInfo');
      // this.state.openId = Taro.getStorageSync('openId')
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(33, this);
      var _this = this;
      var uid = this.$router.params.uid;
      console.log('params 中的 uid', uid);
      console.log(_taroWeapp2.default.getSystemInfoSync());

      this.searchStore(uid); // 查询并保存门店
      // 获取 openid 保存
      (0, _main.getOpenId)({
        success: function success(res) {
          console.log(res);
          var userObj = _taroWeapp2.default.getStorageSync('userObj');
          if (!userObj) {
            _this.getUserInfo(res.data.data);
          }
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      this.getClsData();
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "getUserInfo",
    value: function getUserInfo(openId) {
      var _this = this;
      var storeInfo = _taroWeapp2.default.getStorageSync('storeInfo');
      _http2.default.Users.saveMember({
        data: {
          openid: openId,
          nowStoreId: storeInfo.uid || 2
        }
      }).then(function (res) {
        var userObj = res.data;
        _taroWeapp2.default.setStorageSync('userObj', userObj);
      });
    }

    // 获取并缓存门店信息

  }, {
    key: "searchStore",
    value: function searchStore() {
      var uid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

      var _this = this;
      _http2.default.Store.searchStore({
        data: { id: uid || 2 }
      }).then(function (res) {
        console.log(73, res);
        if (!res.data) {
          return (0, _main.toast)('查询门店信息失败');
        }_taroWeapp2.default.setStorageSync('storeInfo', res.data);
        _this.setState({ storeInfo: res.data });
      }).catch(function (err) {
        if (err) {
          (0, _main.toast)('查询门店信息失败');
        }
      });
    }
  }, {
    key: "getGoodsData",
    value: function getGoodsData() {
      var _this3 = this;

      var clsId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.currentClsId;
      var type = arguments[1];
      var _state = this.state,
          storeInfo = _state.storeInfo,
          openId = _state.openId;

      var carsObj = _taroWeapp2.default.getStorageSync('carsObj');
      console.log('s', carsObj, this.state);
      if (clsId == this.state.currentClsId && type == 'click') {
        return;
      }_http2.default.Goods.searchOnlineProduct({
        data: { id: '', uid: storeInfo.uid, cid: clsId, condition: '' }
      }).then(function (res) {
        console.log(67, res, carsObj);
        var goodsData = res.data;
        goodsData.forEach(function (item) {
          if (carsObj[item.id]) {
            console.log(321);
            item.saleNum = carsObj[item.id].saleNum;
            // item.salePrice = item.salePrice.toFixed(2)
          }
        });
        _this3.setState({ goodsData: goodsData });
      });
    }

    // 获取商品类别

  }, {
    key: "getClsData",
    value: function getClsData() {
      var _Taro$getStorageSync = _taroWeapp2.default.getStorageSync('storeInfo'),
          uid = _Taro$getStorageSync.uid;

      console.log('这是 uid', uid);
      var _this = this;
      if (!uid) {
        return setTimeout(function () {
          return _this.getClsData();
        }, 500);
      }console.log(1.03, uid);
      _http2.default.Store.searchProductCls({
        data: { uid: uid }
      }).then(function (res) {
        console.log('请求类别', res);
        var data = res.data;
        var temp = [];
        data.forEach(function (item, index) {
          if (item.pid == 0) {
            temp.push(item);
          }
        });
        temp.forEach(function (item) {
          item.cls2 = [];
          data.forEach(function (t) {
            if (item.id == t.pid) {
              item.cls2.push(t);
            }
          });
        });
        console.log(temp);
        var oneIndex = _this.state.clsOneIndex || 0;
        var twoInddex = _this.state.clsTwoIndex || 0;
        var currentClsId = temp[oneIndex].cls2[twoInddex].id;
        _this.setState({ clsData: temp, currentClsId: currentClsId });
        _this.getGoodsData(currentClsId);
      });
      // let data = [{"id":3,"pid":0,"uid":2,"clsName":"默认"},{"id":4,"pid":3,"uid":2,"clsName":"其它"},{"id":44,"pid":0,"uid":2,"clsName":"酒水饮料"},{"id":46,"pid":0,"uid":2,"clsName":"休闲食品"},{"id":47,"pid":0,"uid":2,"clsName":"熟食"},{"id":48,"pid":0,"uid":2,"clsName":"粮油调料"},{"id":49,"pid":48,"uid":2,"clsName":"调料"},{"id":50,"pid":48,"uid":2,"clsName":"其它"},{"id":64,"pid":46,"uid":2,"clsName":"方便面"},{"id":7632,"pid":44,"uid":2,"clsName":"其它"},{"id":28831,"pid":3,"uid":2,"clsName":"冲剂"},{"id":28832,"pid":3,"uid":2,"clsName":"豆制品"},{"id":67485,"pid":46,"uid":2,"clsName":"301冲调食品"},{"id":87642,"pid":47,"uid":2,"clsName":"其它"},{"id":94533,"pid":0,"uid":2,"clsName":"实时称重"},{"id":94534,"pid":94533,"uid":2,"clsName":"菜"}]
      // let temp = []
      // data.forEach((item, index) => {
      //   if (item.pid == 0) {
      //     temp.push(item)
      //   }
      // })
      // temp.forEach(item => {
      //   item.cls2 = []
      //   data.forEach(t => {
      //     if (item.id == t.pid) {
      //       item.cls2.push(t)
      //     }
      //   })
      // })
      // console.log(86,temp)
      // this.setState({ clsData: temp })
    }

    // 则边栏 items 选中效果更新

  }, {
    key: "onClsOneClick",
    value: function onClsOneClick(i) {
      console.log(108, i);
      var clsData = this.state.clsData;
      // const clsId = clsData[i].cls2.length == 0 ? clsData[i].id : clsData[i].cls2[0].id 

      var clsId = clsData[i].cls2[0].id;
      console.log(clsId);
      this.setState({ clsOneIndex: i, clsTwoIndex: 0, currentClsId: clsId });
      this.getGoodsData(clsId, 'click');
    }
  }, {
    key: "onClsTwoClick",
    value: function onClsTwoClick(i, clsId) {
      console.log(113, i, clsId);
      this.setState({ clsTwoIndex: i, currentClsId: clsId });
      this.getGoodsData(clsId, 'click');
    }

    // 商品 tag 分类
    // onGoodTagClick(e) {
    //   let goodsData = this.state.goodsData
    //   let index = this.state.sliderItemsIndex

    //   
    // }

    // 点击改变商品数量

  }, {
    key: "onChangeGoodNumClick",
    value: function onChangeGoodNumClick(e, obj) {
      console.log(e, obj);
      var type = obj.type,
          index = obj.index,
          item = this.state.goodsData[index];

      console.log(item);
      switch (type) {
        case 'add':
          if (!('saleNum' in item)) {
            item.saleNum = 0;
          }item.saleNum++;
          // 改变商品数量, 并保存购物车
          _action2.default.CHANGE_CARTS(this.state.goodsData[index], type);
          break;
        case 'sub':
          if (!item.saleNum) {
            return item.saleNum = 0;
          }item.saleNum--;
          console.log(193, false in item || item.saleNum == 0, type, item.saleNum);
          // 改变商品数量, 并保存购物车
          _action2.default.CHANGE_CARTS(this.state.goodsData[index], type);
          break;
      }
      console.log(94, item);
      this.setState(_defineProperty({}, "goodsData[" + index + "]", item));
    }

    // 点击复制商家电话号码

  }, {
    key: "onCallShopClick",
    value: function onCallShopClick(number) {
      _taroWeapp2.default.makePhoneCall({
        phoneNumber: number // contactPhone
      });
    }

    // 渲染侧边栏

  }, {
    key: "_createSliderItemsSelectedData",
    value: function _createSliderItemsSelectedData(_$uid) {
      var _this4 = this;

      return function () {
        var _state2 = _this4.state,
            clsOneIndex = _state2.clsOneIndex,
            clsTwoIndex = _state2.clsTwoIndex,
            clsData = _state2.clsData;

        console.log(161, clsData);
        var loopArray30 = clsData.map(function (item, index) {
          item = {
            $original: (0, _taroWeapp.internal_get_original)(item)
          };

          var _$indexKey = "jhzzz" + index;

          _this4.anonymousFunc0Map[_$indexKey] = function () {
            return _this4.onClsOneClick(index);
          };

          var $anonymousCallee__4 = item.$original.cls2.map(function (t, i) {
            t = {
              $original: (0, _taroWeapp.internal_get_original)(t)
            };
            var $loopState__temp2 = (0, _taroWeapp.internal_inline_style)(clsOneIndex == index ? "height:40px;" : 'height: 0;overflow: hidden;');
            var _$indexKey2 = "jizzz" + index + "-" + i;

            _this4.anonymousFunc1Map[_$indexKey2] = function () {
              return _this4.onClsTwoClick(i, t.$original.id);
            };

            return {
              $loopState__temp2: $loopState__temp2,
              _$indexKey2: _$indexKey2,
              $original: t.$original
            };
          });
          return {
            _$indexKey: _$indexKey,
            $anonymousCallee__4: $anonymousCallee__4,
            $original: item.$original
          };
        });
        return {
          loopArray30: loopArray30,
          clsData: clsData,
          clsOneIndex: clsOneIndex,
          clsTwoIndex: clsTwoIndex
        };
      };
    }

    // 渲染 商品分类 tag
    // renderGoodTags() {
    //   const goodsType = this.state.goodsType
    //   let index = this.state.clsOneIndex
    //   // 无 tag分类信息时，不渲染
    //   if (goodsType.length == 0) return null

    //   let renderGoodTagList = goodsType[index].tags.map((item, index) => {
    //     return (
    //       <AtTag key={index} onClick={e => this.onGoodTagClick(e)} active={item.active} size='normal' name={item.tagName} className='type-tag'>{item.tagName}</AtTag>
    //     )
    //   })
    //   return renderGoodTagList
    // }

    // 渲染商品卡片


  }, {
    key: "_createGoodCardsData",
    value: function _createGoodCardsData(_$uid) {
      var _this5 = this;

      return function () {
        console.log(250, _this5.state.goodsData);
        var _state3 = _this5.state,
            goodsData = _state3.goodsData,
            carsObj = _state3.carsObj;

        var loopArray31 = goodsData.length ? goodsData.map(function (item, index) {
          item = {
            $original: (0, _taroWeapp.internal_get_original)(item)
          };

          var _$indexKey3 = "jjzzz" + index;

          _this5.anonymousFunc2Map[_$indexKey3] = function () {
            return '';
          };

          var $loopState__temp4 = goodsData.length ? (0, _taroWeapp.internal_inline_style)({ '-webkit-box-orient': 'vertical' }) : null;

          var _$indexKey4 = "baazz" + index;

          _this5.anonymousFunc3Map[_$indexKey4] = function (e) {
            return _this5.onChangeGoodNumClick(e, { type: 'sub', index: index });
          };

          var _$indexKey5 = "babzz" + index;

          _this5.anonymousFunc4Map[_$indexKey5] = function (e) {
            return _this5.onChangeGoodNumClick(e, { type: 'add', index: index });
          };

          return {
            _$indexKey3: _$indexKey3,
            $loopState__temp4: $loopState__temp4,
            _$indexKey4: _$indexKey4,
            _$indexKey5: _$indexKey5,
            $original: item.$original
          };
        }) : [];
        return {
          loopArray31: loopArray31,
          goodsData: goodsData,
          moren: _moren2.default,
          subIcon: _subIcon2.default,
          addIcon: _addIcon2.default,
          notInfo: _notInfo2.default
        };
      };
    }
  }, {
    key: "onGoodTypesClick",
    value: function onGoodTypesClick(i) {
      console.log(i);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this6 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__216"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__216 = _genCompid2[0],
          $compid__216 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__217"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__217 = _genCompid4[0],
          $compid__217 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__218"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__218 = _genCompid6[0],
          $compid__218 = _genCompid6[1];

      console.log('进入render');

      var anonymousState__temp5 = this._createSliderItemsSelectedData(__prefix + "baczzzzzzz")();

      // 侧边栏
      // let RenderGoodTagList = this.renderGoodTags()
      var anonymousState__temp6 = this._createGoodCardsData(__prefix + "badzzzzzzz")();

      // 商品卡片
      var storeInfo = this.__state.storeInfo;

      var topBar = void 0;
      if (_main.IS_WEAPP_ENV) {
        topBar = 'topBar';
      }console.log(topBar, this.__state.goodsType);
      var anonymousState__temp7 = (0, _taroWeapp.internal_inline_style)({ 'padding-top': this.__state.topBoinding + 'px' });
      var anonymousState__temp8 = "\u5730\u5740: " + storeInfo.contactAddr + " " + '\n' + " \u8054\u7CFB\u4EBA: " + storeInfo.contactName;

      this.anonymousFunc5 = function () {
        return _this6.onCallShopClick(storeInfo.contactPhone);
      };

      _taroWeapp.propsManager.set({
        "headerProps": "h5-top-bg"
      }, $compid__216, $prevCompid__216);
      _taroWeapp.propsManager.set({
        "className": "sd-seach",
        "inputType": "text",
        "value": this.__state.value,
        "onChange": this.onChange,
        "onActionClick": this.onActionClick
      }, $compid__217, $prevCompid__217);
      _taroWeapp.propsManager.set({
        "leftImgSize": "large",
        "leftImgUrl": _storeMR2.default,
        "title": storeInfo.storeName,
        "infoType": 'Text',
        "infoContent": anonymousState__temp8,
        "rightImgUrl": _phone2.default,
        "rightImgStyle": "width: 25px;height: 25px;background: #fff;",
        "rightImgText": "\u8054\u7CFB\u5356\u5BB6",
        "onRightImgClick": this.anonymousFunc5
      }, $compid__218, $prevCompid__218);
      Object.assign(this.__state, {
        anonymousState__temp7: anonymousState__temp7,
        anonymousState__temp8: anonymousState__temp8,
        $compid__216: $compid__216,
        $compid__217: $compid__217,
        $compid__218: $compid__218,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        topBar: topBar
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
    value: function anonymousFunc1(_$indexKey2) {
      var _anonymousFunc1Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc1Map[_$indexKey2] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey2].apply(_anonymousFunc1Map, e);
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(_$indexKey3) {
      var _anonymousFunc2Map;

      ;

      for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }

      return this.anonymousFunc2Map[_$indexKey3] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey3].apply(_anonymousFunc2Map, e);
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(_$indexKey4) {
      var _anonymousFunc3Map;

      ;

      for (var _len5 = arguments.length, e = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        e[_key5 - 1] = arguments[_key5];
      }

      return this.anonymousFunc3Map[_$indexKey4] && (_anonymousFunc3Map = this.anonymousFunc3Map)[_$indexKey4].apply(_anonymousFunc3Map, e);
    }
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(_$indexKey5) {
      var _anonymousFunc4Map;

      ;

      for (var _len6 = arguments.length, e = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        e[_key6 - 1] = arguments[_key6];
      }

      return this.anonymousFunc4Map[_$indexKey5] && (_anonymousFunc4Map = this.anonymousFunc4Map)[_$indexKey5].apply(_anonymousFunc4Map, e);
    }
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(e) {
      ;
    }
  }]);

  return ShopDetail;
}(_taroWeapp.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4"], _class.$$componentPath = "pages/shopDetail/shopDetail", _temp2);
exports.default = ShopDetail;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(ShopDetail, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:\\proj\\pos\\taroApp\\新建文件夹\\zksrpos-shangcheng-wxapp\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/shopDetail/shopDetail.jsx?taro&type=template&parse=PAGE&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:/proj/pos/taroApp/新建文件夹/zksrpos-shangcheng-wxapp/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/shopDetail/shopDetail.jsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/shopDetail/shopDetail.wxml";

/***/ }),

/***/ "./public/images/notInfo.png":
/*!***********************************!*\
  !*** ./public/images/notInfo.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/images/phone.png":
/*!*********************************!*\
  !*** ./public/images/phone.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAMIElEQVR4Xu2dCawdVRnHv28eXZ7xWUU0gaqQWoU+Yl7vnLmvNI20JUFSq0ZkKdoWlEVFkVqMoEE2RWjrBjZKIJZEEBSrsqiIIPGx1FLu+eY+cQMi4hJQCS6AElrfnc98Mq23r3eZmXtmuXfOJDck9Jxv+Z/fO7Od+Q6CPUqtAJY6e5s8WABKDoEFwAJQcgVKnr6dASwAJVeg5OnbGcACUHIFSp6+nQEsACVXoOTp2xnAAlByBUqefiYzwNjY2NyhoaFFALAIEceZ+S4AeGB4eLi2bdu250o+BrmmnyoASqnXA8DZ4a9Vok8y8zWzZs3avH379r/nqkRJnacCgFJqTtPAHxBB218h4me11t+M0NY2MaiAcQCUUmeGg39YgjivI6JTEvSzXRIqYBQApdTlAPCJhLHs7vZXAFhCRI/1aMd2j6CAMQCUUld2ONdHCGXvJo7jvK5Wq/0pdkfbIZYCRgDwPO8eZj4ylufujZ8bGRl59cTExAvdm9oWSRXoCYDR0dGZw8PDfwOAlyYNoEu/m4noXSnZtmYBki8JW7hw4SFDQ0OPp60iIl6htV6ftp+y2k80A1QqlcWO4/wsK9GYeb3v+1dk5a9MfmID4Hneccz8nYxFepaZj/J9nzL2O/DuYgGglDoBAL6dkyo/JKK35eR7YN1GBsDzvGXM/NM8lUDE87TWm/KMYdB8RwZAKSWDvyxnAV4IguCoer2+Pec4BsZ9JABc170YES8qSNZ3EdFbChJL34fRFYAiTP0tVL6AiC7te/ULkEBXAAoy9U+XKnAc56harXZPATTs6xA6AlCwqX+60LcT0cq+Vr8AwbcFwHXd+Yi4AwD2L0CcLUNg5lW+7+d1W1pUWWLF1RYApdSXAeAjsaxl3BgR79VaL83Y7UC5awnAokWLXjM1NdUXr2IR8TSt9bUDNSoZJtMSgJyf+MVN3583b9741q1bG3E72vZt3gZ6nnc1M7+/jwRaR0RyyrJHTAXazQC/BoAFMW3l2fwRWXJORM/kGUQ/+t4HgHCRx85+S4aZz/d9/7J+izvvePcBoFKpeI7j1PIOLIH/J2bPnr3AfmgST7l9ACjoo99IWSHicq31RKTGttH/FBgoAJj5JN/3b7JjG12BgQIAAOzdQPSxbz0DyP9VSslS7FkxbeXeHBFP1lpfn3sgfRRAy9tA13VvRcR39FEeEuoEES3vs5hzD7clAJ7nrWfmL+YeXYwA7AVgDLGamrYEIOtl38lC36vXiUS01YCd0pno9DbwYQA4tMiKMPOPAOBy3/fvK3KcRY6t03qAjYh4bkGD/wsAXEZEmwsaX9+E1RYAz/OWMPP9BctEnvXfKNcnvu//tmCx9WU4HZeEKaUEgCUFyOwXMvDyI6I/FiCegQmhIwCe553LzBtzzPZORPyGvbdPbwS6AXAoM8vFYKYHM18vA09Ed2bquITOui4Lz3hxyNPM/D7f939QwrHIJeWuALiuqxBRZxDdb5h5rf0COAOluz0Imh5CFrMAIp6itb4u2/Stt64zgEiU9iyAiHdorVfY4chegUgASFhpzgLM/AHf96/JPn3rMTIAac4CzOzZc38+MEYGQMJTSn0FAD5kOlQiihWHaf9lthdL+LD4sxRneJVJ0ewMYFLNeLZiARDOAlIKVkrCGjvsNYAxKWMbig3A/PnzZ82ZM0dKxLmxvbXvYKt+GBQzjqnYAIS3hWsQ0fTauw8T0VfjBG/b9q5AIgBCCEyvG/x9EARL6vX6k72nZS1EVSAxAGl8QGLLwkYdNnPtEgMQXhBK+dZ15sIBcBxnma39Y1LRzrZ6AmDx4sX779q1Sz7FepPBkG1FUINidjPVEwBi3PO845nZ9IrcM4joa92Ct//euwI9AxCeCq4CgA/2Hs4eC4+G28Y8bdCmNdVCAVMAHChf5gDAG02pzMzX+r5/mil71k5rBYwAEN4WrpZlXIaFthVBDQs63ZwxAEIItiDiqSZjZuY1vu/fYNKmtfV/BYwCUKlUDnYc524AkB1DTR3PzJw5c57dWdSUnHvbMQpAeEH4TgC42XC4PyeihYZtWnO9bBrVST2l1KcA4DOGFb6BiNYYtll6c8ZngN2KKqWkVMuJJhW21wMm1XzRVmoAVKvV1wZB8OMU6g0eYz8YMQdCagBIiJ7nrWDm282Fu8fSsUR0Swp2S2cyVQBCCNL6vnA1EckHo/boQYHUAQghuF7O3z3E2a6rfWfQo6iZADA+Pv7KRqMhp4LxHuNt1b1vSsOFO7AcAQCLAeB3APAAIt6mtZZKJ7kcmQAgmYV1hwSCl6eQ6SeJaEMKdo2YrFQqo47jyJL6dtvuyZPOzUQkO7RkemQGQHgqOJmZv55ShhuJSFYsF+oIB1+2tTm8W2DMfInv+xd3a2fy3zMFQAJ3XfdSRDzfZBJNtrYSkdFnD73EGe68ckeUwW/yc78U5cjqE/nMAZBElVLyFyH7EKdxyAbTi4noP2kYj2NTKfV5APhYnD672zLz1fvtt9/GBx988PEk/aP2yQWAEIJJABiLGmjMdv9g5vE8C0lVq9VqEATyFdVQzNibmz8BAHJqS60aWm4AhBA8DwDDPQjUsavjOEfXarWfpGW/k12llFzYvceEb1lnwcznEtGfTdhrtpErACEEbDqpvRJEPF1rvSVNH9Ntu677drm9M+zzl1K30fQtY+4AZAEBAFxKRBcYHpC25pRS8g4krQ2ujd7yFgKALCCQymMzZsw4a8eOHc+mCYLneWuZOdVSN4h4U3hK6LlmYmEAyAICALgPEddpretpQaCUkoc5aTzxnB7yI8z8cd/3v99LLoUCICMI/g0AG0ZGRjZMTExM9SLe9L6e553FzKldsbeJ9UIiSrz4pnAAZASBuJG/1A2mXisrpeaENjOvsI6I3wtPCY/FBbqQAGQIgbiSL5AEhNjiNYud0jK4OOP5cBAEp9brdXn2EPkoLAAhBFntWSDl5wWCKyMr19SwWq0uDILgHgB4WZL+Bvs8hYir4mydV2gARJiM9y+6KwiCjfV6XZa2Rz6UUvK8/5jIHdJtOIWIR0eFoPAAhBBkunkFM39pampqw0MPPfRUp7FSSh0o9Y0Q8aJ0xzS+9ah7KPUFAJJ+DqXrH2Xmq5j5znq9Lptp7zmaBv4MADgo/vBk0yMKBH0DQHhNIDUKZWFF1sckM98qeygholzly+8lWQeRxF8QBIdPB7jZTl8BEM4EqT9pSyJ0gftMNhqN5ZOTk/9sFWPfARBeExyDiF+IudCiwGOUemjvJaKWK7H6EgCRK1xtIxAUZgVQ6sOY3MGVRPTRgZkBpl2QXQgAlyTXZvB7IuK9WuulAwlAeF1wHDPLbHDw4A9nogz/RUQjAwtAeIdwGAAIBG9NJNFgd5okospAA7A7Oc/zNslr0sEez3jZdSrA2bcXgZ0kcF33WESU6wKT9QvjqV6s1m0/ph1IAMJTwgHhxaHxDS6KNbZdo/lDo9FYOFDPAbqm3NTA87yT5IsbkyXs4vjPu223vRgGdgZoFr5SqRzkOI5AcHreA5Klf1koorU+rpPPUgDQdIEo3yYKCIdkORA5+XqemY/sthlXqQCQgZDSNcx8DjO3fDKW02AZd8vM5/u+f1k3w6UDYLcgruu+GRHPAQApazdQBzN/y/f9d0dJqrQANIEg29/IB5yDUodwCxFFvtYpPQDhLaO825fZQEBIo4BFlD9GE21uJKLVcQxZAJrUcl13ASKuBwBZ6dNvx+1EtDJu0BaAFoq5rnsEIp4JACfHFTSn9om33bMAdBixarW6lJnPZOZVOQ1sV7fM/F3f94/v2rBNAwtABOWUUvKlr8wIRbtjkMJSZ0dIoW0TC0AM9ZRSKxFR1iTmPiMg4nla600xwm/Z1AKQQMFKpeI5jrMWAOT3igQmeunyCAB82lSVVAtAD0MhTxUbjcZaRJQqqAt6MBWpKzNvQsTPEZGxzbQsAJGk79xodHR05uzZs09AxBUAIL/9DZjdY4KZb3McZ5PWeptJu2LLAmBYUdlMc+fOnStMwICIUvzhFq31tYbD3GPOApCWslKs8EUYliGirMeTR83y37ldXG6Vr5CGhoburtVq8tVyqocFIFV59zU+NjY2d8aMGW9o5ZaZt2Vd4NICkDEARXNnASjaiGQcz38B36buroAE7GsAAAAASUVORK5CYII="

/***/ }),

/***/ "./public/images/storeMR.jpg":
/*!***********************************!*\
  !*** ./public/images/storeMR.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/pages/shopDetail/shopDetail.jsx":
/*!*********************************************!*\
  !*** ./src/pages/shopDetail/shopDetail.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shopDetail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopDetail.jsx?taro&type=template&parse=PAGE& */ "./src/pages/shopDetail/shopDetail.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _shopDetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopDetail.jsx?taro&type=script&parse=PAGE& */ "./src/pages/shopDetail/shopDetail.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _shopDetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _shopDetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/shopDetail/shopDetail.jsx?taro&type=script&parse=PAGE&":
/*!**************************************************************************!*\
  !*** ./src/pages/shopDetail/shopDetail.jsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_shopDetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./shopDetail.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/shopDetail/shopDetail.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_shopDetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_shopDetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_shopDetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_shopDetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_shopDetail_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/shopDetail/shopDetail.jsx?taro&type=template&parse=PAGE&":
/*!****************************************************************************!*\
  !*** ./src/pages/shopDetail/shopDetail.jsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_shopDetail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=F:/proj/pos/taroApp/新建文件夹/zksrpos-shangcheng-wxapp/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./shopDetail.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=F:\\proj\\pos\\taroApp\\新建文件夹\\zksrpos-shangcheng-wxapp\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/shopDetail/shopDetail.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_shopDetail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_shopDetail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_shopDetail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_F_proj_pos_taroApp_zksrpos_shangcheng_wxapp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_shopDetail_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/shopDetail/shopDetail.scss":
/*!**********************************************!*\
  !*** ./src/pages/shopDetail/shopDetail.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/shopDetail/shopDetail.jsx","runtime","vendors","common"]]]);