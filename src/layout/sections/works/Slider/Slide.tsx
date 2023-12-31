import React from 'react';
import { S } from './Slide_Styles';

type PropsSlide = {
	title: string;
	src: string;
	description: string;
}

export const Slide: React.FC<PropsSlide> = (props: PropsSlide) => {
	return (


		<S.Slide>
			<S.Image src={props.src} />
			<S.WorkHover>
				<S.Title>
					{props.title}
				</S.Title>
				<S.Description>
					{props.description}
				</S.Description>
				<S.LinkWrapper>
					<S.Link href='https://www.google.com/'>Demo</S.Link>
					<S.Link href='https://www.google.com/'>Code</S.Link>
				</S.LinkWrapper>
			</S.WorkHover>
		</S.Slide>

	);
};