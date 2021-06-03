import React from "react";
import {LabelRadio, Radio} from "./RadioGroup.styled";
import {useField} from "formik";
import {FlexContainer} from "../FlexContainer/FlexContainer";

type RadioGroupProps = {
	name: string
}

export const RadioGroup: React.FC<RadioGroupProps> = (props: any) => {
	const [field] = useField(props)
	return (
		<FlexContainer>
			<LabelRadio>
				<Radio {...props} {...field} value={'telegram'} />
			</LabelRadio>
			<LabelRadio>
				<Radio {...props} {...field} value={'whatsapp'} />
			</LabelRadio>
		</FlexContainer>
	)
}