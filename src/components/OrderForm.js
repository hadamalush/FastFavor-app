import useInput from "../hooks/use-input";
import classes from "./OrderForm.module.scss";

const OrderForm = () => {
	const {
		enteredValue: enteredName,
		isValid: isNameValid,
		hasError: errorName,
		reset: resetName,
		changeValueHandler: changeNameHandler,
		changeTouchHandler: changeTouchNameHandler,
	} = useInput(name => name.length >= 3);

	const {
		enteredValue: enteredLastName,
		isValid: isLastNameValid,
		hasError: errorLastName,
		reset: resetLastName,
		changeValueHandler: changeLastNameHandler,
		changeTouchHandler: changeTouchLastNameHandler,
	} = useInput(lastName => lastName.trim() != "");

	const {
		enteredValue: enteredAddress,
		isValid: isAddressValid,
		hasError: errorAddress,
		reset: resetAddresss,
		changeValueHandler: changeAddressHandler,
		changeTouchHandler: changeTouchAddressHandler,
	} = useInput(address => address.trim() != "");

	const {
		enteredValue: enteredPhone,
		isValid: isPhoneValid,
		hasError: errorPhone,
		reset: resetPhone,
		changeValueHandler: changePhoneHandler,
		changeTouchHandler: changeTouchPhoneHandler,
	} = useInput(phone => phone.length === 9);

	const {
		enteredValue: enteredEmail,
		isValid: isEmailValid,
		hasError: errorEmail,
		reset: resetEmail,
		changeValueHandler: changeEmailHandler,
		changeTouchHandler: changeTouchEmailHandler,
	} = useInput(email => email.trim().includes("@"));

	const {
		enteredValue: enteredPrice,
		isValid: isPriceValid,
		hasError: errorPrice,
		reset: resetPrice,
		changeValueHandler: changePriceHandler,
		changeTouchHandler: changeTouchPriceHandler,
	} = useInput(price => price >= 10);

	const {
		enteredValue: enteredDescription,
		isValid: isDescriptionValid,
		hasError: errorDescription,
		reset: resetDescription,
		changeValueHandler: changeDescriptionHandler,
		changeTouchHandler: changeTouchDescriptionHandler,
	} = useInput(description => description.length >= 15);

	const nameInvalidClass = errorName ? classes.invalid : null;
	const lastNameInvalidClass = errorLastName ? classes.invalid : null;
	const addressInvalidClass = errorAddress ? classes.invalid : null;
	const phoneInvalidClass = errorPhone ? classes.invalid : null;
	const emailInvalidClass = errorEmail ? classes.invalid : null;
	const priceInvalidClass = errorPrice ? classes.invalid : null;
	const descriptionInvalidClass = errorDescription ? classes.invalid : null;

	return (
		<form className={classes["form-container"]}>
			<h1 className={classes.h1}>New order</h1>

			<div className={classes["input-box"]}>
				<label htmlFor='name'>First Name</label>
				<div className={classes["input-info"]}>
					<input
						type='text'
						id='name'
						value={enteredName}
						onChange={changeNameHandler}
						onBlur={changeTouchNameHandler}
						className={nameInvalidClass}
					/>
					{errorName && (
						<p className={classes["error-info"]}>Insert correct name.</p>
					)}
				</div>
			</div>

			<div className={classes["input-box"]}>
				<label htmlFor='lastname'>Last Name</label>
				<div className={classes["input-info"]}>
					<input
						type='text'
						id='lastname'
						value={enteredLastName}
						onChange={changeLastNameHandler}
						onBlur={changeTouchLastNameHandler}
						className={lastNameInvalidClass}
					/>
					{errorLastName && (
						<p className={classes["error-info"]}>Insert correct lastname.</p>
					)}
				</div>
			</div>

			<div className={classes["input-box"]}>
				<label htmlFor='address'>Address</label>
				<div className={classes["input-info"]}>
					<input
						type='text'
						id='address'
						value={enteredAddress}
						onChange={changeAddressHandler}
						onBlur={changeTouchAddressHandler}
						className={addressInvalidClass}
					/>
					{errorAddress && (
						<p className={classes["error-info"]}>Insert correct address.</p>
					)}
				</div>
			</div>

			<div className={classes["input-box"]}>
				<label htmlFor='phone'>Phone</label>
				<div className={classes["input-info"]}>
					<input
						type='number'
						id='phone'
						value={enteredPhone}
						onChange={changePhoneHandler}
						onBlur={changeTouchPhoneHandler}
						className={phoneInvalidClass}
					/>
					{errorPhone && (
						<p className={classes["error-info"]}>Insert correct number.</p>
					)}
				</div>
			</div>

			<div className={classes["input-box"]}>
				<label htmlFor='phone'>E-mail</label>
				<div className={classes["input-info"]}>
					<input
						type='email'
						id='email'
						value={enteredEmail}
						onChange={changeEmailHandler}
						onBlur={changeTouchEmailHandler}
						className={emailInvalidClass}
					/>
					{errorEmail && (
						<p className={classes["error-info"]}>Insert correct email.</p>
					)}
				</div>
			</div>

			<div className={classes["input-box"]}>
				<label htmlFor='price'>Price</label>
				<div className={classes["input-info"]}>
					<input
						type='number'
						id='price'
						value={enteredPrice}
						onChange={changePriceHandler}
						onBlur={changeTouchPriceHandler}
						className={priceInvalidClass}
					/>
					{errorPrice && <p className={classes["error-info"]}>Min 10 PLN.</p>}
				</div>
			</div>

			<div
				className={`${classes["input-box"]} ${classes["input-box-delivery"]}`}>
				<label htmlFor='description'>Delivery description</label>

				<div className={classes["input-info"]}>
					<textarea
						type='textarea'
						rows='4'
						cols='50'
						id='description'
						value={enteredDescription}
						onChange={changeDescriptionHandler}
						onBlur={changeTouchDescriptionHandler}
						className={descriptionInvalidClass}
					/>
					{errorDescription && (
						<p className={classes["error-info"]}>Min 15 char.</p>
					)}
				</div>
			</div>
		</form>
	);
};

export default OrderForm;
