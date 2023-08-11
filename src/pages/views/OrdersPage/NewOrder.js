import { redirect, json } from "react-router-dom";
import OrderForm from "../../../components/common/forms/OrderForm";
import classes from "./NewOrder.module.scss";

const NewOrderPage = () => {
	return (
		<div className={classes.middle}>
			<OrderForm />
		</div>
	);
};

export default NewOrderPage;

export const action = async ({ request, param }) => {
	const data = await request.formData();

	const firstName = data.get("name");
	const lastName = data.get("lastname");
	const address = data.get("address");
	const phone = data.get("phone");
	const email = data.get("email");
	const price = data.get("price");
	const category = data.get("category");
	const description = data.get("description");

	try {
		const response = await fetch(
			"https://fastfavor-c9520-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					firstName: firstName,
					lastName: lastName,
					address: address,
					phone: phone,
					email: email,
					price: price,
					category: category,
					description: description,
				}),
			}
		);
		if (response.ok) {
			return redirect("/");
		}
	} catch (error) {
		throw json(
			{ message: "Could not send order. Please try again later." },
			{ status: 500 }
		);
	}
};
