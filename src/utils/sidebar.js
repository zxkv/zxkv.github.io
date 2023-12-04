const toItems = (path = "", count = 0) => {
	let items = [];
	for (let i = 1; i <= count; i++) items.push(`${path}/${i}`);
	return items;
};

const BLOG_0 = {
	text: "博客简介",
	link: "/blog/"
};

const BLOG_1 = {
	text: "插件依赖",
	collapsed: false,
	items: toItems("/blog/plugin", 3)
};

const BLOG_2 = {
	text: "开发案例",
	collapsed: true,
	items: toItems("/blog/code", 30)
};

const BLOG_3 = {
	text: "前端工具",
	collapsed: true,
	items: toItems("/blog/tools", 6)
};

const BLOG_4 = {
	text: "前端框架",
	collapsed: true,
	items: toItems("/blog/view", 2)
};

const PAGE_0 = {
	text: "前端文档",
	link: "/page/",
	collapsed: true,
	items: toItems("/page", 4)
};

export default {
	"/blog/": [BLOG_0, BLOG_1, BLOG_2, BLOG_3],
	"/page/": [PAGE_0]
};
