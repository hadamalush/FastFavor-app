import LinkAct from "../../../components/common/links/LinkAct";
import Header from "../../../components/transitions/Headers/Header";
import classes from "./HomePage.module.scss";

const HomePage = () => {
	console.log("object");
	return (
		<>
			<div className={classes["header-actions"]}>
				<LinkAct to='orders/neworder'>Order delivery</LinkAct>
				<LinkAct to='orders' className={classes["link-findjob"]}>
					Find job
				</LinkAct>
			</div>
		</>
	);
};

export default HomePage;
