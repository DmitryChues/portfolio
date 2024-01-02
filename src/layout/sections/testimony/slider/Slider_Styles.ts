import styled from "styled-components"
import { myTheme } from "../../../../styles/Theme.Styled"

// ========= Sliders Navigation ===============================

const PagNavWrapper = styled.div`

	display: flex;
	justify-content: space-between;
	align-items: center;
`

const NavigationButton = styled.button`
	font-size: 0;
	width: 40px;
	height: 40px;
	border-radius: 2px;
	background-color: ${myTheme.colors.accent};
	transition: ${myTheme.animations.transition};
	&:hover {
		background-color: ${myTheme.colors.buttonHover};
	}
`

const BtnWrapper = styled.div`
	/* grid-column: 2/3; */
	display: flex;
	justify-content: space-between;
	gap: 20px;
`

const Pag = styled.div`
	& span {
		width: 20px;
		height: 4px;
		border-radius: 0;
		background-color: ${myTheme.colors.accent};
		transition: ${myTheme.animations.transition};
	}
`

// ========= Slider Photo =======================================

const SliderContainerPhoto = styled.div`
	min-width: 0;
	grid-row: 1/5;
	grid-column: 1/2;
	@media ${myTheme.breakpoints.mobile} {
		margin: 0px 0px 20px 0px;
		grid-row: 2/3;
	}
`

const Photo = styled.img`
	width: 100%;
	object-fit: cover;
	object-position: center;
	aspect-ratio: 3 / 4;
	@media ${myTheme.breakpoints.mobile} {
		max-width: 290px;
	}
`

// =========== Slider Rewiew ===================================

const SliderContainerRewiew = styled.div`
	min-width: 0;
`

const Review = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0px 0px 30px 0px;
	@media ${myTheme.breakpoints.tablet} {
		margin: 0px 0px 10px 0px;
	}
`

const Text = styled.p`
	margin: 0px 0px 20px 0px;
	color: ${myTheme.colors.font.dark};
	font-size: 16px;
	font-weight: 500;
	line-height: 228.571%;
	letter-spacing: -0.28px;
	@media ${myTheme.breakpoints.mobile} {
		line-height: 200%;
	}
`

const Name = styled.span`
	color: ${myTheme.colors.accent};
	font-size: 18px;
	font-weight: 700;
	line-height: 187.5%;
	letter-spacing: -0.64px;
`

const Profession = styled.span`
	font-size: 14px;
	font-weight: 600;
	line-height: 142.857%;
	letter-spacing: -0.56px;
`

export const S = {
	PagNavWrapper,
	NavigationButton,
	BtnWrapper,
	Pag,
	SliderContainerPhoto,
	Photo,
	SliderContainerRewiew,
	Review,
	Text,
	Name,
	Profession
}