import React from 'react';
import iconsSprite from '../../assets/images/sprite.svg'
import styled from 'styled-components';

type IconPropsType = {
	iconId: string
	width?: string
	height?: string
	viewBox?: string
	fill?: string
	stroke?: string
}

export const Icon = (props: IconPropsType) => {
	return (
		<Svg width={props.width || '50'} height={props.height || '50'} viewBox={props.viewBox || '0 0 88 73'} fill={props.fill} xmlns="http://www.w3.org/2000/svg">
			<use href={`${iconsSprite}#${props.iconId}`}></use>
		</Svg>
	)

};

type StyledSvgPropsType = {
	changeColor?: string;
}

export const Svg = styled.svg<StyledSvgPropsType>`
	&:hover {
		fill: ${props => props.changeColor};
	}
`