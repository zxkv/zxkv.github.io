import { umami } from "./icon";

const nav = [
	{
		text: "博客笔记",
		link: "/blog/",
		activeMatch: "/blog/"
	},
	{
		text: "前端笔记",
		link: "/node/",
		activeMatch: "/node/"
	},
	{
		text: "前端文档",
		link: "/page/",
		activeMatch: "/page/"
	},
	{
		text: "博客镜像",
		items: [
			{
				text: "Gitee",
				link: "https://zxkv.gitee.io"
			},
			{
				text: "GitHub",
				link: "https://zxkv.github.io"
			},
			{
				text: "Render",
				link: "https://zxkv.onrender.com"
			}
		]
	}
];

const socialLinks = [
	{
		icon: {
			svg: umami
		},
		mode: "link",
		content: "https://umami.is"
	},
	{
		icon: "github",
		mode: "link",
		content: "https://github.com/zxkv"
	},
	{
		icon: "juejin",
		mode: "link",
		content: "https://juejin.cn/user/184373682901309/posts"
	}
];

const builderConfig = {
	html: {
		tags: [
			{
				tag: "script",
				attrs: {
					async: true,
					src: "https://us.umami.is/script.js",
					"data-website-id": "209b81a6-1ae9-45ef-a598-32d09d0944bf"
				}
			}
		]
	},
	dev: {
		progressBar: true
	},
	server: {
		strictPort: true
	}
};

export { builderConfig, nav, socialLinks };
