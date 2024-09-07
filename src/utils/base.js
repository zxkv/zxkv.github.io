// gzip 插件
import CompressionWebpackPlugin from "compression-webpack-plugin";
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
				text: "Render",
				link: "https://zxkv.onrender.com"
			},
			{
				text: "GitHub",
				link: "https://zxkv.github.io"
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
	output: {
		legalComments: "none"
	},
	html: {
		tags: [
			{
				tag: "script",
				attrs: {
					defer: true,
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
	},
	tools: {
		rspack: async (config, { prependPlugins }) => {
			prependPlugins(new CompressionWebpackPlugin());
			return config;
		}
	}
};

export { builderConfig, nav, socialLinks };
