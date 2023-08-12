import GeneralForm from "../../common/forms/GeneralForm";
import GeneralInput from "../../common/inputs/GeneralInput";
import Wrapper from "../../common/wrappers/Wrapper";
import classes from "./RegisterForm.module.scss";
import useInput from "../../../hooks/use-input";
import ButtonApply from "../../common/buttons/ButtonApply";

const RegisterForm = () => {
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
		enteredValue: enteredPassword,
		isValid: isPasswordValid,
		hasError: errorPassword,
		reset: resetPassword,
		changeValueHandler: changePasswordHandler,
		changeTouchHandler: changeTouchPasswordHandler,
	} = useInput(password => password.trim().includes("@"));

	const nameInvalidClass = errorName ? classes.invalid : null;
	const lastNameInvalidClass = errorLastName ? classes.invalid : null;
	const addressInvalidClass = errorAddress ? classes.invalid : null;
	const phoneInvalidClass = errorPhone ? classes.invalid : null;
	const emailInvalidClass = errorEmail ? classes.invalid : null;
	const passwordInvalidClass = errorPassword ? classes.invalid : null;

	return (
		<Wrapper className={classes.wrapper}>
			<GeneralForm className={classes.form}>
				<h1 className={classes["form-title"]}>Registration</h1>
				<div className={classes["box-content"]}>
					<img
						src='https://cdn.pixabay.com/photo/2016/06/15/16/16/man-1459246_1280.png'
						alt='man working'
					/>

					<div className={classes["box-inputs"]}>
						<div className={classes["input-info-box"]}>
							<i class='fa-solid fa-file-signature'></i>
							<GeneralInput
								id='firstName'
								name='firstName'
								value={enteredName}
								onChange={changeNameHandler}
								onBlur={changeTouchNameHandler}
								placeholder='First Name'
								className={`${classes.input} ${nameInvalidClass}`}
							/>
							{isNameValid && (
								<i className={`fa-solid fa-check ${classes["fa-check"]}`}></i>
							)}
						</div>
						{errorName && <p>Please insert correct name.</p>}

						<div className={classes["input-info-box"]}>
							<i class='fa-solid fa-fingerprint'></i>
							<GeneralInput
								id='lastName'
								name='lastName'
								value={enteredLastName}
								onChange={changeLastNameHandler}
								onBlur={changeTouchLastNameHandler}
								placeholder='Last name'
								className={`${classes.input} ${lastNameInvalidClass}`}
							/>
							{isLastNameValid && (
								<i className={`fa-solid fa-check ${classes["fa-check"]}`}></i>
							)}
						</div>
						{errorLastName && <p>Please insert correct last name.</p>}
						<div className={classes["input-info-box"]}>
							<i class='fa-solid fa-location-dot'></i>
							<GeneralInput
								id='address'
								name='address'
								value={enteredAddress}
								onChange={changeAddressHandler}
								onBlur={changeTouchAddressHandler}
								placeholder='Address'
								className={`${classes.input} ${addressInvalidClass}`}
							/>
							{isAddressValid && (
								<i className={`fa-solid fa-check ${classes["fa-check"]}`}></i>
							)}
						</div>
						{errorAddress && <p>Please insert correct address.</p>}
						<div className={classes["input-info-box"]}>
							<i class='fa-solid fa-phone'></i>
							<GeneralInput
								id='phone'
								name='phone'
								value={enteredPhone}
								onChange={changePhoneHandler}
								onBlur={changeTouchPhoneHandler}
								placeholder='Number phone'
								className={`${classes.input} ${phoneInvalidClass}`}
							/>
							{isPhoneValid && (
								<i className={`fa-solid fa-check ${classes["fa-check"]}`}></i>
							)}
						</div>
						{errorPhone && <p>Please insert correct phone.</p>}
						<div className={classes["input-info-box"]}>
							<i class='fa-solid fa-envelope'></i>
							<GeneralInput
								id='email'
								name='email'
								type='email'
								value={enteredEmail}
								onChange={changeEmailHandler}
								onBlur={changeTouchEmailHandler}
								placeholder='E-mail'
								className={`${classes.input} ${emailInvalidClass}`}
							/>
							{isEmailValid && (
								<i className={`fa-solid fa-check ${classes["fa-check"]}`}></i>
							)}
						</div>
						{errorEmail && <p>Please insert correct last name.</p>}
						<div className={classes["input-info-box"]}>
							<i class='fa-solid fa-key'></i>
							<GeneralInput
								id='password'
								name='password'
								type='password'
								value={enteredPassword}
								onChange={changePasswordHandler}
								onBlur={changeTouchPasswordHandler}
								placeholder='Password min. 6 char.'
								className={`${classes.input} ${passwordInvalidClass}`}
							/>
							{isPasswordValid && (
								<i className={`fa-solid fa-check ${classes["fa-check"]}`}></i>
							)}
						</div>
						{errorPassword && <p>Please insert correct password</p>}

						<ButtonApply className={classes["btn-apply"]}>Register</ButtonApply>
					</div>
				</div>
			</GeneralForm>
		</Wrapper>
	);
};

export default RegisterForm;
