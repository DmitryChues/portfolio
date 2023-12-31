import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { TabMenu } from './tabMenu/TabMenu';
import socialImage from '../../../assets/images/design-portfolio.png';
import timerImage from '../../../assets/images/forSlidePortf.jpeg';
import deskImage from '../../../assets/images/forSlidePortfolio.jpeg';
import { NavigationButtons } from '../../../components/NavigationButtons';
import { Container } from '../../../components/Container';
import { SliderPortfolio } from './slider/SliderPortfolio';
import { S } from './Portfolio_Styles';

const worksItems = ['All', 'Landing page', 'React', 'SPA']

const slideWorkItems = [
	{
		title: 'Social',
		description: 'Lorem, ipsum dolor.',
		src: socialImage,
	},
	{
		title: 'Timer',
		description: 'Lorem, ipsum',
		src: timerImage,
	},
	{
		title: 'Shop',
		description: 'Lorem, ipsum dolor.',
		src: deskImage,
	},
	{
		title: 'Lalala',
		description: 'ipsum dolor',
		src: socialImage,
	},
]


export const Portfolio: React.FC = () => {
	return (
		<S.Portfolio id='portfolio'>
			<Container>
				<S.NavPortfolioWrapper>
					<SectionTitle>Portfolio</SectionTitle>
					<TabMenu menuItems={worksItems} />
					<NavigationButtons />
				</S.NavPortfolioWrapper>
				<SliderPortfolio slideItems={slideWorkItems} />
			</Container>
		</S.Portfolio >
	);
};