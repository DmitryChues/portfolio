import React, { useState } from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { Container } from '../../../components/Container';
import { MobileSkill } from './mobileSkill/MobileSkill';
import { DesktopSkill } from './desktopSkill/DesktopSkill';
import { S } from './Skills_Styles';

const skillsData = [
	{
		iconId: 'css',
		viewBox: '0 0 512 512',
		title: 'CSS',
		description: 'ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum placeat. Dolorem optio error labore.',
	},
	{
		iconId: 'styled',
		viewBox: '0 0 32 32',
		title: 'Styled Components',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum placeat. Dolorem optio error labore.',
	},
	{
		iconId: 'gitSkill',
		viewBox: '0 0 32 32',
		title: 'Git',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum placeat Consequatur, earum placeat. Dolorem optio error labore.',
	},
	{
		iconId: 'react',
		viewBox: '0 0 24 24',
		title: 'React',
		description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco',
	},
	{
		iconId: 'sass',
		viewBox: '0 -4 32 32',
		title: 'SASS',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum placeat. Dolorem optio error labore.',
	},
	{
		iconId: 'typescript',
		viewBox: '0 0 32 32',
		title: 'Type Script',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum placeat. Dolorem optio error labore.',
	},
	{
		iconId: 'html',
		viewBox: '0 0 512 512',
		title: 'HTML',
		description: 'Lorem ipsum dolor sit adipisicing elit. Consequatur, earum placeat. Dolorem optio error labore.',
	}
]



export const Skills = () => {
	const [width, setWidth] = React.useState(window.innerWidth);
	const breakpoint = 575.98;

	React.useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth)
		window.addEventListener("resize", handleWindowResize);

		// Return a function from the effect that removes the event listener
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	return (
		<S.Skills id='skills'>
			<Container>
				<SectionTitle>My skills</SectionTitle>
				<S.SkillsWrapper>

					{width < breakpoint ?
						skillsData.map((s, index) => {
							return (
								<MobileSkill key={index} iconId={s.iconId} title={s.title} description={s.description} viewBox={s.viewBox} />
							)
						})
						: skillsData.map((s, index) => {
							return (
								<DesktopSkill key={index} iconId={s.iconId} title={s.title} description={s.description} viewBox={s.viewBox} />
							)
						})
					}

				</S.SkillsWrapper>

			</Container>
		</S.Skills>
	);
};