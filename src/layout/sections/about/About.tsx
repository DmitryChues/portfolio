import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Container } from '../../../components/Container';
import { Button } from '../../../components/Button';
import { myTheme } from '../../../styles/Theme.Styled';
import bgSlogan from '../../../assets/images/bgSecondary.png'

export const About = () => {
	return (
		<StyledAbout>
			<Container>
				<SectionTitle>About me</SectionTitle>
				<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. In beatae, explicabo vero eum inventore ducimus provident natus minima unde minus dolore quidem est pariatur sapiente saepe, accusamus consectetur, qui sit!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt consectetur, libero nostrum nemo itaque beatae? Quas, illum aliquid? Nemo iure voluptatibus eaque molestias recusandae tempore earum harum soluta possimus veritatis nobis explicabo quisquam in, expedita perspiciatis temporibus? Quaerat, ipsum quam. Mollitia illum aperiam nemo corporis sunt. Perferendis exercitationem at laboriosam?</Text>
				<StyledSlogan>
					<Slogan>let's work together on Your Next Project</Slogan>
					<Button as={'a'} href='#'>Hire me now</Button>
				</StyledSlogan>
			</Container>
		</StyledAbout>
	);
};

const StyledAbout = styled.section`
	background-color: ${myTheme.colors.backGround.secondaryBg};
	text-align: center;
	*:not(:last-child) {
		margin: 0px 0px 60px 0px;
	}
`

const Text = styled.p`
font-family: Montserrat;
font-weight: 500;
line-height: 228.571%;
letter-spacing: -0.28px;
`

const Slogan = styled.h3`
	color: ${myTheme.colors.font.light};
	font-family: Anton, sans-serif;
	font-size: 40px;
	letter-spacing: 0.8px;
	text-transform: capitalize;
`

const StyledSlogan = styled.div`
	text-align: center;
	padding: 90px 0px;
	background: url(${bgSlogan})50%/cover no-repeat;
	${Slogan} {
		margin: 0px 0px 32px 0px;
	}
`