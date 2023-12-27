import { umami, code } from "./icon";

const nav = [
	{
		text: "博客日志",
		link: "/blog/",
		activeMatch: "/blog/"
	},
	{
		text: "前端笔记",
		link: "/node/",
		activeMatch: "/node/"
	},
	{
		text: "开发文档",
		link: "/page/",
		activeMatch: "/page/"
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
		icon: {
			svg: code
		},
		mode: "link",
		content: "https://zxkv.github.io/v2case"
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
	// 	icon: "wechat",
	// 	mode: "text",
	// 	content: "微信号xxx"
	// },
	// {
	// 	icon: "qq",
	// 	mode: "img",
	// 	content: "/qrcode.png"
	// }
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
