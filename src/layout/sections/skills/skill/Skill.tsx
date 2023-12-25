import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { myTheme } from '../../../../styles/Theme.Styled';

type skillsItemType = {
	id: string;
	viewBox: string;
	title: string;
	description: string;
}

export const Skill = (props: { skillsItem: Array<skillsItemType> }) => {
	return (
		<>
			{props.skillsItem.map((item, index) => {
				return (
					<StyledSkill key={index}>
						<Icon width='40' height='40' iconId={item.id} viewBox={item.viewBox} fill={myTheme.colors.accent} />
						<SkillTitle>{item.title}</SkillTitle>
						<SkillText>{item.description}</SkillText>
					</StyledSkill>
				)
			})}
		</>
	);
};

const StyledSkill = styled.div`
	flex: 0 1 calc(100%/4 - 40px);
	background-color: ${myTheme.colors.backGround.secondaryBg};
	padding: 40px 30px 30px 20px;
	& :first-child {
		margin: 0px 0px 24px 0px;
	}
	h3:not(:last-child) {
		margin: 0px 0px 8px 0px;
	}
	
	@media ${myTheme.breakpoints.tablet} {
		flex: 0 1 calc(100%/3 - 30px);
	}
	@media ${myTheme.breakpoints.mobile} {
		flex: 0 1 calc(100%/2 - 20px);
	}
	@media ${myTheme.breakpoints.mobileSmall} {
		display: none;
	}
`

const SkillTitle = styled.h3`
	color: ${myTheme.colors.font.dark};
	font-size: 18px;
	font-weight: 700;
	line-height: 188%;
	letter-spacing: -0.64px;
`

const SkillText = styled.p`
	font-family: Montserrat;
	font-size: 16px;
	font-weight: 500;
	line-height: 170%;
	letter-spacing: -0.28px;
	@media ${myTheme.breakpoints.mobileSmall} {
		display: none;
	}
`