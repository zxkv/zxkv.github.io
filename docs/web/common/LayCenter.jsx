import { useMemo } from "react";
import { Link } from "react-router-dom";

const LayCenter = props => {
	const { links } = props;
	const linkArray = Array.isArray(links) ? links : [];

	const itemCard = useMemo(
		() =>
			linkArray.map((v, i) => (
				<Link key={i} to={v.link} target="_blank">
					<div className="lwc-item">
						<div className="lwc-title">{v.name}</div>
						<div className="lwc-desc">{v.desc}</div>
					</div>
				</Link>
			)),
		[linkArray]
	);

	return <main className="lay-center">{itemCard}</main>;
};

export default LayCenter;
