import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { myTheme } from '../../../../styles/Theme.Styled';
import styled, { css } from 'styled-components';
import { useCollapse } from 'react-collapsed'
import { S } from './MobileSkill_Styles';

type SkillPropsType = {
	iconId: string;
	viewBox: string;
	title: string;
	description: string;
}

export const MobileSkill = (props: SkillPropsType) => {
	const config = {
		duration: 300,
	}
	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config)

	return (
		<>
			<S.StyledMobileSkill isOpen={isExpanded} {...getToggleProps()}>
				<Icon width='40' height='40' iconId={props.iconId} viewBox={props.viewBox} />
				<S.SkillTitle isOpen={isExpanded} >{props.title}</S.SkillTitle>

			</S.StyledMobileSkill>
			<S.SkillMobileTextPopup {...getCollapseProps()}><p>{props.description}</p></S.SkillMobileTextPopup>
		</>
	)
};