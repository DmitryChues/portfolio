import styled from "styled-components"
import { myTheme } from "../../../styles/Theme.Styled"
import { font } from '../../../styles/Common';
import background from '../../../assets/images/mainBg.jpg';
import photo from '../../../assets/images/myBgPhoto.png'

const Main = styled.section`
	color: ${myTheme.colors.font.light};
	min-height: 100vh;
	display: flex;
	background: linear-gradient(to bottom, rgba(0,0,0,0) 70%,rgba(0, 0, 0, 0.75) 100%), url(${photo})70% 100%/auto 95% no-repeat, url(${background})0 0/cover no-repeat;
	@media ${myTheme.breakpoints.tablet} {
		background: linear-gradient(to bottom, rgba(0,0,0,0) 70%,rgba(0, 0, 0, 0.75) 100%), url(${photo})60% 100%/auto 95% no-repeat, url(${background})0 0/cover no-repeat;
	}
	@media ${myTheme.breakpoints.mobile} {
		background: linear-gradient(to bottom, rgba(0,0,0,0) 70%,rgba(0, 0, 0, 0.75) 100%), url(${photo})50% 100%/auto 95% no-repeat, url(${background})0 0/cover no-repeat;
	}
	@media ${myTheme.breakpoints.mobileSmall} {
		background: linear-gradient(to bottom, rgba(0,0,0,0) 70%,rgba(0, 0, 0, 0.75) 100%), url(${photo})30% 100%/auto 95% no-repeat, url(${background})0 0/cover no-repeat;
	}
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

const Name = styled.span`
	${font({ family: "'Anton', sans-serif", lineHeight: 1.18, Fmin: 58, Fmax: 130 })}
	display: block;
	letter-spacing: 1.95px;
	text-transform: uppercase;
`

// ========== export =====================================

export const S = {
	Main,
	SmallText,
	MainTitle,
	Name
}