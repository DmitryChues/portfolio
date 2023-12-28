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
					<S.Link href={`#${item.id}`}>{item.name}</S.Link>
				</S.MenuItem>
			})}
		</ul>
	);
};