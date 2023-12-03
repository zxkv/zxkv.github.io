import { yuque } from "./icon";

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
		text: "漂泊时光",
		link: "/time/",
		activeMatch: "/time/"
	},
	{
		text: "开发文档",
		link: "/page/",
		activeMatch: "/page/"
	}
];

const socialLinks = [
	{
		icon: "github",
		mode: "link",
		content: "https://github.com/zxkv"
	},
	{
		icon: "juejin",
		mode: "link",
		content: "https://juejin.cn/user/184373682901309/posts"
	},
	{
		icon: {
			svg: yuque
		},
		mode: "link",
		content: "https://www.yuque.com/zhangxiaokang"
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

export { nav, socialLinks };
