import { useMemo } from "react";
import { Link } from "react-router-dom";
import icon from "../../public/icon.svg";

// 从URL中提取域名
const extractDomain = url => {
	try {
		const domain = new URL(url).hostname;
		return domain;
	} catch (error) {
		console.error("无效的URL:", url);
		return null;
	}
};

// 获取网站favicon的函数
const getFaviconUrl = url => {
	const domain = extractDomain(url);
	if (!domain) return null;
	return `https://${domain}/favicon.ico`;
};

const LayCenter = props => {
	const { links } = props;
	const linkArray = Array.isArray(links) ? links : [];

	const itemCard = useMemo(
		() =>
			linkArray.map((v, i) => {
				const faviconUrl = v.link ? getFaviconUrl(v.link) : null;
				return (
					<Link key={i} to={v.link} target="_blank" rel="noopener noreferrer">
						<div className="lw-card">
							<div className="lwc-img">
								<img
									src={v?.icon || faviconUrl || icon}
									alt={v.title || v.name}
									onError={e => {
										e.target.onerror = null;
										e.target.src = icon;
									}}
								/>
								<strong className="lwc-title">{v.name}</strong>
							</div>
							<div className="lwc-item">
								<div className="lwc-desc">{v.desc}</div>
							</div>
						</div>
					</Link>
				);
			}),
		[linkArray]
	);

	return <main className="lay-center">{itemCard.length > 0 ? itemCard : <div className="empty-state">暂无导航数据</div>}</main>;
};

export default LayCenter;
