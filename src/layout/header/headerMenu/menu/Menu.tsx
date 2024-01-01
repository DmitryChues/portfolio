import React from 'react';
import { S } from '../HeaderMenu_Styles';


type menuItemsPropsType = {
	name: string;
	id: string
}

export const Menu: React.FC<{ menuItems: Array<menuItemsPropsType> }> = (props: { menuItems: Array<menuItemsPropsType> }) => {
	return (
		<ul>
			{props.menuItems.map((item, index) => {
				return <S.MenuItem key={index}>
					<S.NavLink activeClass='active' offset={-70} spy={true} smooth={true} duration={500} delay={500} to={item.id}>{item.name}</S.NavLink>
				</S.MenuItem>
			})}
		</ul>
	);
};