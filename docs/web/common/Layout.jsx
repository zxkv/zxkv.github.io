import LayHeader from "./LayHeader.jsx";
import LayCenter from "./LayCenter.jsx";
import LayFooter from "./LayFooter.jsx";
import { link_web } from "../data/index.js";
import "./Layout.scss";

const Layout = () => {
	return (
		<div className="lay-web">
			<LayHeader />
			<LayCenter links={link_web} />
			<LayFooter />
		</div>
	);
};

export default Layout;
