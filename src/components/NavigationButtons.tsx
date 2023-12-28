import React from 'react';
import styled from 'styled-components';
import { myTheme } from '../styles/Theme.Styled';
import { Icon } from './icon/Icon';

export const NavigationButtons = () => {
	return (
		<StyledButtons>
			<NavigationButton className='swiper-button-prev'>
				<Icon iconId={'arrow-prev'} width='20' height='20' viewBox='0 0 20 20' />
			</NavigationButton>
			<NavigationButton className='swiper-button-next'>
				<Icon iconId={'arrow-next'} width='20' height='20' viewBox='0 0 20 20' />
			</NavigationButton>
		</StyledButtons>
	);
};

const StyledButtons = styled.div`
	align-self: flex-end;
	display: flex;
	gap: 24px;
`

const NavigationButton = styled.button`
	font-size: 0;
	width: 40px;
	height: 40px;
	border-radius: 2px;
	background-color: ${myTheme.colors.accent};
	&:hover {
		background-color: ${myTheme.colors.buttonHover};
	}
`