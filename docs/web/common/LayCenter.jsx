import { useMemo } from "react";

const LayCenter = props => {
	const { links } = props;
	const linkArray = Array.isArray(links) ? links : [];

	const itemCard = useMemo(
		() =>
			linkArray.map((v, i) => (
				<a key={i} href={v.link} target="_blank" rel="noopener noreferrer">
					<div className="lwc-item">
						<div className="lwc-title">{v.name}</div>
						<div className="lwc-desc">{v.desc}</div>
					</div>
				</a>
			)),
		[linkArray]
	);

	return <main className="lay-center">{itemCard}</main>;
};

export default LayCenter;
