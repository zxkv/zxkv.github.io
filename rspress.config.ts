import * as path from "path";
import { defineConfig } from "rspress/config";
import sidebar from "./src/utils/sidebar";
import { builderConfig, nav, socialLinks } from "./src/utils/base";

export default defineConfig({
	root: path.join(__dirname, "docs"),
	title: "下落香樟树",
	description: "下落香樟树、web前端、前端开发、vue、react、js、JavaScript",
	icon: "/favicon.ico",
	logo: "/rspress-icon.png",
	// logo: {
	// 	dark: "/dark-logo.png",
	// 	light: "/light-logo.png"
	// },
	base: "/",
	outDir: "doc_build",
	route: {
		cleanUrls: true,
		exclude: [],
		include: []
	},
	mediumZoom: {
		options: {
			background: "#00000080"
		}
	},
	markdown: {
		showLineNumbers: true,
		defaultWrapCode: false
	},
	builderConfig,
	themeConfig: {
		nav,
		socialLinks,
		sidebar,
		footer: {
			message: `©2023-${new Date().getFullYear()} Create By ❤️ 下落香樟树`
		},
		enableContentAnimation: true,
		lastUpdatedText: "上次更新时间",
		lastUpdated: true /* 上次更新时间 */,
		outlineTitle: "目 录",
		prevPageText: "上一篇",
		nextPageText: "下一篇"
	}
});
