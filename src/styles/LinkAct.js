import { NavLink } from "react-router-dom";
import classes from "./LinkAct.module.scss";

const LinkAct = props => {
	const styles = `${classes.link} ${props.className}`;
	return (
		<NavLink to={props.to} className={styles}>
			{props.children}
		</NavLink>
	);
};

export default LinkAct;
