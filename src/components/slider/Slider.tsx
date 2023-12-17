import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';
import { NavigationButtons } from '../NavigationButtons';
import { myTheme } from '../../styles/Theme.Styled';
import { Pag } from '../Pagination';

export const Slider = () => {
	return (
		<StyledSlider>

			<Slide>
				{/* фото как дивка с атрибутом бэкграунд */}
				<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maxime explicabo nemo. Blanditiis cumque qui error natus quo expedita eaque distinctio nisi repellendus omnis sapiente autem sed commodi, quibusdam et!</Text>
				<Name>Ivan Ivanov</Name>
				<Profession>ceo</Profession>
			</Slide>
			<FlexWrapper justify='space-between'>
				{/* <Pag /> */}
				<NavigationButtons />
			</FlexWrapper>

		</StyledSlider>
	);
};

const StyledSlider = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const Slide = styled.div`
	width: 100%;
	span {
		display: block;
	}
`

const Text = styled.p`
	margin: 0px 0px 20px 0px;
	color: ${myTheme.colors.font.dark};
	font-size: 16px;
	font-weight: 500;
	line-height: 228.571%;
	letter-spacing: -0.28px;
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