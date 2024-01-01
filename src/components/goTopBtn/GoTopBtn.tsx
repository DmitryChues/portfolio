import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { myTheme } from '../../styles/Theme.Styled';
import { animateScroll as scroll } from "react-scroll";

export const GoTopBtn = () => {

	const [showBtn, setShowBtn] = useState(false)
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 200) {
				setShowBtn(true)
			} else {
				setShowBtn(false)
			}
		})
	},)

	return (

		<>
			{showBtn && (
				<StyledGoTopBtn onClick={() => { scroll.scrollToTop() }}>
					<Icon iconId={'arrow-up'} width='20px' height='20px' viewBox="0 0 20 20"></Icon>
				</StyledGoTopBtn>)
			}
		</>


	);
};

const StyledGoTopBtn = styled.button`
	font-size: 0;
	background-color: ${myTheme.colors.font.medium};
	padding: 10px;
	position: fixed;
	right: 30px;
	bottom: 30px;
	border-radius: 2px;
	opacity: 0.2;
	&:hover {
		opacity: 0.7;
	}
`