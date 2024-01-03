import styled, { css } from "styled-components"
import { myTheme } from "../../../../styles/Theme.Styled"
import { motion } from "framer-motion"

const IconTitleWrapper = styled.div`
	transition: ${myTheme.animations.transition};
	& :first-child {
		margin: 0px 0px 10px 0px;
	}
`

const StyledMobileSkill = styled.div<{ isOpen: boolean }>`
	transition: all 0.3s ease;
	background-color: ${myTheme.colors.backGround.secondaryBg};
	text-align: center;
	padding: 20px 20px 50px 20px;
	color: ${myTheme.colors.accent};
	min-height: 146px;
	position: relative;

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
		& ${IconTitleWrapper} {
			transform: scale(1.2) translateY(10%);
		}
		&::after {
			bottom: -10px;
			border-top: 10px solid ${myTheme.colors.accent};
		}
	`}
`

const SkillTitle = styled.h3<{ isOpen: boolean }>`
	color: ${myTheme.colors.font.dark};
	font-size: 18px;
	font-weight: 700;
	line-height: 120%;
	letter-spacing: -0.64px;
	transition: .5s ease-in-out;
	${props => props.isOpen && css<{ isOpen: boolean }>`
		color: ${myTheme.colors.font.light};
	`}
`

const SkillMobileTextPopup = styled(motion.div) <{ isOpen: boolean }>`
	background-color: ${myTheme.colors.accent};
	color: ${myTheme.colors.font.light};
	font-size: 16px;
	font-weight: 500;
	line-height: 170%;
	letter-spacing: -0.28px;
	grid-column: 1/3;
	display: none;
	transition: ${myTheme.animations.transition};
	padding: 20px;
	& p {
		margin: 0px 0px 10px 0px;
	}
	${props => props.isOpen && css<{ isOpen: boolean }>`
		transition: ${myTheme.animations.transition};
		display: block;
	`}
`

const CloseButton = styled.button`
	height: 30px;
	width: 100%;
	text-align: center;
	position: relative;
	&::after,
	&::before {
		content: '';
		width: 20px;
		height: 2px;
		background-color: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
	}
	&::after {
		transform: translate(-50%, -50%) rotate(45deg);
	}
	&::before {
		transform: translate(-50%, -50%) rotate(-45deg);
	}
`

export const S = {
	IconTitleWrapper,
	StyledMobileSkill,
	SkillTitle,
	SkillMobileTextPopup,
	CloseButton
}