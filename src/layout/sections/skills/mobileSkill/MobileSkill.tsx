import React, { useState } from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { S } from './MobileSkill_Styles';

type SkillPropsType = {
	iconId: string;
	viewBox: string;
	title: string;
	description: string;
	setSkillisOpen: (title: string) => void
	isOpen: boolean;
}


export const MobileSkill = (props: SkillPropsType) => {
	return (
		<>
			<S.StyledMobileSkill onClick={() => props.setSkillisOpen(props.title)} isOpen={props.isOpen} >
				<S.IconTitleWrapper>
					<Icon width='40' height='40' iconId={props.iconId} viewBox={props.viewBox} />

					<S.SkillTitle isOpen={props.isOpen} >{props.title}</S.SkillTitle>
				</S.IconTitleWrapper>
			</S.StyledMobileSkill>
			<S.SkillMobileTextPopup isOpen={props.isOpen}>
				<p>{props.description}</p>
				<S.CloseButton onClick={() => props.setSkillisOpen('close')}>
				</S.CloseButton>
			</S.SkillMobileTextPopup>
		</>
	)
};