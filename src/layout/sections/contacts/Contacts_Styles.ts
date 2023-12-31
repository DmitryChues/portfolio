import styled from "styled-components"
import { myTheme } from "../../../styles/Theme.Styled"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle"
import contactBg from '../../../assets/images/contactBg.png'

const ContactsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	column-gap: 15px;
	@media ${myTheme.breakpoints.mobile} {
		flex-direction: column;
		row-gap: 50px;
		&>${FlexWrapper} {
			&>${FlexWrapper} {
				margin: 0px 0px 50px 0px;
			}
			
		}
	}
`

const Contacts = styled.section`
	background: url(${contactBg})0 0 /cover no-repeat;
	color: ${myTheme.colors.font.light};
	& ${SectionTitle} {
		color: ${myTheme.colors.font.light};
		margin: 0px 0px 50px 0px;
	}
`

const Form = styled.form`
	
`

const FormTitle = styled.h3`
	font-family: Anton;
	font-size: 24px;
	margin: 0px 0px 60px 0px;
	line-height: 120%;

	position: relative;

	& span {
		color: ${myTheme.colors.accent};
	}
	&::before {
		content: '';

		position: absolute;
		bottom: -24px;

		width: 100%;
		height: 1px;
		background-color: rgba(202, 205, 209, 0.10);
	}
`

const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto 1fr;
	gap: 30px;
	margin: 0px 0px 50px 0px;
	div:last-child {
		grid-column: 1/3;
	}

	div {
		display: flex;
		flex-direction: column;
	}

	& input, textarea {
		padding: 20px 16px;
		border-radius: 2px;
		background: rgba(202, 205, 209, 0.10);
		color: ${myTheme.colors.font.light};
		/* outline: none; */
		font-size: 14px;
		font-weight: 500;
		letter-spacing: -0.24px;

		&:focus-visible {
			outline: 1px solid #2e2e2e;
		}
	}

	@media ${myTheme.breakpoints.mobileSmall} {
		grid-template-columns: 1fr;
		margin: 0px 0px 30px 0px;
		div:last-child {
			grid-column: 1/2;
		}
	}
`

const Name = styled.input`
	
`

const Email = styled.input`

`

const Messege = styled.textarea`
	height: 130px;
	resize: none;
`

const Label = styled.label`
	font-weight: 500;
	letter-spacing: -0.28px;
	margin: 0px 0px 12px 0px;
`

export const S = {
	ContactsWrapper,
	Contacts,
	Form,
	FormTitle,
	GridWrapper,
	Name,
	Email,
	Messege,
	Label
}