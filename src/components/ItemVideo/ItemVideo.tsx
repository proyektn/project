import React, {ForwardedRef} from "react";
import {StyledItemVideo} from "./ItemVideo.styled";
import {Text} from "../Text/Text";

type ItemVideoProps = {
	src: any
	autoPlay: boolean
	ref?: ForwardedRef<any>
}

export const ItemVideo: React.FC<ItemVideoProps> = React.forwardRef(({autoPlay, children, src}, ref) => (
	<StyledItemVideo>
		<video ref={ref} autoPlay={autoPlay} controls width='250px'>
			<source src={src} />
		</video>
		<Text>{children}</Text>
	</StyledItemVideo>
))
