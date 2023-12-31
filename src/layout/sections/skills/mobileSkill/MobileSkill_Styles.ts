import styled, { css } from "styled-components"
import { myTheme } from "../../../../styles/Theme.Styled"

const StyledMobileSkill = styled.div<{ isOpen: boolean }>`
	transition: all 0.3s ease;
	background-color: ${myTheme.colors.backGround.secondaryBg};
	text-align: center;
	padding: 20px 20px 50px 20px;
	color: ${myTheme.colors.accent};
	
	position: relative;
	
	& :first-child {
		margin: 0px 0px 10px 0px;
	}

	&::after {
			content: '';
			display: block;
			position: absolute;
			width: 0;
			height: 0;
			border-left: 10px solid transparent;
			border-right: 10px solid transparent;
			border-top: 10px solid ${myTheme.colors.font.medium};
			bottom: 25px;
			left: 50%;
			transform: translateX(-50%);
			transition: all 0.5s ease;
		}

	${props => props.isOpen && css<{ isOpen: boolean }>`
		background-color: ${myTheme.colors.accent};
		color: ${myTheme.colors.font.light};
		&::after {
			transform: rotate(180deg) translateX(50%);
			border-top: 10px solid ${myTheme.colors.font.light};
		}
	`}
`

const SkillTitle = styled.h3<{ isOpen: boolean }>`
	color: ${myTheme.colors.font.dark};
	font-size: 18px;
	font-weight: 700;
	line-height: 120%;
	letter-spacing: -0.64px;
	${props => props.isOpen && css<{ isOpen: boolean }>`
		color: ${myTheme.colors.font.light};
	`}
`

const SkillMobileTextPopup = styled.div`
	background-color: ${myTheme.colors.accent};
	color: ${myTheme.colors.font.light};
	font-size: 16px;
	font-weight: 500;
	line-height: 170%;
	letter-spacing: -0.28px;
	grid-column: 1/3;
	& p {
		padding: 20px;
	}
`

export const S = {
	StyledMobileSkill,
	SkillTitle,
	SkillMobileTextPopup
}