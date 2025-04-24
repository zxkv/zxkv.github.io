import { useMemo } from "react";
import { Link } from "react-router-dom";
import icon from "../../public/icon.svg";

const LayCenter = props => {
	const { links } = props;
	const linkArray = Array.isArray(links) ? links : [];

	const itemCard = useMemo(
		() =>
			linkArray.map((v, i) => (
				<Link key={i} to={v.link} target="_blank" rel="noopener noreferrer">
					<div className="lw-card">
						<div className="lwc-img">
							<img src={v?.icon || icon} alt={v.title || v.name} />
							<strong className="lwc-title">{v.name}</strong>
						</div>
						<div className="lwc-item">
							<div className="lwc-desc">{v.desc}</div>
						</div>
					</div>
				</Link>
			)),
		[linkArray]
	);

	return <main className="lay-center">{itemCard.length > 0 ? itemCard : <div className="empty-state">暂无导航数据</div>}</main>;
};

export default LayCenter;
