# 项目规则 - 下落香樟树博客

## 项目概述

这是一个基于 RSPress 的前端技术博客项目，主要用于记录和分享前端开发经验、技术笔记和解决方案。

## 技术栈

- **静态站点生成器**: RSPress
- **包管理器**: Bun (推荐) / npm / yarn
- **代码格式化**: Prettier
- **Git 钩子**: Husky + lint-staged
- **部署平台**: GitHub Pages, Render, Netlify

## 开发规范

### 代码风格

1. **格式化配置**
    - 使用 Tab 缩进 (tabWidth: 4)
    - 行宽限制 140 字符
    - 使用分号结尾
    - 使用双引号
    - 对象括号内保留空格
    - 箭头函数参数避免括号 (单参数时)
    - 不使用尾随逗号

2. **提交前检查**
    - 所有 `.js`, `.mjs`, `.vue`, `.md`, `.mdx` 文件自动格式化
    - 所有 `.css`, `.scss`, `.less` 文件自动格式化
    - 使用 Husky pre-commit 钩子确保代码质量

### 文件结构规范

```
├── docs/                    # 文档内容目录
│   ├── blog/               # 博客文章
│   ├── dev/                # 开发相关
│   ├── note/               # 学习笔记
│   ├── page/               # 页面内容
│   ├── record/             # 记录文档
│   ├── web/                # Web 相关
│   └── public/             # 静态资源
├── src/                    # 源码目录
│   ├── components/         # React 组件
│   └── utils/              # 工具函数
└── .trae/                  # Trae AI 配置
```

### 内容创作规范

1. **文档格式**
    - 使用 Markdown (.md) 或 MDX (.mdx) 格式
    - 每个目录包含 `_meta.json` 配置文件
    - 文章需包含适当的标题层级结构

2. **图片资源**
    - 图片存放在对应目录的 `img/` 子目录中
    - 使用相对路径引用图片
    - 图片文件名使用小写字母和连字符

3. **代码示例**
    - 启用行号显示
    - 使用适当的语言标识符
    - 长代码块默认不换行

## 开发流程

### 本地开发

```bash
# 安装依赖
bun install

# 启动开发服务器
bun run dev

# 构建生产版本
bun run build

# 预览构建结果
bun run preview
```

### 部署流程

1. **自动部署**
    - 推送到 `master` 分支自动触发 GitHub Actions
    - 自动构建并部署到 GitHub Pages
    - 同步部署到 Render 和 Netlify

2. **手动部署**
    - 可通过 GitHub Actions 手动触发部署
    - 确保构建成功后再进行部署

## 配置管理

### 站点配置

- **主配置文件**: `rspress.config.mjs`
- **输出目录**: `doc_build`
- **根目录**: `docs`
- **基础路径**: `/`

### 插件配置

- `rspress-plugin-file-tree`: 文件树展示
- `rspress-plugin-reading-time`: 阅读时间估算
- `rspress-plugin-font-open-sans`: 字体优化
- `@rsbuild/plugin-image-compress`: 图片压缩
- `rsbuild-plugin-open-graph`: Open Graph 元数据

## 内容管理

### 分类体系

- **blog/**: 技术博客文章
- **dev/**: 开发工具和环境配置
- **note/**: 学习笔记和技术总结
- **record/**: 项目记录和构建日志
- **web/**: Web 开发相关内容

### 元数据管理

- 每个目录使用 `_meta.json` 定义导航和排序
- 文章支持最后更新时间显示
- 支持阅读时间估算
- 启用内容动画和外观动画

## 性能优化

1. **构建优化**
    - 启用图片压缩
    - 使用 Clean URLs
    - 启用代码分割

2. **用户体验**
    - 启用回到顶部按钮
    - 支持中等缩放图片查看
    - 启用搜索功能
    - 支持深色/浅色主题切换

## 维护指南

### 依赖更新

- 定期更新 RSPress 和相关插件
- 检查安全漏洞并及时修复
- 保持 Node.js 版本在 LTS 范围内

### 内容维护

- 定期检查链接有效性
- 更新过时的技术内容
- 保持文档结构清晰
- 及时修复错别字和格式问题

### 监控指标

- 访问量统计 (visitor-badge)
- 构建状态监控
- 部署状态检查
- 页面加载性能

## 联系信息

- **作者**: zxkvv@qq.com
- **博客地址**:
    - GitHub Pages: [zxkv.github.io](https://zxkv.github.io)
    - Render: [zxkv.onrender.com](https://zxkv.onrender.com)
    - Netlify: [zxk.netlify.app](https://zxk.netlify.app)
- **掘金社区**: [下落香樟树](https://juejin.cn/user/184373682901309/posts)
- **邮箱**: zxkang@88.com

---

_最后更新: 2024年_
