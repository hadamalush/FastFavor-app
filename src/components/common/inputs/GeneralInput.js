import classes from "./GeneralInput.module.scss";
const GeneralInput = props => {
	const styles = `${classes.input} ${props.className}`;
	return (
		<input
			id={props.id}
			type={props.type}
			value={props.value}
			name={props.name}
			onChange={props.onChange}
			onBlur={props.onBlur}
			placeholder={props.placeholder}
			className={styles}>
			{props.children}
		</input>
	);
};

export default GeneralInput;
