import { json, useLoaderData } from "react-router-dom";
import OrderList from "../../../components/transitions/Orders/OrdersList";

const Orders = () => {
	const orders = useLoaderData();

	return <OrderList orders={orders} />;
};

export default Orders;

export const loader = async () => {
	try {
		const response = await fetch(
			"https://fastfavor-c9520-default-rtdb.europe-west1.firebasedatabase.app/orders.json"
		);

		const data = await response.json();

		if (response.ok) {
			return data;
		}
	} catch (err) {
		throw json({ message: "Could not load orders.." }, { status: 404 });
	}
};
