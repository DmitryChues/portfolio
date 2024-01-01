import styled, { css } from "styled-components"
import { myTheme } from "../../../styles/Theme.Styled"
import { Link } from "react-scroll"

//======================  Menu ============================

const MenuItem = styled.li`
`

const NavLink = styled(Link)`
	font-family: Montserrat;
	font-size: 14px;
	font-weight: 600;
	text-transform: uppercase;
	text-align: center;
	cursor: pointer;
	&:hover, &.active {
		color: ${myTheme.colors.accent};
	}
`

//====================== Mobile Menu ============================

const MobileMenu = styled.nav`
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
	
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 50;
	overflow: auto;
	background-color: #111214f6;
	display: none;
	
	${props => props.isOpen && css<{ isOpen: boolean }>`
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		row-gap: 40px;
		justify-content:center;
		align-items: center;
	`}

	ul {
		display: flex;
		gap: 40px;
		flex-direction: column;
		align-items: center;
	}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
	width: 46px;
	height: 36px;
	padding: 12px;
	position: relative;
	z-index: 100;
	border: 1px solid ${myTheme.colors.font.medium};
	border-radius: 2px;

	span {
		display: block;
		width: 20px;
		height: 2px;
		background-color: ${myTheme.colors.font.medium};
		position: absolute;
		top: calc(50% - 1px);

		${props => props.isOpen && css<{ isOpen: boolean }>`
			background-color: transparent;
		`}

		&::before,
		&::after {
			content: '';
			display: block;
			width: 20px;
			height: 2px;
			background-color: ${myTheme.colors.font.medium};
			position: absolute;
		}

		&::before{
			transform: translateY(-5px);

			${props => props.isOpen && css<{ isOpen: boolean }>`
				transform: rotate(-40deg) translateY(0);
			`}
		}
		&::after{
			transform: translateY(5px);

			${props => props.isOpen && css<{ isOpen: boolean }>`
				transform: rotate(40deg) translateY(0);
			`}
		}

	}
`

//====================== Desktop Menu ============================

const DesktopMenu = styled.nav`
	ul {
		display: flex;
		gap: 50px;
	}
`

//====================== export ============================

export const S = {
	MenuItem,
	NavLink,

	MobileMenu,
	MobileMenuPopup,
	BurgerButton,

	DesktopMenu
}