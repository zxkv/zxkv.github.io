module.exports = {
	// 打开文件时是否基于内容自动检测TabSize
	detectIndentation: false,
	// 当箭头函数仅有一个参数时加上括号
	arrowParens: "avoid",
	// 控制对象字面量的空格输出
	bracketSpacing: true,
	// 将多行jsx元素的 > 放在最后一行的末尾，而不是单独放在下一行
	jsxBracketSameLine: false,
	// 在JSX中使用单引号而不是双引号
	jsxSingleQuote: false,
	// 指定每行代码的最佳长度
	printWidth: 140,
	// 是否在每行末尾添加分号
	semi: true,
	// 单/双引号
	singleQuote: false,
	// 每个制表符占用的空格数
	tabWidth: 4,
	// 控制尾随逗号的输出
	trailingComma: "none",
	// 使用制表符（tab）缩进
	useTabs: true,
	// 不让prettier使用eslint的代码格式进行校验
	eslintIntegration: false,
	// 不让prettier使用stylelint的代码格式进行校验
	stylelintIntegration: false,
	// 不让prettier使用tslint的代码格式进行校验
	tslintIntegration: false
};
