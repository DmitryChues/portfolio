import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { myTheme } from '../../../../styles/Theme.Styled';

type skillsIconType = {
	id: string;
	viewBox: string;
	title: string;
	description: string;
}

export const Skill = (props: { skillsItem: Array<skillsIconType> }) => {
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
	h3 + p {
		margin: 8px 0px 0px 0px;
	}
	/* text-align: center; */
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
`