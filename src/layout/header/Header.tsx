import React, { useState } from "react";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";
import { SH } from "./Header_Styles";

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



export const Header: React.FC = () => {

	const [width, setWidth] = React.useState(window.innerWidth);
	const breakpoint = 991.98;

	React.useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth)
		window.addEventListener("resize", handleWindowResize);

		// Return a function from the effect that removes the event listener
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

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
		<SH.Header className={scrolled ? 'scrolled-header' : 'header'}>
			<Container>
				<FlexWrapper align="center" justify="space-between">
					<Logo />

					{width < breakpoint ? <MobileMenu menuItems={items} /> : <DesktopMenu menuItems={items} />}
					{width > breakpoint ? <SH.LinkContact href="#contact">Contact</SH.LinkContact> : <></>}

				</FlexWrapper>
			</Container>
		</SH.Header>
	)
}