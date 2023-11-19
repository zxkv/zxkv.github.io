import * as path from "path";
import { defineConfig } from "rspress/config";
import { yuque } from "./src/utils/icon";
import sidebar from "./src/utils/sidebar";

export default defineConfig({
	root: path.join(__dirname, "docs"),
	title: "下落香樟树",
	description: "ZXK Desc",
	icon: "/rspress-icon.png",
	logo: {
		light: "/rspress-light-logo.png",
		dark: "/rspress-dark-logo.png"
	},
	route: {
		cleanUrls: false
	},
	themeConfig: {
		socialLinks: [
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
		],
		sidebar: sidebar,
		outlineTitle: "目录",
		prevPageText: "上一篇",
		nextPageText: "下一篇"
		// footer: {
		// 	message: "zxkvv@qq.com"
		// }
	}
});
