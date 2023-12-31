import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { S } from './DesktopSkill_Styles';

type SkillPropsType = {
	iconId: string;
	viewBox: string;
	title: string;
	description: string;
}

export const DesktopSkill = (props: SkillPropsType) => {
	return (

		<S.DesktopSkill>
			<S.IconWrapper>
				<Icon width='40' height='40' iconId={props.iconId} viewBox={props.viewBox} />
			</S.IconWrapper>
			<S.SkillTitle>{props.title}</S.SkillTitle>
			<S.SkillText>{props.description}</S.SkillText>
		</S.DesktopSkill>

	);
};