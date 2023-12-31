import React from 'react';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Icon } from '../../../../components/icon/Icon';
import { S } from '../Contacts_Styles';

type ContactPropsType = {
	itemId: string;
	title: string;
	value: string;
}

export const ContactItems: React.FC<{ contacts: Array<ContactPropsType> }> = (props: { contacts: Array<ContactPropsType> }) => {
	return (
		<>
			{props.contacts.map((item, index) => {
				return (
					<S.ContactInfo key={index}>
						<S.IconWrapper>
							<Icon iconId={item.itemId} viewBox='0 0 24 25' width='24' height='24'></Icon>
						</S.IconWrapper>
						<FlexWrapper direction='column' align='start'>
							<S.Title>{item.title}</S.Title>
							<S.Value>{item.value}</S.Value>
						</FlexWrapper>
					</S.ContactInfo>
				)
			})}
		</>
	);
};