import React from 'react';
import styled, { css } from 'styled-components';
import { myTheme } from '../styles/Theme.Styled';
import { Icon } from './icon/Icon';

export const NavigationButtons = (props: { disable?: boolean }) => {
	return (
		<StyledButtons disable={props.disable}>
			<NavigationButton className='swiper-button-prev'>
				<Icon iconId={'arrow-prev'} width='20' height='20' viewBox='0 0 20 20' />
			</NavigationButton>
			<NavigationButton className='swiper-button-next'>
				<Icon iconId={'arrow-next'} width='20' height='20' viewBox='0 0 20 20' />
			</NavigationButton>
		</StyledButtons>
	);
};

const StyledButtons = styled.div<{ disable?: boolean }>`
	align-self: flex-end;
	display: flex;
	gap: 24px;
	${props => props.disable && css<{ disable?: boolean }>`
		opacity: 0.5;
	`}
`

const NavigationButton = styled.button`
	font-size: 0;
	width: 40px;
	height: 40px;
	border-radius: 2px;
	background-color: ${myTheme.colors.accent};
	transition: ${myTheme.animations.transition};
	&:hover {
		background-color: ${myTheme.colors.buttonHover};
	}
`