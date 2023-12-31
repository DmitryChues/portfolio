import styled from "styled-components"
import { myTheme } from "../../styles/Theme.Styled"

const StyledFooter = styled.footer`
	padding: 30px 0px;
	background-color: ${myTheme.colors.backGround.footer};
	text-align: center;
	@media ${myTheme.breakpoints.mobile} {
		padding: 20px 0px;
	}
`

const Copyright = styled.small`
	
	color: ${myTheme.colors.font.additional};
	& span {
		color: #fff;
	}
`

export const S = {
	StyledFooter,
	Copyright
}