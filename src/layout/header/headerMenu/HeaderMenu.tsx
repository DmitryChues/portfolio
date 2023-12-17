import React from 'react';
import styled from 'styled-components';
import { myTheme } from '../../../styles/Theme.Styled';

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
	return (

		<StyledHeaderMenu>
			<ul>

				{props.menuItems.map((item, index) => {
					return <ListItem key={index}>
						<Link href="#">{item}</Link>
					</ListItem>
				})}

			</ul>
		</StyledHeaderMenu>

	);
};

const StyledHeaderMenu = styled.nav`
	ul {
		display: flex;
		gap: 50px;
	}
`

const ListItem = styled.li`
	
`

const Link = styled.a`
	font-family: Montserrat;
	font-size: 14px;
	font-weight: 600;
	text-transform: uppercase;
	text-align: center;
	&:hover {
		color: ${myTheme.colors.accent};
	}
`