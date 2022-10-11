---
icon: edit
date: 2022-10-11
category:
  - 前段开发规范
tag:
  - prettier
---

# Prettier 配置

## 常用 prettier 配置写法如下
```javascript
// 第一种方式：.prettierrc 文件
{
  "bracketSpacing": true,
  "printWidth": 160,
  "semi": false,
  "singleQuote": true
}

// 第二种方式：prettier.config.js
module.exports = {
  "bracketSpacing": true,   // 是否在对象属性添加空格，这里选择是 { foo: bar }
  "printWidth": 160,        // 指定代码换行的行长度。单行代码宽度超过指定的最大宽度，将会换行，如果都不想换，可以添加 "proseWrap": "never"
  "semi": false,            // 是否在语句末尾打印分号，这里选择不加
  "singleQuote": true      // 是否使用单引号，这里选择使用
}

// 第三种方式：package.json 中的 prettier 属性
{
  "prettier": {
    "bracketSpacing": true,   // 是否在对象属性添加空格，这里选择是 { foo: bar }
    "printWidth": 160,        // 指定代码换行的行长度。单行代码宽度超过指定的最大宽度，将会换行，如果都不想换，可以添加 "proseWrap": "never"
    "semi": false,            // 是否在语句末尾打印分号，这里选择不加
    "singleQuote": true      // 是否使用单引号，这里选择使用
  }
}
```

## 基础配置项
```javascript
// prettier.config.js
module.exports = {
	printWidth: 100, // 指定代码换行的行长度。单行代码宽度超过指定的最大宽度，将会换行
  tabWidth: 2, // 指定每个缩进级别的空格数
  useTabs: true, // 使用制表符 (tab) 缩进行而不是空格 (space)
  semi: true, // 在语句末尾打印分号。true - 在每个语句的末尾添加分号。false- 仅在可能引入ASI故障的行的开头添加分号
  singleQuote: true, // 使用单引号而不是双引号
  quoteProps: "as-needed", // "as-needed" - 仅在需要时在对象属性周围添加引号。"consistent" - 如果对象中至少有一个属性需要引号，则引用所有属性。"preserve" - 尊重对象属性中引号的输入用法
  jsxSingleQuote: false, // 在JSX中使用单引号而不是双引号
  trailingComma: "none", // 多行时尽可能打印尾随逗号
  bracketSpacing: true, // 在对象文字中打印括号之间的空格
  jsxBracketSameLine: false, // 将 > 多行 JSX 元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭元素）
  arrowParens: "always", // 在单个箭头函数参数周围加上括号。"avoid" - 尽可能省略parens。例：x => x。"always" - 始终包括parens。例：(x) => x
	proseWrap: "never", // "always" - 如果超过打印宽度，请换行。"never" - 不要换行。"preserve" - 按原样显示。首先在v1.9.0中提供
}
```