import styled from "styled-components";
import { myTheme } from "../../styles/Theme.Styled";

const LinkContact = styled.a`
	padding: 12px 16px;
	color: ${myTheme.colors.accent};
	font-size: 14px;
	font-weight: 600;
	text-transform: uppercase;
	border-radius: 4px;
	border: 1px solid ${myTheme.colors.accent};
	transition: ${myTheme.animations.transition};
	&:hover {
		background-color: ${myTheme.colors.accent};
		color: ${myTheme.colors.font.light};
	}
`

const Header = styled.header`
	background-color: transparent;
	color: ${myTheme.colors.font.light};
	padding: 20px 0px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 50;
	transition: all 0.3s ease;
	@media ${myTheme.breakpoints.tablet} {
		padding: 15px 0px;
	}
	
	&.scrolled-header {
		background-color: ${myTheme.colors.backGround.darkBg};
		padding: 15px 0px;
	}
`



export const SH = {
	Header,
	LinkContact
}