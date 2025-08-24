import * as path from "path";
import { defineConfig } from "rspress/config";
// plugins
import fileTree from "rspress-plugin-file-tree";
import readingTime from "rspress-plugin-reading-time";
import { pluginOpenGraph } from "rsbuild-plugin-open-graph";
import { pluginFontOpenSans } from "rspress-plugin-font-open-sans";
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
	description: "surge、zxkv、web前端、vue、js、JavaScript",
	icon: "/icon.svg",
	logo: "/icon.svg",
	base: "/",
	outDir: "doc_build",
	// 添加自定义 head 标签
	head: [
		["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
		["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
		["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
		["meta", { name: "keywords", content: "web前端,vue,js,JavaScript,前端开发,技术博客" }],
		["meta", { name: "author", content: "下落香樟树" }]
	],
	// 添加缓存配置，提高构建性能
	build: {
		cache: true,
		optimizeDeps: {
			include: ["dayjs"]
		}
	},
	route: {
		cleanUrls: true
	},
	// 优化图片放大配置
	mediumZoom: {
		options: {
			background: "#00000080",
			margin: 24,
			scrollOffset: 40
		}
	},
	markdown: {
		showLineNumbers: true,
		defaultWrapCode: false,
		// 添加代码块复制按钮
		showCopyCode: true,
		globalComponents: [path.join(__dirname, "src/components/Install.jsx"), path.join(__dirname, "src/components/Source.jsx")]
	},
	builderConfig,
	themeConfig: {
		nav,
		socialLinks,
		sidebar,
		footer: {
			message: `Copyright©2022-${new Date().getFullYear()} Create By ❤️ 下落香樟树`
		},
		enableScrollToTop: true,
		enableContentAnimation: true,
		enableAppearanceAnimation: true,
		// 添加页面过渡动画
		pageTransition: true,
		lastUpdatedText: "上次更新",
		lastUpdated: true,
		outlineTitle: "目 录",
		prevPageText: "上一篇",
		nextPageText: "下一篇",
		searchPlaceholderText: "关键字",
		searchNoResultsText: "未找到相关内容",
		searchSuggestedQueryText: "请输入关键字搜索",
		// 添加搜索配置
		search: {
			codeBlocks: true,
			versioned: true
		},
		// 添加 SEO 相关配置
		seo: {
			author: "下落香樟树",
			url: "https://zxkv.github.io",
			twitter: {
				card: "summary",
				site: "@zxkvv"
			}
		}
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
