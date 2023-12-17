import React from 'react';
import styled from 'styled-components';
import { myTheme } from '../../styles/Theme.Styled';

export const Menu = (props: { menuItems: Array<string> }) => {
	return (

		<StyledMenu>
			<ul>

				{props.menuItems.map((item, index) => {
					return <Item key={index}>
						<Link href="#">{item}</Link>
					</Item>
				})}

			</ul>
		</StyledMenu>

	);
};

const StyledMenu = styled.nav`
	ul {
		display: flex;
		gap: 24px;
	}
`

const Item = styled.li`
	font-size: 14px;
	font-weight: 600;
	text-transform: uppercase;
`

const Link = styled.a`
	display: inline-block;
	padding: 12px 16px;
	border: 1px solid transparent;
	&:hover {
		border: 1px solid ${myTheme.colors.accent};
		color: ${myTheme.colors.accent};
		border-radius: 4px;
	}
`