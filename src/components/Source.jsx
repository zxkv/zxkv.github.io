import { SourceCode } from "@theme";

export default function (props) {
	return <SourceCode platform={props.type || "github"} href={props.value} />;
}
