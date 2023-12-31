import React from 'react';
import { S } from '../Portfolio_Styles';

export const TabMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
	return (

		<S.Menu>
			<ul>

				{props.menuItems.map((item, index) => {
					return <S.Item key={index}>
						<S.Button>{item}</S.Button>
					</S.Item>
				})}

			</ul>
		</S.Menu>

	);
};