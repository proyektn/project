import React, {useState} from "react";
import {Button} from "../../components/Button/Button";
import {ScrollBlock} from "../../components/ScrollBlock/ScrollBlock";
import {useHistory} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {authAgreementRead} from "../../redux/auth/auth.action";
import {FlexContainer} from "../../components/FlexContainer/FlexContainer";
import {Title} from "../../components/Title/Title";
import {SubTitle} from "../../components/SubTitle/SubTitle";
import {Text} from "../../components/Text/Text";

export const Agreement: React.FC = () => {
	const [agreement, setAgreement] = useState(false)
	const history = useHistory()
	const dispatch = useDispatch()

	const onScroll = (e: React.MouseEvent) => {
		// @ts-ignore
		if (e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight) {
			setAgreement(true)
		}
	}

	const nextStep = () => {
		dispatch(authAgreementRead)
		history.push('/step2')
	}

	return (
		<>
			<FlexContainer border column height={'100%'} justify={'space-between'} align={'center'}>
				<FlexContainer column height={'180px'} align={'center'}>
					<Title margin={'50px 0'}>Вы получили ПРИГЛАШЕНИЕ</Title>
					<SubTitle>Продолжая, вы принимаете соглашение</SubTitle>
				</FlexContainer>
				<ScrollBlock onScroll={onScroll}>
					<Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, sed, suscipit. Ab asperiores, dolorum
						iusto laborum nesciunt sed similique? At et odio provident quasi quia repudiandae saepe similique, vitae.
						Ad aperiam architecto aspernatur atque blanditiis commodi debitis dignissimos incidunt minima, qui quis,
						saepe sit velit vero voluptas! Ad ex hic inventore itaque iure laudantium, magnam magni modi nostrum
						quaerat qui quia quibusdam recusandae repellat sapiente soluta tenetur. Alias blanditiis distinctio
						dolores eaque facere labore, officiis tempora voluptatum! Adipisci aliquam aperiam asperiores aut
						blanditiis consectetur corporis cumque delectus deleniti dolorem dolorum eaque earum eius eligendi enim
						error eveniet ex hic illo in ipsum iste iure iusto laboriosam laborum modi necessitatibus optio placeat
						provident qui, quia quis quisquam ratione repellendus ullam voluptas voluptatem? Accusamus alias aliquam,
						architecto atque commodi consectetur cumque distinctio ea eligendi eum eveniet ex inventore itaque
						laboriosam maiores molestiae molestias neque non nulla perferendis quaerat reiciendis saepe suscipit totam
						voluptas. Ad adipisci architecto asperiores autem blanditiis consequuntur culpa cum cupiditate debitis
						delectus distinctio dolore dolorem doloribus ducimus, eos est et eveniet minima nobis pariatur quae quas
						rem reprehenderit, rerum tempora temporibus totam ullam voluptas voluptate voluptatibus! Accusantium
						dignissimos et hic maxime mollitia nam nemo nobis perspiciatis, provident, reiciendis repellendus
						reprehenderit saepe tenetur. Ducimus explicabo hic nihil quia quibusdam quidem ratione voluptas. Ad
						dolorum excepturi exercitationem laborum maiores pariatur repudiandae! Aliquam consequuntur culpa
						cupiditate dolor dolore ducimus enim harum illum, minima nisi nostrum obcaecati perferendis ratione
						reiciendis reprehenderit rerum, vitae. Adipisci blanditiis commodi cum dicta dolore doloribus dolorum eos
						facilis id impedit iure labore maxime, molestiae neque nihil non officiis quam, quidem recusandae rerum
						sequi tempora ut velit? Animi aperiam atque cupiditate dolor eum excepturi impedit, in maxime minus nam
						non perspiciatis possimus provident quis sed, sequi sit suscipit tempora tempore unde. Adipisci amet
						debitis eaque earum iusto maxime nisi non qui rerum veritatis. Aliquid aperiam deleniti earum ex
						exercitationem, ipsa iure neque nulla numquam odit omnis pariatur quos reiciendis repellat sapiente sequi
						voluptatum! Adipisci, architecto aspernatur consectetur culpa cupiditate dicta labore libero modi, nisi
						obcaecati omnis, pariatur provident quae quisquam tempore unde voluptatem! Ad asperiores commodi fugit hic
						iure maxime nisi nobis quasi qui ullam? Consequuntur delectus, dolorum error modi natus nemo perferendis
						quasi sit. Asperiores autem blanditiis commodi consequuntur doloremque eaque enim ex explicabo maiores nam
						officiis, perspiciatis quae quod recusandae unde! Ad, dolorem eos explicabo fugit iure odit quas ratione
						recusandae ut! Ad architecto aut autem consectetur culpa cum distinctio enim error ex expedita in iure
						laudantium libero minima mollitia neque nesciunt non numquam officiis pariatur perspiciatis placeat porro
						provident, quaerat qui quia recusandae repellendus repudiandae ullam vel velit vero voluptas voluptates! A
						aut dignissimos exercitationem fugiat nesciunt non provident sapiente sed vel! Amet consectetur
						consequuntur dolore eius ex explicabo laboriosam quos recusandae saepe, temporibus voluptate voluptatibus.
						Aperiam cum cumque est fugit harum impedit ipsam ipsum itaque labore odit provident quasi, quibusdam sed
						veniam, voluptatem?</Text>
				</ScrollBlock>
				<FlexContainer>
					<Button onClick={() => console.log('hi')}>Отказ</Button>
					<Button disabled={!agreement} onClick={nextStep}>Принять</Button>
				</FlexContainer>
			</FlexContainer>
		</>
	)
}