import { useState, useReducer } from "react";

const inputStateReducer = (state, action) => {
	if (action.type === "CHANGE_VALUE") {
		return { value: action.val, isTouched: state.isTouched };
	}
	if (action.type === "CHANGE_BLUR") {
		return { value: state.value, isTouched: true };
	}
	return {
		value: "",
		isTouched: false,
	};
};

const useInput = validValue => {
	const [valueState, dispatchValue] = useReducer(inputStateReducer, {
		value: "",
		isTouched: false,
	});

	const isValid = validValue(valueState.value);
	const hasError = !isValid && valueState.isTouched;

	const changeValueHandler = event => {
		dispatchValue({ type: "CHANGE_VALUE", val: event.target.value });
	};

	const changeTouchHandler = () => {
		dispatchValue({ type: "CHANGE_BLUR" });
	};

	const reset = () => {
		dispatchValue("RESET");
	};

	return {
		enteredValue: valueState.value,
		isValid,
		hasError,
		reset,
		changeValueHandler,
		changeTouchHandler,
	};
};

export default useInput;
