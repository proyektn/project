import React, {useRef, useState} from "react";
// @ts-ignore
import move from '../../assets/video/BestVideo.webm';
import {FlexContainer} from "../../components/FlexContainer/FlexContainer";
import {ScrollBlock} from "../../components/ScrollBlock/ScrollBlock";

export const Home: React.FC = () => {
	const vidik = useRef(null)
	const [play, setPlay] = useState(true)


	const onScroll = () => {
		if (play) {
			// @ts-ignore
			vidik.current.pause(0)
			setPlay(false)
		}
	}

	return (
		<>
			<FlexContainer column border grow>
				<header>
					45px
					<img src="/" alt="logo" />
					<button>Фильтр</button>
				</header>
				<ScrollBlock onScroll={onScroll}>
					<video ref={vidik} autoPlay={true} controls width='300px'>
						<source src={move} />
					</video>
					<video autoPlay={false} controls width='300px'>
						<source src={move} />
					</video>
					<video autoPlay={false} controls width='300px'>
						<source src={move} />
					</video>
				</ScrollBlock>
			</FlexContainer>
			<footer>
				<nav> 45px
					<FlexContainer>
						<button>Анкеты</button>
						<button>Профиль</button>
						<button>Инвайты</button>
						<button>Оператор</button>
					</FlexContainer>
				</nav>
			</footer>
		</>
	)
}