import React from "react";
import {Form, FormikProvider, useFormik} from "formik";
import * as Yup from 'yup'
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {authCreateCode} from "../../redux/auth/auth.action";
import {FlexContainer} from "../../components/FlexContainer/FlexContainer";
import {Text} from "../../components/Text/Text";
import {Button} from "../../components/Button/Button";
import {InputNumber} from "./InputNumber/InputNumber";
import {RadioGroup} from "./RadioGroup/RadioGroup";

export const AuthStep1: React.FC = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const formik = useFormik({
		initialValues: {
			phone: '',
			social: ''
		},
		onSubmit: values => {
			dispatch(authCreateCode)
			history.push('/step3')
		},
		validationSchema: Yup.object({
			phone: Yup.number()
				.required('Обязательное поле'),
			social: Yup.string()
				.required('Выбирите соц сеть')
		})
	})

	return (
		<FlexContainer border column height={'100%'} justify='flex-start' align={'center'}>
			<div>
				<img src="/" alt="logo" />
			</div>
			<FormikProvider value={formik}>
				<Form>
					<FlexContainer column align={'center'}>
						<InputNumber name={'phone'} />
						<Text margin='10px 0 0 0'>Подтвердите номер через WHATSAPP или TELEGRAM</Text>
						<RadioGroup name={'social'} />
						<Button type={"submit"}>Отправить код</Button>
					</FlexContainer>
				</Form>
			</FormikProvider>
		</FlexContainer>
	)
}