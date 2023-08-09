import classes from "./Header.module.scss";

const Header = props => {
	return (
		<header className={classes.header}>
			<div className={classes["bg-shadow"]}>{props.children}</div>
		</header>
	);
};

export default Header;
