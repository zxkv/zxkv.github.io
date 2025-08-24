import { useState, useEffect } from "react";

const LayHeader = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className={`lay-header ${scrolled ? "scrolled" : ""}`}>
			<div className="lwh-l">
				<a href="https://zxk.netlify.app" target="_blank" rel="noopener noreferrer">
					前端导航
				</a>
			</div>
			<div className="lwh-r">
				<a href="https://zxk.netlify.app" target="_blank" rel="noopener noreferrer">
					我的博客
				</a>
				<a href="https://juejin.cn/user/184373682901309/posts" target="_blank" rel="noopener noreferrer">
					掘金主页
				</a>
				<a href="https://github.com/zxkv" target="_blank" rel="noopener noreferrer">
					GitHub
				</a>
			</div>
		</div>
	);
};

export default LayHeader;
