module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"no-undef": 0, //关闭no-undef
		"eqeqeq": 2,//必须使用全等
		"no-eq-null": 2,//禁止对null使用==或!=运算符
		"no-implicit-coercion": 2,//禁止隐式转换
		"no-multi-spaces": 2,//不能用多余的空格 
		"no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
		"no-var": 2,//禁用var，用let和const代替
		"camelcase": 2,//强制驼峰法命名
		"indent": ["error", "tab"],//缩进风格
		"init-declarations": 2,//声明时必须赋初值
		"semi": [2, "always"],//语句强制分号结尾
		"keyword-spacing": 2,
		"no-unexpected-multiline": 2
	}
};
