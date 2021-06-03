import React from "react";
import {ContainerImage, StyledCell, StyledInputConfirmNumber} from "./InputConfitmNumber.styled";
import {useField} from "formik";

type InputConfirmNumberProps = {
	name: string
}

export const InputConfirmNumber: React.FC<InputConfirmNumberProps> = (props: any) => {
	const [field] = useField(props)
	return (
		<ContainerImage>
		<StyledCell>
			<StyledInputConfirmNumber {...field} {...props} />
		</StyledCell>
		</ContainerImage>
	)

}