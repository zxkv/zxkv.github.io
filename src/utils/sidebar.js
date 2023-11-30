const BLOG_0 = {
	text: "博客简介",
	link: "/blog/"
};

const BLOG_1 = {
	text: "插件依赖",
	items: ["/blog/plugin/1", "/blog/plugin/2", "/blog/plugin/3"]
};

const BLOG_2 = {
	text: "代码案例",
	items: ["/blog/code/1"]
};

const BLOG_3 = {
	text: "前端工具",
	items: ["/blog/tools/1"]
};

const BLOG_4 = {
	text: "前端框架",
	items: ["/blog/view/1"]
};

export default {
	"/blog/": [BLOG_0, BLOG_1, BLOG_2, BLOG_3, BLOG_4]
};
