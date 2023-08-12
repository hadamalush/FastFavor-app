import { Form, redirect } from "react-router-dom";
import useInput from "../../../hooks/use-input";
import ButtonApply from "../buttons/ButtonApply";
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
	} = useInput(lastName => lastName.trim() !== "");

	const {
		enteredValue: enteredAddress,
		isValid: isAddressValid,
		hasError: errorAddress,
		reset: resetAddresss,
		changeValueHandler: changeAddressHandler,
		changeTouchHandler: changeTouchAddressHandler,
	} = useInput(address => address.trim() !== "");

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
		enteredValue: enteredCategory,
		isValid: isCategoryValid,
		hasError: errorCategory,
		reset: resetCategory,
		changeValueHandler: changeCategoryHandler,
		changeTouchHandler: changeTouchCategoryHandler,
	} = useInput(category => category !== "");

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
	const categoryInvalidClass = errorCategory ? classes.invalid : null;
	const descriptionInvalidClass = errorDescription ? classes.invalid : null;

	const resetFormHandler = () => {
		resetName();
		resetLastName();
		resetAddresss();
		resetPhone();
		resetEmail();
		resetPrice();
		resetCategory();
		resetDescription();
	};

	const submitFormHandler = event => {
		event.preventDefault();

		if (
			!isNameValid ||
			!isLastNameValid ||
			!isAddressValid ||
			!isPhoneValid ||
			!isEmailValid ||
			!isPriceValid ||
			!isDescriptionValid ||
			!isCategoryValid
		) {
			return;
		}
		console.log("object");
		return redirect("/");
	};

	return (
		<>
			<Form
				method='POST'
				onSubmit={submitFormHandler}
				className={classes["form-container"]}>
				<h1 className={classes.h1}>New order</h1>

				<div className={classes["input-box"]}>
					<label htmlFor='name'>First Name</label>
					<div className={classes["input-info"]}>
						<input
							type='text'
							id='name'
							name='name'
							value={enteredName}
							onChange={changeNameHandler}
							onBlur={changeTouchNameHandler}
							className={nameInvalidClass}
							required
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
							name='lastname'
							value={enteredLastName}
							onChange={changeLastNameHandler}
							onBlur={changeTouchLastNameHandler}
							className={lastNameInvalidClass}
							required
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
							name='address'
							value={enteredAddress}
							onChange={changeAddressHandler}
							onBlur={changeTouchAddressHandler}
							className={addressInvalidClass}
							required
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
							name='phone'
							value={enteredPhone}
							onChange={changePhoneHandler}
							onBlur={changeTouchPhoneHandler}
							className={phoneInvalidClass}
							required
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
							name='email'
							value={enteredEmail}
							onChange={changeEmailHandler}
							onBlur={changeTouchEmailHandler}
							className={emailInvalidClass}
							required
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
							name='price'
							value={enteredPrice}
							onChange={changePriceHandler}
							onBlur={changeTouchPriceHandler}
							className={priceInvalidClass}
							required
						/>
						{errorPrice && <p className={classes["error-info"]}>Min 10 PLN.</p>}
					</div>
				</div>

				<div className={classes["input-box"]}>
					<label htmlFor='category'>Category</label>
					<div className={classes["input-info"]}>
						<input
							list='desc-category'
							type='list'
							id='category'
							name='category'
							value={enteredCategory}
							onChange={changeCategoryHandler}
							onBlur={changeTouchCategoryHandler}
							className={categoryInvalidClass}
							required
						/>
						<datalist id='desc-category'>
							<option value='Shopping'></option>
							<option value='Transport'></option>
							<option value='Job'></option>
							<option value='Seasonal work'></option>
							<option value='Other'></option>
						</datalist>
						{errorCategory && (
							<p className={classes["error-info"]}>Choose something.</p>
						)}
					</div>
				</div>

				<div
					className={`${classes["input-box"]} ${classes["input-box-delivery"]}`}>
					<label htmlFor='description'>Description</label>

					<div className={classes["input-info"]}>
						<textarea
							type='textarea'
							id='description'
							name='description'
							value={enteredDescription}
							onChange={changeDescriptionHandler}
							onBlur={changeTouchDescriptionHandler}
							className={descriptionInvalidClass}
							required
						/>
						{errorDescription && (
							<p className={classes["error-info"]}>Min 15 char.</p>
						)}
					</div>
				</div>
				<div className={classes["btn-box"]}>
					<ButtonApply
						type='button'
						onClick={resetFormHandler}
						className={classes["btn-reset"]}>
						Reset
					</ButtonApply>
					<ButtonApply type='submit' className={classes["btn-apply"]}>
						Apply
					</ButtonApply>
				</div>
			</Form>
		</>
	);
};

export default OrderForm;
