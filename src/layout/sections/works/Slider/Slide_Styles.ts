import styled from "styled-components"
import { myTheme } from "../../../../styles/Theme.Styled"

const WorkHover = styled.div`
	display: flex;
	flex-direction: column;
	justify-content:center;
	align-items: center;
	gap: 5px;
	opacity: 0;
	background-color: rgba(0, 0, 0, 0.59);
	backdrop-filter: blur(2px);
	color: ${myTheme.colors.font.light};
	padding: 50px;
	transition: ${myTheme.animations.transition};

	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	@media ${myTheme.breakpoints.desktop} {
		padding: 20px;
		position: relative;
		align-items: start;
		opacity: 1;
		gap: 5px;
		background-color: ${myTheme.colors.backGround.primaryBg};
		color: ${myTheme.colors.font.medium};
	}
`

const Slide = styled.div`

	position: relative;

	@media screen and (min-width: 1140px){
		&:hover {
			& ${WorkHover} {
				opacity: 1;
			}
		}
	}
	
`

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	aspect-ratio: 4 / 3;
`

const Title = styled.h3`
	font-family: Anton;
	font-size: 32px;
	text-transform: uppercase;
`

const Description = styled.span`
flex: 1 1 auto;
font-size: 18px;
font-weight: 700;
line-height: 187.5%;
letter-spacing: -0.64px;
`

const Link = styled.a`
	padding: 16px 24px;
	border-radius: 4px;
	border: 1px solid ${myTheme.colors.font.light};
	transition: ${myTheme.animations.transition};
	
	&:hover {
		background-color: ${myTheme.colors.accent};
		border: 1px solid ${myTheme.colors.accent};
	}
	@media ${myTheme.breakpoints.desktop} {
		border: 1px solid ${myTheme.colors.font.medium};
		padding: 8px 12px;
		&:hover {
			background-color: ${myTheme.colors.accent};
			border: 1px solid ${myTheme.colors.accent};
			color: ${myTheme.colors.font.light};
		}
	}
`

const LinkWrapper = styled.div`
	display: flex;
	justify-content:center;
	align-items: center;
	gap: 20px;
	@media ${myTheme.breakpoints.desktop} {
		justify-content: flex-start;
	}
`

export const S = {
	WorkHover,
	Slide,
	Image,
	Title,
	Description,
	Link,
	LinkWrapper
}