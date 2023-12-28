import React from 'react';
import styled from 'styled-components';
import { myTheme } from '../../../../styles/Theme.Styled';

export const TabMenu = (props: { menuItems: Array<string> }) => {
	return (

		<StyledMenu>
			<ul>

				{props.menuItems.map((item, index) => {
					return <Item key={index}>
						<Button>{item}</Button>
					</Item>
				})}

			</ul>
		</StyledMenu>

	);
};

const StyledMenu = styled.nav`
	ul {
		display: flex;
		flex-wrap: wrap;
		column-gap: 10px;
	}
`

const Item = styled.li`
`

const Button = styled.button`
	font-size: 14px;
	font-weight: 600;
	text-transform: uppercase;
	display: inline-block;
	padding: 12px 16px;
	border: 1px solid transparent;
	&:hover {
		border: 1px solid ${myTheme.colors.accent};
		color: ${myTheme.colors.accent};
		border-radius: 4px;
	}
`