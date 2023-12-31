import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Icon } from '../../../../components/icon/Icon';
import { myTheme } from '../../../../styles/Theme.Styled';

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
					<ContactInfo key={index}>
						<Icon iconId={item.itemId} viewBox='0 0 24 25' width='24' height='24' fill={myTheme.colors.accent}></Icon>
						<FlexWrapper direction='column' align='start'>
							<Title>{item.title}</Title>
							<Value>{item.value}</Value>
						</FlexWrapper>
					</ContactInfo>
				)
			})}
		</>
	);
};

const ContactInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
`
const Title = styled.span`
	color: ${myTheme.colors.font.additional};
	font-size: 18px;
	font-weight: 500;
	letter-spacing: -0.32px;
	margin: 0px 0px 10px 0px;
`
const Value = styled.span`
	font-weight: 500;
	letter-spacing: -0.28px;
`