exports.onCreateBabelConfig = ({ actions }, options = {}) => {
  actions.setBabelPreset({
    name: `babel-preset-theme-ui`,
    options
  })
}
