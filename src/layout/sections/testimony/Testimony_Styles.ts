import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { myTheme } from "../../../styles/Theme.Styled"

const GridWrapper = styled.div`
	& ${SectionTitle} {
		margin: 0px 0px 40px 0px;
		@media ${myTheme.breakpoints.tablet} {
			margin: 0px 0px 20px 0px;
		}
		@media ${myTheme.breakpoints.mobile} {
			margin: 0px 0px 30px 0px;
		}
	}

	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-template-rows: auto auto 1fr auto;
	column-gap: 100px;
	min-width: 0;
	@media ${myTheme.breakpoints.tablet} {
		column-gap: 50px;
	}
	@media ${myTheme.breakpoints.mobile} {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(5, auto);
	}
`

const IconWrapper = styled.div`
	margin: 0px 0px 30px 0px;
	font-size: 0;
	@media ${myTheme.breakpoints.tablet} {
			margin: 0px 0px 15px 0px;
		}
`

const StyledTestimony = styled.section`
`

export const S = {
	GridWrapper,
	IconWrapper,
	StyledTestimony
}