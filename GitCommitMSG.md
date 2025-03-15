# Git Commit Message 规范

## 格式

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

1. `<type>`: 提交的类型，必填。
2. `<scope>`: 提交的范围，可选。
3. `<subject>`: 提交的主题，必填。
4. `<body>`: 提交的详细描述，可选。
5. `<footer>`: 一些备注信息，可选。

## 类型

### 常用类型

- chore : 构建过程或辅助工具变动
- docs : 文档更新
- feat : 新功能（feature）
- fix : 修复bug
- perf : 性能优化
- refactor : 代码重构（非新增功能或修复bug）
- style : 代码格式调整（不影响代码运行）
- test : 添加或修改测试代码

### 版本控制

- cherry-pick : 合并指定提交
- merge : 合并分支
- revert : 回滚到上一个版本

### 项目管理

- feature : 新功能开发
- fix : 修复bug
- hotfix : 紧急修复
- init : 项目初始化
- release : 发布版本
- wip : 开发中的工作
