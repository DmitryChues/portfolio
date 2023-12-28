import React from 'react';
import { Menu } from '../menu/Menu';
import { S } from '../HeaderMenu_Styles';

type menuItemsPropsType = {
	name: string;
	id: string
}

export const DesktopMenu: React.FC<{ menuItems: Array<menuItemsPropsType> }> = (props: { menuItems: Array<menuItemsPropsType> }) => {
	return (

		<S.DesktopMenu>
			<Menu menuItems={props.menuItems} />
		</S.DesktopMenu>

	);
};