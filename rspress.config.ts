import * as path from "path";
import { defineConfig } from "rspress/config";
import { yuque } from "./src/utils/icon";

export default defineConfig({
	root: path.join(__dirname, "docs"),
	title: "下落香樟树",
	description: "ZXK Desc",
	icon: "/rspress-icon.png",
	logo: {
		light: "/rspress-light-logo.png",
		dark: "/rspress-dark-logo.png"
	},
	themeConfig: {
		socialLinks: [
			{
				icon: "juejin",
				mode: "link",
				content: "https://juejin.cn/user/184373682901309/posts"
			},
			// {
			// 	icon: {
			// 		svg: gitee
			// 	},
			// 	mode: "link",
			// 	content: "https://github.com/web-infra-dev/rspress"
			// },
			{
				icon: {
					svg: yuque
				},
				mode: "text",
				content: "GITEE"
			}
		]
	}
});
