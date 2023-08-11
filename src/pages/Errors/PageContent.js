import classes from "./PageContent.module.scss";
import Header from "../../components/transitions/Headers/Header";
import MainNavigation from "../../components/transitions/Navigation/MainNavigation";

function PageContent({ title, children }) {
	return (
		<>
			<MainNavigation />
			<Header>
				<div className={classes.text}>
					<h1>{title}</h1>
					{children}
				</div>
			</Header>
		</>
	);
}

export default PageContent;
