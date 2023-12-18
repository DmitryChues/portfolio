import React from "react";
import { Icon } from "../icon/Icon";
import { myTheme } from "../../styles/Theme.Styled";
import styled from "styled-components";

export const Logo = () => {
	return (
		<Link href="#">
			<Icon hover={myTheme.colors.font.light} iconId={'logo'} viewBox="0 0 436 200" width="80" height="40px" fill={myTheme.colors.accent} />
		</Link>
	)
}

const Link = styled.a`
	font-size: 0;
	
`