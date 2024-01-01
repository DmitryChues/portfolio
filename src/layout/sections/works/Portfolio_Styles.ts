import styled, { css } from "styled-components"
import { myTheme } from "../../../styles/Theme.Styled"
import { FlexWrapper } from "../../../components/FlexWrapper"

// ========== portfolio ========================================

const NavPortfolioWrapper = styled.div`
	display: flex;
	justify-content:space-between;
	align-items: center;
	margin: 0px 0px 60px 0px;
	gap: 15px;
	@media ${myTheme.breakpoints.tablet} {
		margin: 0px 0px 40px 0px;
	} 
	@media ${myTheme.breakpoints.mobile} {
		flex-direction: column;
		align-items: flex-start;
		margin: 0px 0px 30px 0px;
	}
`

const Portfolio = styled.section`
	background-color: ${myTheme.colors.backGround.secondaryBg};
	${FlexWrapper} {
		margin: 0px 0px 60px 0px;
	}
`
// ======== tabMenu===========================================

const Menu = styled.nav`
	ul {
		display: flex;
		flex-wrap: wrap;
		column-gap: 10px;
	}
`

const Item = styled.li`
`

const Button = styled.button<{ active?: boolean }>`
	font-size: 14px;
	font-weight: 600;
	text-transform: uppercase;
	display: inline-block;
	padding: 12px 16px;
	border: 1px solid transparent;
	&:hover {
		border: 1px solid ${myTheme.colors.accent};
		color: ${myTheme.colors.accent};
		border-radius: 4px;
	}

	${props => props.active && css<{ active?: boolean }>`
		border: 1px solid ${myTheme.colors.accent};
		color: ${myTheme.colors.accent};
		border-radius: 4px;
	`}
`

export const S = {
	NavPortfolioWrapper,
	Portfolio,
	Menu,
	Item,
	Button
}