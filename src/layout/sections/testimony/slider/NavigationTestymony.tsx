import React from 'react';
import { Icon } from "../../../../components/icon/Icon";
import { S } from "./Slider_Styles";

export const NavigationTestymony: React.FC = () => {
	return (
		<S.PagNavWrapper>
			<S.Pag className='testymony-pagination' />
			<S.BtnWrapper>
				<S.NavigationButton className='testimony-button-prev'>
					<Icon iconId={'arrow-prev'} width='20' height='20' viewBox='0 0 20 20' />
				</S.NavigationButton>
				<S.NavigationButton className='testimony-button-next'>
					<Icon iconId={'arrow-next'} width='20' height='20' viewBox='0 0 20 20' />
				</S.NavigationButton>
			</S.BtnWrapper>
		</S.PagNavWrapper>
	);
};