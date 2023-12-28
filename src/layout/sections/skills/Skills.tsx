import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';
import { myTheme } from '../../../styles/Theme.Styled';
import { MobileSkill } from './mobileSkill/MobileSkill';

const skillsData = [
	{
		id: 'css',
		viewBox: '0 0 512 512',
		title: 'CSS',
		description: 'ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum placeat. Dolorem optio error labore.',
	},
	{
		id: 'styled',
		viewBox: '0 0 32 32',
		title: 'Styled Components',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum placeat. Dolorem optio error labore.',
	},
	{
		id: 'gitSkill',
		viewBox: '0 0 32 32',
		title: 'Git',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum placeat Consequatur, earum placeat. Dolorem optio error labore.',
	},
	{
		id: 'react',
		viewBox: '0 0 24 24',
		title: 'React',
		description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco',
	},
	{
		id: 'sass',
		viewBox: '0 -4 32 32',
		title: 'SASS',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum placeat. Dolorem optio error labore.',
	},
	{
		id: 'typescript',
		viewBox: '0 0 32 32',
		title: 'Type Script',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum placeat. Dolorem optio error labore.',
	},
	{
		id: 'html',
		viewBox: '0 0 512 512',
		title: 'HTML',
		description: 'Lorem ipsum dolor sit adipisicing elit. Consequatur, earum placeat. Dolorem optio error labore.',
	}
]



export const Skills = () => {
	return (
		<StyledSkills id='skills'>
			<Container>
				<SectionTitle>My skills</SectionTitle>
				<FlexWrapper justify='center' wrap='wrap'>
					<Skill skillsItem={skillsData} />
					<MobileSkill skillsItem={skillsData} />
				</FlexWrapper>

			</Container>
		</StyledSkills>
	);
};

const StyledSkills = styled.section`
	${FlexWrapper} {
		margin: 0 -20px;
		gap: 40px;
		/* position: relative; */
		@media ${myTheme.breakpoints.tablet} {
			margin: 0 -15px;
			gap: 30px;
		}
		@media ${myTheme.breakpoints.mobile} {
			margin: 0 -10px;
			gap: 20px;
		}
		@media ${myTheme.breakpoints.mobileSmall} {
			margin: 0 -5px;
			gap: 10px;
		}
	}
	${SectionTitle} {
		text-align: center;
		margin: 0 0 80px 0;
		
		@media ${myTheme.breakpoints.tablet} {
			margin: 0 0 60px 0;
		}
		@media ${myTheme.breakpoints.mobile} {
			margin: 0 0 50px 0;
		}
		@media ${myTheme.breakpoints.mobileSmall} {
			margin: 0 0 40px 0;
		}
	}
`