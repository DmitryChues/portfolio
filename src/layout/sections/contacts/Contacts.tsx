import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Contact } from './contact/Contact';
import { Sotial } from '../../../components/social/Sotial';
import { iconsData } from '../main/Main';
import { myTheme } from '../../../styles/Theme.Styled';
import { Container } from '../../../components/Container';
import contactBg from '../../../assets/images/contactBg.png'

export const Contacts = () => {
	return (
		<StyledContacts>

			<Container>
				<FlexWrapper align='stretch' justify='space-between'>
					<FlexWrapper direction='column' align='start' justify='space-between'>
						<SectionTitle>Contacts</SectionTitle>
						<FlexWrapper direction='column' align='start' justify='space-between' gap='42px'>
							<Contact itemId='phone' title='Phone' value='+375291140469' />
							<Contact itemId='email' title='Email' value='dmitrychues2312@gmail.com' />
							<Contact itemId='address' title='Address' value='Belarus, Borisov' />
						</FlexWrapper>
						<Sotial socialItem={iconsData} flexDirection='row'></Sotial>
					</FlexWrapper>
					<StyledForm>
						<FormTitle>I'm always open to discussing <span>web development work</span> or partnerships.</FormTitle>
						<GridWrapper>
							<div>
								<Label htmlFor="1" aria-describedby='1'>Your name*</Label>
								<Name type='text' id="1" placeholder="Enter your name here" aria-placeholder='Enter your name here' />
							</div>
							<div>
								<Label htmlFor="2" aria-describedby='2'>Email Address*</Label>
								<Email type='email' id="2" placeholder="Enter your email address here" aria-placeholder='Enter your email address here' />
							</div>
							<div className='last'>
								<Label htmlFor="3" aria-describedby='3'>Message</Label>
								<Messege id="3" placeholder="Write your message here" aria-placeholder='Write your message here' />
							</div>
						</GridWrapper>
						<Button type='submit'>Send message</Button>
					</StyledForm>
				</FlexWrapper>
			</Container>

		</StyledContacts>
	);
};

const StyledContacts = styled.section`
	min-height: 50vh;
	background: url(${contactBg})0 0 /100% auto no-repeat;
	color: ${myTheme.colors.font.light};
	& ${SectionTitle} {
		color: ${myTheme.colors.font.light};
		margin: 0px 0px 50px 0px;
	}
`

const StyledForm = styled.form`
	
`

const FormTitle = styled.h3`
	font-family: Anton;
	font-size: 24px;
	margin: 0px 0px 60px 0px;

	position: relative;

	& span {
		color: ${myTheme.colors.accent};
	}
	&::before {
		content: '';

		position: absolute;
		bottom: -24px;

		width: 100%;
		height: 1px;
		background-color: rgba(202, 205, 209, 0.10);
	}
`

const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto 1fr;
	gap: 30px;
	margin: 0px 0px 50px 0px;
	div:last-child {
		grid-column: 1/3;
	}

	div {
		display: flex;
		flex-direction: column;
	}

	& input, textarea {
		padding: 20px 16px;
		border-radius: 2px;
		background: rgba(202, 205, 209, 0.10);
		color: ${myTheme.colors.font.light};
		outline: none;
		font-size: 14px;
		font-weight: 500;
		letter-spacing: -0.24px;
	}
`

const Name = styled.input`
	
`

const Email = styled.input`

`

const Messege = styled.textarea`
	height: 130px;
	resize: none;
`



const Label = styled.label`
	font-weight: 500;
	letter-spacing: -0.28px;
	margin: 0px 0px 12px 0px;
`