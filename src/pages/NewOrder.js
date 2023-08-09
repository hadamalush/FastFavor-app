import OrderForm from "../components/OrderForm";
import classes from "./NewOrder.module.scss";

const NewOrderPage = () => {
	return (
		<div className={classes.middle}>
			<OrderForm />
		</div>
	);
};
export default NewOrderPage;
