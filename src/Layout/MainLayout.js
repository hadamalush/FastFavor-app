import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/transitions/Navigation/MainNavigation";
import Header from "../components/transitions/Headers/Header";
const SiteLayout = () => {
	return (
		<Fragment>
			<MainNavigation />
			<Header>
				<Outlet />
			</Header>
		</Fragment>
	);
};

export default SiteLayout;
