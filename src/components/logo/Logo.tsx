import React from "react";
import { Icon } from "../icon/Icon";
import { myTheme } from "../../styles/Theme.Styled";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

export const Logo = () => {
	return (
		<Link onClick={() => { scroll.scrollToTop() }}>
			<Icon iconId={'logo'} viewBox="0 0 436 200" width="80" height="40px" />
		</Link>
	)
}

const Link = styled.a`
	color: ${myTheme.colors.accent};
	font-size: 0;
	cursor: pointer;
	&:hover {
		color: ${myTheme.colors.buttonHover};
	}
`