module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:tailwindcss/recommended',
	],
	'overrides': [],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint',
		'tailwindcss',
	],
	'rules': {
		'no-console': 'warn',
		'no-multiple-empty-lines': 'error',
		'object-curly-spacing': ['error', 'always'],
		'key-spacing': 'error',
		'keyword-spacing': 'error',
		'space-in-parens': ['error', 'never'],
		'space-before-blocks': 'error',
		'arrow-spacing': 'error',
		'indent': ['error', 'tab', { 'SwitchCase': 1 }],
		'quotes': ['error', 'single'],
		'semi': 'error',
		'space-infix-ops': 'error',
		'react/react-in-jsx-scope': 'off',

		'no-empty-function': ['error', { 'allow': ['arrowFunctions'] }],
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-var-requires': 'off',

		// tailwindcss
		// 'tailwindcss/classnames-order': 'off',
		'tailwindcss/no-custom-classname': 'off',
		'tailwindcss/enforces-negative-arbitrary-values': 'off',
	}
};
