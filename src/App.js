import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import SiteLayout from "./Layout/SiteLayout";
import HomePage from "./pages/HomePage";
import RecomendedPage from "./pages/Recommended";
import ContactPage from "./pages/Contact";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <SiteLayout />,
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
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
