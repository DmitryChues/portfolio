import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { ContactItems } from './contactItems/ContactItems';
import { Sotial } from '../../../components/social/Sotial';
import { iconsData } from '../main/Main';
import { Container } from '../../../components/Container';
import { S } from './Contacts_Styles';


const contactsData = [
	{
		itemId: 'phone',
		title: 'Phone',
		value: '+375291140469',
	},
	{
		itemId: 'email',
		title: 'Email',
		value: 'dmitrychues2312@gmail.com',
	},
	{
		itemId: 'address',
		title: 'Address',
		value: 'Belarus, Borisov',
	}
]

export const Contacts: React.FC = () => {
	return (
		<S.Contacts id='contact'>

			<Container>
				<S.ContactsWrapper>
					<FlexWrapper direction='column' align='start' justify='space-between'>
						<SectionTitle>Contacts</SectionTitle>
						<FlexWrapper direction='column' align='start' justify='space-between' gap='42px'>
							<ContactItems contacts={contactsData} />
						</FlexWrapper>
						<Sotial socialItem={iconsData} flexDirection='row'></Sotial>
					</FlexWrapper>
					<S.Form>
						<S.FormTitle>I'm always open to discussing <span>web development work</span> or partnerships.</S.FormTitle>
						<S.GridWrapper>
							<div>
								<S.Label htmlFor="1" aria-describedby='1'>Your name*</S.Label>
								<S.Name type='text' id="1" placeholder="Enter your name here" aria-placeholder='Enter your name here' />
							</div>
							<div>
								<S.Label htmlFor="2" aria-describedby='2'>Email Address*</S.Label>
								<S.Email type='email' id="2" placeholder="Enter your email address here" aria-placeholder='Enter your email address here' />
							</div>
							<div>
								<S.Label htmlFor="3" aria-describedby='3'>Message</S.Label>
								<S.Messege id="3" placeholder="Write your message here" aria-placeholder='Write your message here' />
							</div>
						</S.GridWrapper>
						<Button type='submit'>Send message</Button>
					</S.Form>
				</S.ContactsWrapper>
			</Container>

		</S.Contacts>
	);
};

