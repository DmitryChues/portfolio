import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { Container } from '../../../components/Container';
import { Button } from '../../../components/Button';
import { S } from './About_Styles';

export const About = () => {
	return (
		<S.About id='about'>
			<Container>
				<SectionTitle>About me</SectionTitle>
				<S.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. In beatae, explicabo vero eum inventore ducimus provident natus minima unde minus dolore quidem est pariatur sapiente saepe, accusamus consectetur, qui sit!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt consectetur, libero nostrum nemo itaque beatae? Quas, illum aliquid? Nemo iure voluptatibus eaque molestias recusandae tempore earum harum soluta possimus veritatis nobis explicabo quisquam in, expedita perspiciatis temporibus? Quaerat, ipsum quam. Mollitia illum aperiam nemo corporis sunt. Perferendis exercitationem at laboriosam?</S.Text>
				<S.SloganWrapper>
					<S.Slogan>let's work together on Your Next Project</S.Slogan>
					<Button as={'a'} href="#contact">Hire me now</Button>
				</S.SloganWrapper>
			</Container>
		</S.About>
	);
};