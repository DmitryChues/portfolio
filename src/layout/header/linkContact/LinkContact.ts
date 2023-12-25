import React from 'react';
import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.Styled";

export const LinkContact = styled.a`
	padding: 12px 16px;
	color: ${myTheme.colors.accent};
	font-size: 14px;
	font-weight: 600;
	text-transform: uppercase;
	border-radius: 4px;
	border: 1px solid ${myTheme.colors.accent};
	&:hover {
		background-color: ${myTheme.colors.accent};
		color: ${myTheme.colors.font.light};
	}
`