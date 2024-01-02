import styled from "styled-components"
import { myTheme } from "../../../../styles/Theme.Styled"

const DesktopSkill = styled.div`
	background-color: ${myTheme.colors.backGround.secondaryBg};
	padding: 40px 30px 30px 20px;
	height: 100%;
	h3:not(:last-child) {
		margin: 0px 0px 8px 0px;
	}
`

const IconWrapper = styled.div`
	color: ${myTheme.colors.accent};
	margin: 0px 0px 24px 0px;
`

const SkillTitle = styled.h3`
	color: ${myTheme.colors.font.dark};
	font-size: 18px;
	font-weight: 700;
	line-height: 188%;
	letter-spacing: -0.64px;
`

const SkillText = styled.p`
	font-size: 16px;
	font-weight: 500;
	line-height: 170%;
	letter-spacing: -0.28px;
`

export const S = {
	DesktopSkill,
	IconWrapper,
	SkillTitle,
	SkillText
}