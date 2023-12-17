import React from 'react';
import styled from 'styled-components';
import { myTheme } from '../styles/Theme.Styled';

export const Pag = () => {
	return (

		<ItemsPagination className='swiper-pagination'>
		</ItemsPagination >

	);
};

const ItemsPagination = styled.div`
	font-size: 0;
	position: unset;
	margin: 40px 0 0 0;
	& span {
		width: 20px;
		height: 4px;
		border-radius: 0;
		background-color: ${myTheme.colors.accent};
	}
`