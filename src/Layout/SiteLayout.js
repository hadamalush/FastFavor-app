import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import Header from "./Header";
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
