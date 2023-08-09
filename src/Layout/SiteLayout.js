import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
const SiteLayout = () => {
	return (
		<Fragment>
			<MainNavigation />
			<Outlet />
		</Fragment>
	);
};

export default SiteLayout;
