import React from 'react';
import { S } from '../Portfolio_Styles';

export type TabsStatusType = 'all' | 'landing' | 'react' | 'spa'

export type TabsItemsPropsType = {
	title: string,
	status: TabsStatusType
}

type TabMenuPropsType = {
	tabsItems: Array<TabsItemsPropsType>
	changeFilterStatus: (value: TabsStatusType) => void
	currentFilterStatus: string
}

export const TabMenu: React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
	return (

		<S.Menu>
			<ul>

				{props.tabsItems.map((item, index) => {
					return <S.Item key={index}>
						<S.Button active={props.currentFilterStatus === item.status} onClick={() => { props.changeFilterStatus(item.status) }}>{item.title}</S.Button>
					</S.Item>
				})}

			</ul>
		</S.Menu>

	);
};