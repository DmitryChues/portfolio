import styled from "styled-components";
import { myTheme } from "../styles/Theme.Styled";

export const Button = styled.button`
	color: ${myTheme.colors.font.light};
	padding: 16px 24px;
	border-radius: 4px;
	background-color: ${myTheme.colors.accent};
	font-family: Montserrat;
	font-size: 14px;
	font-weight: 600;
	line-height: normal;
	text-transform: uppercase;
	border: 1px solid ${myTheme.colors.accent};
	transition: ${myTheme.animations.transition};
	&:hover {
		color: ${myTheme.colors.font.light};
		background-color: ${myTheme.colors.buttonHover};
		border: 1px solid ${myTheme.colors.buttonHover};
	}
`