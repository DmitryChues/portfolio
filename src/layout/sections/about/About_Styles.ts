import styled from "styled-components"
import { myTheme } from "../../../styles/Theme.Styled"
import bgSlogan from '../../../assets/images/bgSecondary.png'

const About = styled.section`
	background-color: ${myTheme.colors.backGround.secondaryBg};
	text-align: center;
	*:not(:last-child) {
		margin: 0px 0px 60px 0px;
		@media ${myTheme.breakpoints.tablet} {
			margin: 0px 0px 50px 0px;
		}
		@media ${myTheme.breakpoints.mobile} {
			margin: 0px 0px 40px 0px;
		}
		@media ${myTheme.breakpoints.mobileSmall} {
			margin: 0px 0px 30px 0px;
		}
	}
`

const Text = styled.p`
font-family: Montserrat;
font-weight: 500;
line-height: 228.571%;
letter-spacing: -0.28px;
`

const Slogan = styled.h3`
	color: ${myTheme.colors.font.light};
	font-family: Anton, sans-serif;
	font-size: calc( (100vw - 320px)/(1440 - 320) * (40 - 32) + 32px);
	
	letter-spacing: 0.8px;
	text-transform: capitalize;
	line-height: 140%;
`

const SloganWrapper = styled.div`
	text-align: center;
	padding: 90px;
	background: url(${bgSlogan})50%/cover no-repeat;
	${Slogan} {
		margin: 0px 0px 32px 0px;
	}
	@media ${myTheme.breakpoints.tablet} {
		padding: 70px;
	}
	@media ${myTheme.breakpoints.mobile} {
		padding: 60px;
	}
	@media ${myTheme.breakpoints.mobileSmall} {
		padding: 50px;
	}
`

export const S = {
	About,
	Text,
	Slogan,
	SloganWrapper
}