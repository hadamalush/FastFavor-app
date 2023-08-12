import classes from "./GeneralForm.module.scss";
import { Form } from "react-router-dom";

const GeneralForm = props => {
	const styles = `${classes.form} ${props.className}`;

	return (
		<Form method={props.method} className={styles} onSubmit={props.onSubmit}>
			{props.children}
		</Form>
	);
};

export default GeneralForm;
