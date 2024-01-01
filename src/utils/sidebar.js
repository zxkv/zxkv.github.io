import { blog, node, page } from "../../count";

const toItems = (path = "", count = 0) => {
	let items = [];
	for (let i = 1; i <= count; i++) items.push(`${path}/${i}`);
	return items;
};

// 博客
const BLOG_0 = {
	text: "博客简介",
	link: "/blog/"
};

const BLOG_1 = {
	text: "开发插件",
	collapsed: false,
	items: toItems("/blog/plugin", blog.plugin)
};

const BLOG_2 = {
	text: "开发案例",
	collapsed: true,
	items: toItems("/blog/code", blog.code)
};

const BLOG_3 = {
	text: "前端工具",
	collapsed: true,
	items: toItems("/blog/tools", blog.tools)
};

const BLOG_4 = {
	text: "框架工具",
	collapsed: true,
	items: toItems("/blog/view", blog.view)
};

// 笔记
const NODE_0 = {
	text: "笔记简介",
	link: "/node/"
};

const NODE_1 = {
	text: "CSS 相关",
	collapsed: false,
	items: toItems("/node/css", node.css)
};

const NODE_2 = {
	text: "JS 相关",
	collapsed: true,
	items: toItems("/node/js", node.js)
};

const NODE_3 = {
	text: "代码示例",
	collapsed: true,
	items: toItems("/node/code", node.code)
};

const NODE_4 = {
	text: "项目配置",
	collapsed: true,
	items: toItems("/node/dev", node.dev)
};

const NODE_5 = {
	text: "工具配置",
	collapsed: true,
	items: toItems("/node/tools", node.tools)
};

// 文档
const PAGE_0 = {
	text: "前端文档",
	link: "/page/",
	collapsed: true,
	items: toItems("/page", page.index)
};

export default {
	"/blog/": [BLOG_0, BLOG_1, BLOG_2, BLOG_3, BLOG_4],
	"/node/": [NODE_0, NODE_1, NODE_2, NODE_3, NODE_4, NODE_5],
	"/page/": [PAGE_0]
};
