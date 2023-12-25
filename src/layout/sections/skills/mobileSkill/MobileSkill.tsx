import React, { useState } from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { myTheme } from '../../../../styles/Theme.Styled';
import styled, { css } from 'styled-components';

type skillsItemType = {
	id: string;
	viewBox: string;
	title: string;
	description: string;
}

export const MobileSkill = (props: { skillsItem: Array<skillsItemType> }) => {
	const [descriptionIsOpen, setDescriptionIsOpen] = useState(false)
	const onSkillBtnClick = () => { setDescriptionIsOpen(!descriptionIsOpen) }
	return (

		<>
			{props.skillsItem.map((item, index) => {
				return (
					<>
						<StyledMobileSkill isOpen={descriptionIsOpen} onClick={onSkillBtnClick} key={index}>
							<Icon width='40' height='40' iconId={item.id} viewBox={item.viewBox} fill={myTheme.colors.accent} />
							<SkillTitle>{item.title}</SkillTitle>
							<SkillMobileTextPopup isOpen={descriptionIsOpen}>{item.description}</SkillMobileTextPopup>
						</StyledMobileSkill>

					</>
				)
			})}
		</>
	);
};

const StyledMobileSkill = styled.button<{ isOpen: boolean }>`
	flex: 0 1 calc(100%/2 - 20px);
	background-color: ${myTheme.colors.backGround.secondaryBg};
	text-align: center;
	padding: 20px;
	display: none;
	& :first-child {
		margin: 0px 0px 24px 0px;
	}

	${props => props.isOpen && css<{ isOpen: boolean }>`
		/* flex: 0 1 calc(100% - 20px); */
	`}
	/* h3 + p {
		margin: 8px 0px 0px 0px;
	} */
	
	@media ${myTheme.breakpoints.mobileSmall} {
		display: block;
		position: relative;
		
	}
`

const SkillTitle = styled.h3`
	color: ${myTheme.colors.font.dark};
	font-size: 18px;
	font-weight: 700;
	line-height: 188%;
	letter-spacing: -0.64px;
	@media ${myTheme.breakpoints.mobileSmall} {
		line-height: 120%;
	}
`

const SkillMobileTextPopup = styled.p<{ isOpen: boolean }>`
	font-family: Montserrat;
	font-size: 16px;
	font-weight: 500;
	line-height: 170%;
	letter-spacing: -0.28px;
	display: none;
	

	${props => props.isOpen && css<{ isOpen: boolean }>`
		display: block;
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		border: 1px solid #000;
		z-index: 2;
		background-color: ${myTheme.colors.accent};
	`}
`