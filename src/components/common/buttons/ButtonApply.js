import classes from "./ButtonApply.module.scss";

const ButtonApply = props => {
	const styles = `${classes["btn-apply"]} ${props.className}`;
	return (
		<button onClick={props.onClick} type={props.type} className={styles}>
			{props.children}
		</button>
	);
};

export default ButtonApply;
