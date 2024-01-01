import React, { useState } from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { TabMenu, TabsStatusType, TabsItemsPropsType } from './tabMenu/TabMenu';
import socialImage from '../../../assets/images/design-portfolio.png';
import timerImage from '../../../assets/images/forSlidePortf.jpeg';
import deskImage from '../../../assets/images/forSlidePortfolio.jpeg';
import { NavigationButtons } from '../../../components/NavigationButtons';
import { Container } from '../../../components/Container';
import { SliderPortfolio } from './slider/SliderPortfolio';
import { S } from './Portfolio_Styles';

const tabsItems: Array<TabsItemsPropsType> = [
	{
		title: 'All',
		status: 'all',
	},
	{
		title: 'Landing page',
		status: 'landing',
	},
	{
		title: 'React',
		status: 'react',
	},
	{
		title: 'SPA',
		status: 'spa',
	}
]

const slideWorkItems = [
	{
		title: 'Social',
		description: 'Lorem, ipsum dolor.',
		src: socialImage,
		type: 'react',
	},
	{
		title: 'Timer',
		description: 'Lorem, ipsum',
		src: timerImage,
		type: 'react',
	},
	{
		title: 'Shop',
		description: 'Lorem, ipsum dolor.',
		src: deskImage,
		type: 'react',
	},
	{
		title: 'Lalala',
		description: 'ipsum dolor',
		src: socialImage,
		type: 'landing',
	},
]


export const Portfolio: React.FC = () => {
	const [currentFilterStatus, setCurrentFilterStatus] = useState('all')

	let filteredWorks = slideWorkItems

	if (currentFilterStatus === 'landing') {
		filteredWorks = slideWorkItems.filter(work => work.type === 'landing')
	}
	if (currentFilterStatus === 'react') {
		filteredWorks = slideWorkItems.filter(work => work.type === 'react')
	}
	if (currentFilterStatus === 'spa') {
		filteredWorks = slideWorkItems.filter(work => work.type === 'spa')
	}

	function changeFilterStatus(value: TabsStatusType) {
		setCurrentFilterStatus(value)
	}

	// const [disabeledNavigation, setDisabeledNavigation] = useState(Boolean)
	// if (filteredWorks.length < 4) {
	// 	setDisabeledNavigation(true)
	// }

	return (
		<S.Portfolio id='portfolio'>
			<Container>
				<S.NavPortfolioWrapper>
					<SectionTitle>Portfolio</SectionTitle>
					<TabMenu tabsItems={tabsItems}
						changeFilterStatus={changeFilterStatus}
						currentFilterStatus={currentFilterStatus} />
					<NavigationButtons></NavigationButtons>
				</S.NavPortfolioWrapper>
				<SliderPortfolio slideItems={filteredWorks} />
			</Container>
		</S.Portfolio >
	);
};