import styled from "styled-components";
import { myTheme } from "../styles/Theme.Styled";
import React from 'react';
import { Icon } from "./icon/Icon";

export const ButtonNavTestimony = () => {
	return (
		<BtnWrapper>
			<NavigationButton className='testimony-button-prev'>
				<Icon iconId={'arrow-prev'} width='20' height='20' viewBox='0 0 20 20' />
			</NavigationButton>
			<NavigationButton className='testimony-button-next'>
				<Icon iconId={'arrow-next'} width='20' height='20' viewBox='0 0 20 20' />
			</NavigationButton>
		</BtnWrapper>
	);
};

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

const BtnWrapper = styled.div`
	display: flex;
	gap: 20px;
`