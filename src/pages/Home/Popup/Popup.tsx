import React, {useState} from "react";
import {Hidden, Inner, StyledPopup} from "./Popup.styled";
import {Text} from "../../../components/Text/Text";
import {FlexContainer} from "../../../components/FlexContainer/FlexContainer";

export const Popup: React.FC = (props) => {
	const [hide, setHide] = useState(true)
	const hideToggle = () => {
		setHide(!hide)
	}
	const arr = [1, 2, 3, 4, 5, 6]
	return (
		<>
			<Inner>
				{!hide && <Hidden>
					{arr.map((elem, index) => {
						return index !== arr.length - 1 &&
							<FlexContainer key={index} justify={'space-between'} align={'center'}>
								<FlexContainer column>
									<Text>Наименование</Text>
									<Text>Дата</Text>
								</FlexContainer>
								<button>оценить</button>
							</FlexContainer>
					})}
				</Hidden>}
			</Inner>
			<StyledPopup topLine={!hide} onClick={hideToggle}>
				{arr.map((elem, index) => {
					return index === arr.length - 1 &&
						<FlexContainer key={index} justify={'space-between'} align={'center'}>
							<FlexContainer column>
								<Text>Наименование</Text>
								<Text>Дата</Text>
								{!hide && <button>Продолить</button>}
							</FlexContainer>
							<Text>{hide ? 'развернуть' : 'свернуть'}</Text>
						</FlexContainer>
				})}
			</StyledPopup>
		</>
	)
}