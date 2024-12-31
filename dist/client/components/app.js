"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var App = function App(props) {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    hide = _useState2[0],
    setHide = _useState2[1];
  var initialValue = [];

  // useEffect is a hook that allows you to perform side effects in function components
  var _useState3 = (0, _react.useState)(initialValue),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    items = _useState4[0],
    setItems = _useState4[1];
  /*   useEffect(() => {
    // Update the document title using the browser API
    (async () => {
      const response = await fetch('https://locakhost:4000/items');
      const data = await response.json();
      setItems(data);
    })();
  }, []); */

  var handleClick = function handleClick() {
    setHide(!hide);
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "App"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleClick
  }, "Hide"), /*#__PURE__*/_react["default"].createElement("div", null, !hide && /*#__PURE__*/_react["default"].createElement("ul", null, items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: item.id
    }, item.name);
  }))));
};
App.defaultProps = {
  items: []
};
var _default = exports["default"] = App;