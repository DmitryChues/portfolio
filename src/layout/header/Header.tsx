import React, { useState } from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { myTheme } from "../../styles/Theme.Styled";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { LinkContact } from "./linkContact/LinkContact"

const items = [
	{
		name: 'Home',
		id: 'home',
	},
	{
		name: 'About',
		id: 'about',
	},
	{
		name: 'Skills',
		id: 'skills',
	},
	{
		name: 'Portfolio',
		id: 'portfolio',
	},
	{
		name: 'Testimony',
		id: 'testimony',
	},
]



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
		<StyledHeader className={scrolled ? 'scrolled-header' : 'header'}>
			<Container>
				<FlexWrapper align="center" justify="space-between">
					<Logo />
					<HeaderMenu menuItems={items} />
					<LinkContact href="#contact">Contact</LinkContact>
					<MobileMenu menuItems={items} />
				</FlexWrapper>
			</Container>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
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

	& ${LinkContact} {
		@media ${myTheme.breakpoints.tablet} {
			display: none;
		}
	}
`