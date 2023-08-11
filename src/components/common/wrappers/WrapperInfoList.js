import classes from "./WrapperInfoList.module.scss";

const WrapperInfoList = props => {
	const styles = `${classes.wrapper} ${props.className}`;

	return <div className={styles}>{props.children}</div>;
};

export default WrapperInfoList;
