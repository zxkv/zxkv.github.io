const LayFooter = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="lay-footer">
			<p>©2022-{currentYear} Create By · 下落香樟树 | 精心收集优质前端资源</p>
		</footer>
	);
};

export default LayFooter;
