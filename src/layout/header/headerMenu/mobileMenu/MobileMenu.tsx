import React, { useState } from 'react';
import { SH } from '../../Header_Styles';
import { S } from '../HeaderMenu_Styles';
import { Menu } from '../menu/Menu';


type menuItemsPropsType = {
	name: string;
	id: string
}

export const MobileMenu: React.FC<{ menuItems: Array<menuItemsPropsType> }> = (props: { menuItems: Array<menuItemsPropsType> }) => {
	const [menuIsOpen, setmenuIsOpen] = useState(false)
	const onBurgerBtnClick = () => { setmenuIsOpen(!menuIsOpen) }
	return (

		<S.MobileMenu>
			<S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
				<span></span>
			</S.BurgerButton>

			<S.MobileMenuPopup isOpen={menuIsOpen} >
				<Menu menuItems={props.menuItems} />
				<SH.LinkContact href="#contact">Contact</SH.LinkContact>
			</S.MobileMenuPopup>

		</S.MobileMenu>

	);
};