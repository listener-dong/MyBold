---
icon: edit
date: 2022-10-11
category:
  - Git
tag:
  - git
  - github
star: true
---

# husky+commitlint集成

## 配置 git 提交的校验钩子

* husky: git提交时触发hooks
* commitlint: 对提交的内容做规范校验 husky，主要对pre-commit和commit-msg钩子做校验。

```shell
# 安装husky
pnpm install husky -D
# 初始化husky配置，在根目录新增.husky配置文件。初始化配置pre-commit
npx husky-init 
# 另外新增一个hooks，commit-msg
npx husky add .husky/commit-msg 
```

* 目录结构是下面这样子的：
  
<img :src="$withBase('/imgs/husky.png')" alt="husky">

* 在`commit-msg`文件中添加 `npm run commitlint`
  ```shell
  #!/usr/bin/env sh
  . "$(dirname -- "$0")/_/husky.sh"
  npm run commitlint
  ```
>在`pre-commit`文件中有个`npm run test`我们先注释掉，不然会报错。


## 安装commitlint
```shell
# 添加依赖文件
pnpm install @commitlint/config-conventional @commitlint/cli -D
```

* 添加配置文件，新建`commitlint.config.cjs`，然后添加下面的代码：
```shell
module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 校验规则
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'build',
      ],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
}
```

## 配置scripts

* 因为我们需要运行`npm run commitlint`，所以需要在`package.json`文件中添加如下代码：
  ```shell
  # 在scrips中添加下面的代码
  {
  "scripts": {
      # ...
      "commitlint": "commitlint --config commitlint.config.cjs -e -V"
    },
  }
  ```

## 配置完成

* 配置结束，现在当我们填写`commit`信息的时候，前面就需要带着下面的`subject`
  ```shell
  "feat", // 新增
  "fix", // 修复
  "docs", // 文档
  "style", // 样式
  "refactor", // 重构
  "perf", // 性能
  "test", // 测试
  "chore", // 琐事
  "revert", // 恢复
  "build" //打包
  ```

* 比如：git commit -m "配置commit信息",
  
  <img :src="$withBase('/imgs/commit_1.jpg')" alt="commit_1">

* 正确应该为`git commit -m "feat: 配置commit信息"`

  <img :src="$withBase('/imgs/commit_2.jpg')" alt="commit_2">

* 提交成功

## 使用 commitizen 做git规范化提交(可用可不用)

* 由于添加了commitlint验证，对于不熟悉提交规范的新手同学会有一定影响，可以添加 commitizen 工具，手动生成规范化commit。

* Commitizen是一个格式化commit message的工具。
* 
```shell
# 工具安装
yarn add -D commitizen
```

### 1.使用官方：cz-conventional-changelog

* 安装工具
* 
```shell
yarn add cz-conventional-changelog -D
```

* 配置命令
  
```shell
"script": {
    "commit": "cz"
}
```

* 在package.json 中添加定义commitizen使用规则，
```shell
{
	"config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  },
}
```
* 当执行git commit的时候，就可以提示我们填写代码规则了 

### 2.自定义 commitizen 规则
* 使用 cz-customizable 工具
```shell
# 安装依赖
yarn add cz-customizable -D
配置命令
"script": {
    "commit": "git-cz"
}
```

* 在package.json 中添加自定义commitizen，使用git-cz执行git commit命令
```shell
"config": {
    "commitizen": {
        "path": "./node_modules/cz-customizable"
    }
}
```

* 在根目录创建的.cz-config.js, 自定义commit提示内容
```shell
module.exports = {
  types: [
    { value: 'feat', name: '✨feat:     新功能' },
    { value: 'fix', name: '🐛fix:      修复' },
    { value: 'docs', name: '✏️docs:     文档变更' },
    { value: 'style', name: '💄style:    代码格式(不影响代码运行的变动)' },
    {
      value: 'refactor',
      name: '♻️refactor: 重构(既不是增加feature，也不是修复bug)'
    },
    { value: 'perf', name: '⚡️perf:     性能优化' },
    { value: 'test', name: '✅test:     增加测试' },
    { value: 'chore', name: '🚀chore:    构建过程或辅助工具的变动' },
    { value: 'revert', name: '⏪️revert:   回退' },
    { value: 'build', name: '📦️build:    打包' },
    { value: 'ci', name: '👷CI:   related changes' }
  ],
  // override the messages, defaults are as follows
  messages: {
    type: '请选择提交类型(必选):',
    // scope: '请输入文件修改范围(可选):',
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    // body: '请输入详细描述(可选，待优化去除，跳过即可):',
    // breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: '请输入要关闭的issue(待优化去除，跳过即可):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
  },
  // used if allowCustomScopes is true
  allowCustomScopes: true,
  // allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body', 'footer'],
  // limit subject length, commitlint默认是72
  subjectLimit: 72
}
```
* 当我们提交代码的时候，需要先git add .，然后执行npm run commit,就可以根据响应的提示填写commit信息 了