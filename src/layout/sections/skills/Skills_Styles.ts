import styled from "styled-components"
import { myTheme } from "../../../styles/Theme.Styled"
import { SectionTitle } from "../../../components/SectionTitle"

const Skills = styled.section`
	
	${SectionTitle} {
		text-align: center;
		margin: 0 0 80px 0;
		
		@media ${myTheme.breakpoints.tablet} {
			margin: 0 0 60px 0;
		}
		@media ${myTheme.breakpoints.mobile} {
			margin: 0 0 50px 0;
		}
		@media ${myTheme.breakpoints.mobileSmall} {
			margin: 0 0 40px 0;
		}
	}
`

const SkillsWrapper = styled.div`
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-flow: dense;
		gap: 40px;
		@media ${myTheme.breakpoints.tablet} {
			grid-template-columns: repeat(3, 1fr);
			gap: 30px;
		}
		@media ${myTheme.breakpoints.mobile} {
			grid-template-columns: repeat(2, 1fr);
			gap: 20px;
		}
		@media ${myTheme.breakpoints.mobileSmall} {
			gap: 10px;
		}
`

export const S = {
	Skills,
	SkillsWrapper
}