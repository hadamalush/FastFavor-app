import LinkAct from "../styles/LinkAct";
import Header from "../Layout/Header";
import classes from "./HomePage.module.scss";

const HomePage = () => {
	console.log("object");
	return (
		<>
			<div className={classes["header-actions"]}>
				<LinkAct to='neworder'>Order delivery</LinkAct>
				<LinkAct to='findjob' className={classes["link-findjob"]}>
					Find job
				</LinkAct>
			</div>

			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
		</>
	);
};

export default HomePage;
