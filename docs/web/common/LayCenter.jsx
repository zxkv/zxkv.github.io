import { useMemo, useState } from "react";
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
	const [activeCategory, setActiveCategory] = useState("all");
	const [searchTerm, setSearchTerm] = useState("");

	// 提取所有分类
	const categories = useMemo(() => {
		if (!Array.isArray(links)) return [];
		return ["all", ...links.map(category => category.category)];
	}, [links]);

	// 根据搜索词和当前分类过滤链接
	const filteredLinks = useMemo(() => {
		if (!Array.isArray(links)) return [];

		// 如果没有搜索词且分类是全部，返回所有链接
		if (!searchTerm && activeCategory === "all") {
			return links.flatMap(category => {
				return category.links.map(link => ({
					...link,
					category: category.category
				}));
			});
		}

		// 根据分类和搜索词过滤
		let result = [];
		links.forEach(category => {
			// 如果选择了特定分类，只处理该分类
			if (activeCategory !== "all" && category.category !== activeCategory) return;

			// 过滤该分类下符合搜索条件的链接
			const filteredCategoryLinks = category.links.filter(link => {
				if (!searchTerm) return true;
				return (
					link.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					(link.desc && link.desc.toLowerCase().includes(searchTerm.toLowerCase()))
				);
			});

			// 添加分类信息到链接
			result = result.concat(
				filteredCategoryLinks.map(link => ({
					...link,
					category: category.category
				}))
			);
		});

		return result;
	}, [links, activeCategory, searchTerm]);

	// 渲染分类选择器
	const categorySelector = useMemo(() => {
		return (
			<div className="category-selector">
				{categories.map(category => (
					<button
						key={category}
						className={`category-btn ${activeCategory === category ? "active" : ""}`}
						onClick={() => setActiveCategory(category)}
					>
						{category === "all" ? "全部" : category}
					</button>
				))}
			</div>
		);
	}, [categories, activeCategory]);

	// 渲染搜索框
	const searchBox = useMemo(() => {
		return (
			<div className="search-box">
				<input
					type="text"
					placeholder="搜索资源..."
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
				/>
				{searchTerm && (
					<button className="clear-btn" onClick={() => setSearchTerm("")}>×</button>
				)}
			</div>
		);
	}, [searchTerm]);

	// 渲染链接卡片
	const linkCards = useMemo(() => {
		return filteredLinks.map((v, i) => {
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
							<div className="lwc-category">{v.category}</div>
						</div>
					</div>
				</Link>
			);
		});
	}, [filteredLinks]);

	return (
		<>
			<div className="controls-container">
				{searchBox}
				{categorySelector}
			</div>
			<main className="lay-center">
				{linkCards.length > 0 ? linkCards : <div className="empty-state">暂无匹配的资源</div>}
			</main>
		</>
	);
};

export default LayCenter;
