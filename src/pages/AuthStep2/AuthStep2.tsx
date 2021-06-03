import React from "react";
import {Form, FormikProvider, useFormik} from "formik";
import * as Yup from "yup";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {authLoginRequest} from "../../redux/auth/auth.action";
import {codeSelector} from "../../redux/auth/auth.selector";
import {FlexContainer} from "../../components/FlexContainer/FlexContainer";
import {Button} from "../../components/Button/Button";
import {InputConfirmNumber} from "./InputConfirmNumber/InputConfirNumber";

export const AuthStep2: React.FC = () => {
	const code = useSelector(codeSelector)
	const history = useHistory()
	const dispatch = useDispatch()
	const formik = useFormik({
		initialValues: {
			checkCode: ''
		},
		onSubmit: values => {
			dispatch(authLoginRequest({
				code: Number(values.checkCode),
				controlCode: Number(code)
			}))
			history.push('/')
		},
		validationSchema: Yup.object({
			checkCode: Yup.number()
				.required('Обязательное поле')
		})
	})
	return (
		<FlexContainer column border height={'100%'} justify={'flex-start'} align={'center'}>
			<div>
				<img src="/" alt="logo" />
			</div>
			<FormikProvider value={formik}>
				<Form>
					<FlexContainer column>
						<InputConfirmNumber name={'checkCode'} />
						<Button type={"submit"}>Подтвердить</Button>
					</FlexContainer>
				</Form>
			</FormikProvider>
		</FlexContainer>
	)
}