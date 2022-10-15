module.exports = {
  root: true,
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-less', 'stylelint-config-prettier'],
  overrides: [
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less'
    },
    {
      files: ['**/*.html'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['ng-deep']
      }
    ]
  }
}
