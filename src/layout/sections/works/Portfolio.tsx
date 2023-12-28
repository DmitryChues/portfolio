import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { TabMenu } from './TabMenu/TabMenu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import socialImage from '../../../assets/images/design-portfolio.png';
import timerImage from '../../../assets/images/forSlidePortf.jpeg';
import deskImage from '../../../assets/images/forSlidePortfolio.jpeg';
import { NavigationButtons } from '../../../components/NavigationButtons';
import { Container } from '../../../components/Container';
import { SliderPortfolio } from './slider/SliderPortfolio';
import { myTheme } from '../../../styles/Theme.Styled';

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


export const Portfolio = () => {
	return (
		<StyledPortfolio id='portfolio'>
			<Container>
				<NavPortfolioWrapper>
					<SectionTitle>Portfolio</SectionTitle>
					<TabMenu menuItems={worksItems} />
					<NavigationButtons />
				</NavPortfolioWrapper>
				<SliderPortfolio slideItems={slideWorkItems} />
			</Container>
		</StyledPortfolio >
	);
};

const NavPortfolioWrapper = styled.div`
	display: flex;
	justify-content:space-between;
	align-items: center;
	margin: 0px 0px 60px 0px;
	gap: 15px;
	@media ${myTheme.breakpoints.tablet} {
		margin: 0px 0px 40px 0px;
	} 
	@media ${myTheme.breakpoints.mobile} {
		flex-direction: column;
		align-items: flex-start;
		margin: 0px 0px 30px 0px;
	}
`

const StyledPortfolio = styled.section`
	background-color: ${myTheme.colors.backGround.secondaryBg};
	${FlexWrapper} {
		margin: 0px 0px 60px 0px;
	}
`
