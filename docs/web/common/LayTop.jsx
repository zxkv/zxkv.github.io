import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LayTop.css";

const LayTop = () => {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<header className={`header ${scrolled ? "scrolled" : ""}`}>
			<div className="container">
				<div className="logo">
					<Link to="/">
						<img src="/logo.png" alt="网站Logo" />
						<span>ZXKV Blog</span>
					</Link>
				</div>

				<div className="mobile-toggle" onClick={toggleMenu}>
					<span></span>
					<span></span>
					<span></span>
				</div>

				<nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
					<ul>
						<li>
							<Link to="/">首页</Link>
						</li>
						<li>
							<Link to="/articles">文章</Link>
						</li>
						<li>
							<Link to="/projects">项目</Link>
						</li>
						<li>
							<Link to="/about">关于</Link>
						</li>
						<li>
							<Link to="/contact">联系</Link>
						</li>
					</ul>
				</nav>

				<div className="user-actions">
					<div className="search-icon">
						<i className="fa fa-search"></i>
					</div>
					<div className="theme-toggle">
						<i className="fa fa-moon-o"></i>
					</div>
					<div className="user-profile">
						<Link to="/login">登录</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default LayTop;
