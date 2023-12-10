export default function NotFound() {
	return (
		<>
			<center>
				<br />
				<img src="./404.png" title="Page Not Found" alt="404" draggable="false" />
				<p>抱歉，您访问的页面不存在</p>
				<br />
				<a href="/web">
					<span style={{ padding: "6px 10px", borderRadius: "4px", backgroundColor: "#00f", color: "#fff" }}>返回首页</span>
				</a>
			</center>
		</>
	);
}
