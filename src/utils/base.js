import { umami } from "./icon";

const nav = [
	{
		text: "前端博客",
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
		text: "Gitee 博客",
		link: "https://zxkv.gitee.io"
	},
	{
		text: "GitHub 博客",
		link: "https://zxkv.github.io"
	},
	{
		text: "Rander 博客",
		link: "https://zxkv.onrender.com"
	}
];

const socialLinks = [
	{
		icon: {
			svg: umami
		},
		mode: "link",
		content: "https://umami.is/"
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
	// {
	// 	icon: "qq",
	// 	mode: "img",
	// 	content: "/qq.jpg"
	// }
	// {
	// 	icon: "wechat",
	// 	mode: "text",
	// 	content: "微信号xxx"
	// },
];

const builderConfig = {
	html: {
		tags: [
			{
				tag: "script",
				attrs: {
					async: true,
					src: "https://hm.baidu.com/hm.js?5a3704f91406d157b37ff3c4fe31cbdc"
				}
			},
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
