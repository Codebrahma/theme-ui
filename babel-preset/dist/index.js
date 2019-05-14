"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pluginTransformReactJsx = _interopRequireDefault(require("@babel/plugin-transform-react-jsx"));

var _babelPluginJsxPragmatic = _interopRequireDefault(require("@emotion/babel-plugin-jsx-pragmatic"));

var _babelPluginEmotion = _interopRequireDefault(require("babel-plugin-emotion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let pragma = '___ThemeUIJSX';

var _default = (api, {
  sourceMap,
  autoLabel,
  labelFormat,
  instances,
  ...options
} = {}) => ({
  plugins: [[_babelPluginJsxPragmatic.default, {
    export: 'jsx',
    module: 'theme-ui',
    import: pragma
  }], [_pluginTransformReactJsx.default, {
    pragma,
    pragmaFrag: 'React.Fragment',
    ...options
  }], [_babelPluginEmotion.default, {
    sourceMap,
    autoLabel,
    labelFormat,
    instances // cssPropOptimization: true,

  }]]
});

exports.default = _default;