import { blog, dev, note, page, record } from "./page-count";

const toItems = (path = "", count = 0) => {
	let items = [];
	for (let i = 1; i <= count; i++) items.push(`${path}/${i}`);
	return items;
};

// 博客
const M_BLOG = [
	{
		text: "博客简介",
		link: "/blog/"
	},
	{
		text: "开发插件",
		collapsed: false,
		items: toItems("/blog/plugin", blog.plugin)
	},
	{
		text: "前端工具",
		collapsed: true,
		items: toItems("/blog/tools", blog.tools)
	},
	{
		text: "框架工具",
		collapsed: true,
		items: toItems("/blog/view", blog.view)
	},
	{
		text: "开发案例",
		collapsed: true,
		items: toItems("/blog/code", blog.code)
	}
];

// 开发
const M_DEV = [
	{
		text: "开发记录",
		link: "/dev/"
	},
	{
		text: "开发软件",
		collapsed: true,
		items: toItems("/dev/soft", dev.soft)
	},
	{
		text: "NPM包",
		collapsed: true,
		items: toItems("/dev/npm", dev.npm)
	},
	{
		text: "记录汇总",
		collapsed: true,
		items: toItems("/dev/mark", dev.mark)
	}
];

// 笔记
const M_NOTE = [
	{
		text: "笔记简介",
		link: "/note/"
	},
	{
		text: "CSS 相关",
		collapsed: false,
		items: toItems("/note/css", note.css)
	},
	{
		text: "JS 相关",
		collapsed: true,
		items: toItems("/note/js", note.js)
	},
	{
		text: "代码示例",
		collapsed: true,
		items: toItems("/note/code", note.code)
	},
	{
		text: "项目配置",
		collapsed: true,
		items: toItems("/note/dev", note.dev)
	},
	{
		text: "工具配置",
		collapsed: true,
		items: toItems("/note/tools", note.tools)
	}
];

// 文档
const M_PAGE = [
	{
		text: "前端文档",
		link: "/page/",
		collapsed: true,
		items: toItems("/page", page.index)
	}
];

// 学习记录
const M_RECORD = [
	{
		text: "学习记录",
		link: "/record/"
	},
	{
		text: "编辑器",
		collapsed: false,
		items: toItems("/record/editor", record.editor)
	},
	{
		text: "依赖包",
		collapsed: true,
		items: toItems("/record/tools", record.tools)
	},
	{
		text: "打包配置",
		collapsed: true,
		items: toItems("/record/build", record.build)
	}
];

export default {
	"/blog/": M_BLOG,
	"/dev/": M_DEV,
	"/note/": M_NOTE,
	"/page/": M_PAGE,
	"/record/": M_RECORD
};
