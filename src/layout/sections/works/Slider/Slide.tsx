import React from 'react';
import styled from 'styled-components';
// import { SwiperSlide } from 'swiper/react';
import { myTheme } from '../../../../styles/Theme.Styled';

type PropsSlide = {
	title: string;
	src: string;
	description: string;
}

export const Slide = (props: PropsSlide) => {
	return (


		<StyledSlide>
			<StyledImage src={props.src} />
			<StyledWorkHover href='#'>
				<StyledTitle>
					{props.title}
				</StyledTitle>
				<StyledDescription>
					{props.description}
				</StyledDescription>
				<LinkWrapper>
					<StyledLink href='https://www.google.com/'>Demo</StyledLink>
					<StyledLink href='https://www.google.com/'>Code</StyledLink>
				</LinkWrapper>
			</StyledWorkHover>
		</StyledSlide>

	);
};

const StyledWorkHover = styled.a`
	display: none;
	pointer-events: auto;
	background-color: rgba(0, 0, 0, 0.59);
	color: ${myTheme.colors.font.light};
	padding: 50px;

	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
`

const StyledSlide = styled.div`
	/* background-color: #ffffff; */
	max-width: 100%;
	
	position: relative;
	

	&:hover {
		& ${StyledWorkHover} {
			display: flex;
			flex-direction: column;
			justify-content:center;
			align-items: center;
		}
	}
`

const StyledImage = styled.img`
	width: 100%;
	height: 260px;
	object-fit: cover;
`

const StyledTitle = styled.h3`
	font-family: Anton;
	font-size: 32px;
	text-transform: uppercase;
	
`

const StyledDescription = styled.span`
flex: 1 1 auto;
font-size: 18px;
font-weight: 700;
line-height: 187.5%;
letter-spacing: -0.64px;
`

const StyledLink = styled.a`
	padding: 16px 24px;
	border-radius: 4px;
	border: 1px solid ${myTheme.colors.font.light};
	&:hover {
		background-color: ${myTheme.colors.accent};
		border: 1px solid ${myTheme.colors.accent};
	}
`

const LinkWrapper = styled.div`
	display: flex;
	justify-content:center;align-items: center;
	gap: 20px
`