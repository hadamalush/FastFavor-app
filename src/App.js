import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import SiteLayout from "./Layout/MainLayout";
import HomePage from "./pages/views/HomePage/HomePage";
import RecomendedPage from "./pages/views/RecommendPage/Recommended";
import ContactPage from "./pages/views/ContactPage/Contact";
import LoginPage from "./pages/views/LoginPage/Login";
import RegisterPage from "./pages/views/RegisterPage/Register";
import Orders, {
	loader as ordersLoader,
} from "./pages/views/OrdersPage/Orders";
import NewOrderPage, {
	action as addOrderAction,
} from "./pages/views/OrdersPage/NewOrder";
import MainPageError from "./pages/Errors/ErrorPage";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <SiteLayout />,
			errorElement: <MainPageError />,
			children: [
				{ index: true, element: <HomePage /> },
				{
					path: "recommended",
					element: <RecomendedPage />,
				},
				{
					path: "contact",
					element: <ContactPage />,
				},
				{
					path: "login",
					element: <LoginPage />,
				},
				{
					path: "register",
					element: <RegisterPage />,
				},
				{
					path: "orders",
					children: [
						{
							index: true,
							element: <Orders />,
							loader: ordersLoader,
						},
						{
							path: "neworder",
							element: <NewOrderPage />,
							action: addOrderAction,
						},
					],
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
