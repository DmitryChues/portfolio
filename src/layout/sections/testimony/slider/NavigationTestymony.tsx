import styled from "styled-components";
import { myTheme } from "../../../../styles/Theme.Styled";
import React from 'react';
import { Icon } from "../../../../components/icon/Icon";

export const NavigationTestymony = () => {
	return (
		<PagNavWrapper>
			<Pag className='testymony-pagination' />
			<BtnWrapper>
				<NavigationButton className='testimony-button-prev'>
					<Icon iconId={'arrow-prev'} width='20' height='20' viewBox='0 0 20 20' />
				</NavigationButton>
				<NavigationButton className='testimony-button-next'>
					<Icon iconId={'arrow-next'} width='20' height='20' viewBox='0 0 20 20' />
				</NavigationButton>
			</BtnWrapper>
		</PagNavWrapper>
	);
};

const PagNavWrapper = styled.div`

	display: flex;
	justify-content: space-between;
	align-items: center;
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

const BtnWrapper = styled.div`
	/* grid-column: 2/3; */
	display: flex;
	justify-content: space-between;
	gap: 20px;
`

const Pag = styled.div`
	& span {
		width: 20px;
		height: 4px;
		border-radius: 0;
		background-color: ${myTheme.colors.accent};
	}
`