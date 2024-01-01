import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Sotial } from '../../../components/social/Sotial';
import { Container } from '../../../components/Container';
import { S } from './Main_Styles';

export const iconsData = [
	{
		id: "linkedin",
		viewbox: "0 0 20 20"
	},

	{
		id: "git",
		viewbox: "0 0 24 24"
	},

	{
		id: "telegram",
		viewbox: "0 0 48 48"
	}
]

export const Main: React.FC = () => {
	return (
		<S.Main id='home'>
			<Container>
				<FlexWrapper height='100%' align='flex-end' justify='space-between' gap='15px'>
					<div>
						<S.SmallText><span>Hello!</span> I am</S.SmallText>
						<S.Name>Dmitry Chues</S.Name>
						<S.MainTitle>A web developer</S.MainTitle>
					</div>
					<Sotial socialItem={iconsData} />
				</FlexWrapper>
			</Container>
		</S.Main>
	);
};