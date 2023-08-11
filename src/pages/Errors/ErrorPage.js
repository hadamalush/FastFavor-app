import { useRouteError } from "react-router-dom";
import PageContent from "./PageContent";

const MainPageError = () => {
	const error = useRouteError(); //

	let title = "An error occurred";
	let message = "Something went wrong!";

	// message = error.data.message;

	// if (error.status === 404) {
	// 	message = error.data.message;
	// }

	// if (error.status === 500) {
	// 	title = "Not found";
	// 	message = "Not found this page";
	// }

	return <PageContent title={title}>{message}</PageContent>;
};

export default MainPageError;
