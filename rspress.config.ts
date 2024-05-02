import * as path from "path";
import { defineConfig } from "rspress/config";
// plugins
import fileTree from "rspress-plugin-file-tree";
import readingTime from "rspress-plugin-reading-time";
import { pluginOpenGraph } from "rsbuild-plugin-open-graph";
import { pluginFontOpenSans } from "rspress-plugin-font-open-sans";

import sidebar from "./src/utils/sidebar";
import { builderConfig, nav, socialLinks } from "./src/utils/base";

export default defineConfig({
	root: path.join(__dirname, "docs"),
	plugins: [
		fileTree(),
		readingTime({
			defaultLocale: "zh-CN"
		}),
		pluginFontOpenSans()
	],
	title: "下落香樟树",
	description: "zxkv、前端开发、vue、react、js、JavaScript",
	icon: "/favicon.ico",
	logo: "/rspress-icon.png",
	base: "/",
	outDir: "doc_build",
	route: {
		cleanUrls: true
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
		lastUpdated: true,
		outlineTitle: "目 录",
		prevPageText: "上一篇",
		nextPageText: "下一篇"
	},
	builderPlugins: [
		pluginOpenGraph({
			title: "下落香樟树 - 前端博客",
			type: "website",
			url: "https://zxkv.github.io/",
			description: "Vue,Vuex,Vue-router,Pinia,Element,JavaScript"
		})
	]
});
