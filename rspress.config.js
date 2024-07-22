import * as path from "path";
import { defineConfig } from "rspress/config";
// plugins
import fileTree from "rspress-plugin-file-tree";
import readingTime from "rspress-plugin-reading-time";
import { pluginFontOpenSans } from "rspress-plugin-font-open-sans";
import { pluginOpenGraph } from "rsbuild-plugin-open-graph";
import { pluginImageCompress } from "@rsbuild/plugin-image-compress";

import sidebar from "./src/utils/sidebar";
import { builderConfig, nav, socialLinks } from "./src/utils/base";

export default defineConfig({
	root: path.join(__dirname, "docs"),
	plugins: [
		fileTree(),
		readingTime({
			defaultLocale: "zh-CN"
		}),
		pluginFontOpenSans(),
		pluginImageCompress()
	],
	title: "下落香樟树",
	description: "zxkv、前端开发、vue、react、js、JavaScript",
	icon: "/icon.png",
	logo: "/logo.png",
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
		defaultWrapCode: false,
		globalComponents: [path.join(__dirname, "src/components/Install.jsx"), path.join(__dirname, "src/components/Source.jsx")]
	},
	builderConfig,
	themeConfig: {
		nav,
		socialLinks,
		sidebar,
		footer: {
			message: `©2023-${new Date().getFullYear()} Create By ❤️ 下落香樟树`
		},
		enableScrollToTop: true,
		enableContentAnimation: true,
		lastUpdatedText: "上次更新时间",
		lastUpdated: true,
		outlineTitle: "目 录",
		prevPageText: "上一篇",
		nextPageText: "下一篇",
		searchPlaceholderText: "🔍搜索",
		searchNoResultsText: "未找到相关内容",
		searchSuggestedQueryText: "请输入搜索内容"
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
