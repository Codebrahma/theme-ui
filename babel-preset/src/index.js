// based on Emotion's babel preset
// https://github.com/emotion-js/emotion/blob/master/packages/babel-preset-css-prop/src/index.js
import jsx from '@babel/plugin-transform-react-jsx'
import pragmatic from '@emotion/babel-plugin-jsx-pragmatic'
import emotion from 'babel-plugin-emotion'

let pragma = '___ThemeUIJSX'

export default (api, {
  sourceMap,
  autoLabel,
  labelFormat,
  instances,
  ...options
} = {}) => ({
  plugins: [
    [
      pragmatic,
      {
        export: 'jsx',
        module: 'theme-ui',
        import: pragma
      }
    ],
    [
      jsx,
      {
        pragma,
        pragmaFrag: 'React.Fragment',
        ...options,
      }
    ],
    [
      emotion,
      {
        sourceMap,
        autoLabel,
        labelFormat,
        instances,
        // cssPropOptimization: true,
      }
    ]
  ]
})
