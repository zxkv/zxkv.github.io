import { link_web } from "../data/index.js";
import "./Layout.css";

const Layout = () => {
	const links = [...link_web];

	return (
		<div className="lay-web">
			<div className="lw-header">
				<div className="lwh-l">
					<strong>
						<a href="https://zxk.netlify.app" target="_blank">
							前端导航
						</a>
					</strong>
				</div>
				<div className="lwh-r">
					<a href="https://zxk.netlify.app" target="_blank">
						我的博客
					</a>
				</div>
			</div>
			<div className="lw-center">
				{links.map((v, i) => (
					<a href={v.link} target="_blank">
						<div className="lwc-item" key={i}>
							<div className="lwc-title">{v.name}</div>
							<div className="lwc-desc">{v.desc}</div>
						</div>
					</a>
				))}
			</div>
			<div className="lw-footer">
				<p>©2022-2025 Create By · 下落香樟树</p>
			</div>
		</div>
	);
};

export default Layout;
