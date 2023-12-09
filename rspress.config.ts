import * as path from "path";
import { defineConfig } from "rspress/config";
import sidebar from "./src/utils/sidebar";
import { builderConfig, nav, socialLinks } from "./src/utils/base";

export default defineConfig({
	root: path.join(__dirname, "docs"),
	title: "下落香樟树",
	description: "WEB 前端开发博客笔记",
	icon: "/favicon.ico",
	logo: "/rspress-icon.png",
	base: "/web",
	// logo: {
	// 	dark: "/rspress-dark-logo.png",
	// 	light: "/rspress-light-logo.png"
	// },
	outDir: "doc_build",
	route: {
		cleanUrls: true
	},
	markdown: {
		showLineNumbers: true,
		defaultWrapCode: true
	},
	builderConfig,
	themeConfig: {
		nav,
		socialLinks,
		sidebar,
		footer: {
			message: "历尽千帆皆不是，守得云开见月明。"
		},
		enableContentAnimation: true,
		lastUpdatedText: "上次更新时间",
		lastUpdated: true /* 上次更新时间 */,
		outlineTitle: "目录",
		prevPageText: "上一篇",
		nextPageText: "下一篇"
	}
});
