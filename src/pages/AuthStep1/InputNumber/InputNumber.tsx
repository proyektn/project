import React from "react";
import {StyledInputNumber} from "./InputNumber.styled";
import {useField} from "formik";

type InputNumberProps = {
	name: string
}

export const InputNumber: React.FC<InputNumberProps> = (props: any) => {
	const [field] = useField(props)
	return <StyledInputNumber {...field} {...props} placeholder='+7 xxx xxx xx xx' />
}