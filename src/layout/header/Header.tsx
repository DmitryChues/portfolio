import React, { useState } from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { myTheme } from "../../styles/Theme.Styled";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import headerBg from '../../assets/images/contactBg.png'

const items = ['Home', 'About', 'Skills', 'Works']



export const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const handleScroll = () => {
		if (window.scrollY > 0) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};
	window.addEventListener('scroll', handleScroll);

	return (
		<StyledHeader className={scrolled ? 'scrolled-header' : ''}>
			<Container>
				<FlexWrapper align="center" justify="space-between">
					<Logo />
					<HeaderMenu menuItems={items} />
					<Link href="#">Contact</Link>
				</FlexWrapper>
			</Container>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	background-color: transparent;
	color: ${myTheme.colors.font.light};
	padding: 20px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 50;
	&.scrolled-header {
		background-color: ${myTheme.colors.backGround.darkBg};
		padding: 10px;
	}
`

const Link = styled.a`
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