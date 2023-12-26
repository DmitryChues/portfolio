import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { myTheme } from '../../styles/Theme.Styled';

type socialItemType = {
	id: string;
	viewbox: string;
}

type SotialPropsType = {
	socialItem: Array<socialItemType>;
	flexDirection?: string;
}

type StyledSocialPropsType = {
	orientation?: string;
}

export const Sotial = (props: SotialPropsType) => {
	return (
		<StyledSotial orientation={props.flexDirection}>

			{props.socialItem.map((item, index) => {
				return <ListItem key={index}>
					<Link href="#">
						<Icon width='22' height='22' iconId={item.id} viewBox={item.viewbox} fill={myTheme.colors.font.light} stroke='white' />
					</Link>
				</ListItem>
			})}

		</StyledSotial>
	);
};

const Link = styled.a`
	font-size: 0;
	width: 42px;
	height: 42px;
	display: flex;
	justify-content:center;align-items: center;
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.20);
	&:hover {
		background-color: ${myTheme.colors.accent};
	}
`

const ListItem = styled.li`
`

const StyledSotial = styled.ul<StyledSocialPropsType>`
	display: flex;
	flex-direction: ${props => props.orientation || 'column'};
	gap: 20px;
`