import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Menu } from '../../../components/menu/Menu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import socialImage from '../../../assets/images/design-portfolio.png';
import { NavigationButtons } from '../../../components/NavigationButtons';
import { Pag } from '../../../components/Pagination';
import { Container } from '../../../components/Container';
import { SliderPortfolio } from './Slider/SlederPortfolio';
import { myTheme } from '../../../styles/Theme.Styled';

const worksItems = ['All', 'Landing page', 'React', 'SPA']

const slideWorkItems = [
	{
		title: 'Social',
		description: 'blablabla',
		src: socialImage
	},
	{
		title: 'Timer',
		description: 'bla',
		src: socialImage
	},
	{
		title: 'Shop',
		description: 'blabla',
		src: socialImage
	},
	{
		title: 'Lalala',
		description: 'blablabla',
		src: socialImage
	},
]


export const Portfolio = () => {
	return (
		<StyledPortfolio>
			<Container>
				<FlexWrapper justify='space-between' align='center'>
					<SectionTitle>Portfolio</SectionTitle>
					<Menu menuItems={worksItems} />
					<NavigationButtons />
				</FlexWrapper>
				<SliderPortfolio slideItems={slideWorkItems} />
			</Container>
		</StyledPortfolio >
	);
};

const StyledPortfolio = styled.section`
	background-color: ${myTheme.colors.backGround.secondaryBg};
	${FlexWrapper} {
		margin: 0px 0px 60px 0px;
	}

`
