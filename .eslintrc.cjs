const prettierConfig = require('./prettier.config.cjs')

module.exports = {
  root: true,
  parserOptions: { ecmaVersion: 2021 },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['tsconfig.json'],
        createDefaultProgram: true
      },
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'plugin:import/recommended',
        'plugin:rxjs/recommended',
        'plugin:prettier/recommended'
      ],
      rules: {
        'prettier/prettier': ['error', prettierConfig],
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'app',
            style: 'camelCase'
          }
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: ['app', 'layout'],
            style: 'kebab-case'
          }
        ],
        'import/no-unresolved': 'off',

        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', ['internal', 'parent', 'sibling', 'index'], 'unknown'],
            pathGroups: [
              {
                pattern: '@/**',
                group: 'external',
                position: 'after'
              }
            ],
            pathGroupsExcludedImportTypes: ['builtin'],
            'newlines-between': 'always-and-inside-groups',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true
            }
          }
        ]
      }
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {}
    },
    {
      files: ['*.html'],
      excludedFiles: ['*inline-template-*.component.html'],
      extends: ['plugin:prettier/recommended'],
      rules: {
        'prettier/prettier': ['error', { parser: 'angular' }],
        '@angular-eslint/template/eqeqeq': 'off'
      }
    }
  ]
}
