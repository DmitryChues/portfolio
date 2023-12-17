import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/myBgPhoto.png'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { myTheme } from '../../../styles/Theme.Styled';
import { Sotial } from '../../../components/social/Sotial';
import { Container } from '../../../components/Container';
import background from '../../../assets/images/bgMain.png';

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

export const Main = () => {
	return (
		<StyledMain>
			<Container>
				<FlexWrapper height='100%' align='flex-end' justify='space-between'>
					<div>
						<SmallText><span>Hello!</span> I am</SmallText>
						<Name>Dmitry Chues</Name>
						<MainTitle>A web developer</MainTitle>
					</div>
					{/* <Photo src={photo} alt="" /> */}
					<Sotial socialItem={iconsData} />
				</FlexWrapper>
			</Container>
		</StyledMain>
	);
};

const StyledMain = styled.section`
	color: ${myTheme.colors.font.light};
	min-height: 100vh;
	display: flex;
	background: linear-gradient(to bottom, rgba(0,0,0,0) 70%,rgba(0, 0, 0, 0.75) 100%), url(${photo})70% 100%/auto 95% no-repeat, url(${background})0 0/cover no-repeat;
`

const SmallText = styled.span`
	font-size: 24px;
	font-weight: 700;
	line-height: 125%;
	letter-spacing: -0.96px;
	& span {
		color: ${myTheme.colors.accent};
	}
`

const MainTitle = styled.h1`
	font-size: 18px;
	font-weight: 700;
	line-height: 187.5%;
	letter-spacing: -0.54px;
`

const Name = styled.h2`
	font-family: Anton;
	font-size: 130px;
	font-weight: 400;
	line-height: 118%;
	letter-spacing: 1.95px;
	text-transform: uppercase;
`