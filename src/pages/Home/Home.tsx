import React, {useRef, useState} from "react";
// @ts-ignore
import move from '../../assets/video/BestVideo.webm';
import {FlexContainer} from "../../components/FlexContainer/FlexContainer";
import {ScrollBlock} from "../../components/ScrollBlock/ScrollBlock";
import {ItemVideo} from "../../components/ItemVideo/ItemVideo";
import {Popup} from "./Popup/Popup";

export const Home: React.FC = () => {
	const vidik = useRef()
	const [play, setPlay] = useState(true)


	const onScroll = () => {
		if (play) {
			// @ts-ignore
			vidik.current.pause(0)
			setPlay(false)
		}
	}

	const arr = [1, 2, 3, 4, 5, 6, 7]

	return (
		<>
			<FlexContainer column border grow>
				<FlexContainer height={'45px'} justify={'space-between'}>
					<img src="/" alt="logo" />
					<button>Фильтр</button>
				</FlexContainer>

				<ScrollBlock onScroll={onScroll}>
					{arr.map((elem, index) => {
						return index === 0
							? <ItemVideo key={index} autoPlay={true} ref={vidik} src={move}>Дополнительная информация</ItemVideo>
							: <ItemVideo key={index} autoPlay={false} src={move}>Дополнительная информация</ItemVideo>
					})}
				</ScrollBlock>
			</FlexContainer>
			<Popup/>
			<FlexContainer height={'45px'} justify={'space-around'}>
				<button>Анкеты</button>
				<button>Профиль</button>
				<button>Инвайты</button>
				<button>Оператор</button>
			</FlexContainer>
		</>
	)
}