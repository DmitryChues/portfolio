import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { SliderReview } from './slider/SliderReview';
import { SliderPhoto } from './slider/SliderPhoto';
import { Container } from '../../../components/Container';
import { NavigationTestymony } from './slider/NavigationTestymony';
import { myTheme } from '../../../styles/Theme.Styled';
import img from '../../../assets/images/review.jpg'
import photo from '../../../assets/images/IMG_6434.webp'


const reviewData = [
	{
		photoPath: img,
		text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione praesentium voluptatibus sunt accusantium voluptas optio eum non soluta mollitia, nulla qui est amet velit totam provident veniam voluptatem! Esse, dicta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maxime explicabo nemo. Blanditiis cumque qui error natus quo expedita eaque distinctio nisi repellendus omnis sapiente autem sed commodi, quibusdam et!',
		name: 'Ivan Ivanov',
		profession: 'ceo'
	},
	{
		photoPath: photo,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maxime explicabo nemo. Blanditiis cumque qui error natus quo expedita eaque distinctio nisi repellendus omnis sapiente autem sed commodi, quibusdam et!',
		name: 'Ivan Ivanov',
		profession: 'ceo'
	},
	{
		photoPath: img,
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium mollitia cumque illum, quos unde vel in inventore consequatur amet tenetur facere consectetur doloribus, iure, temporibus distinctio assumenda libero atque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias necessitatibus, eveniet alias ipsum itaque id, sed nostrum nihil ducimus veniam quam inventore! Possimus provident fugiat quis ipsam natus earum tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maxime explicabo nemo. Blanditiis cumque qui error natus quo expedita eaque distinctio nisi repellendus omnis sapiente autem sed commodi, quibusdam et!',
		name: 'Ivan Ivanov',
		profession: 'ceo'
	}
]

export const Testimony: React.FC = () => {
	return (
		<StyledTestimony id='testimony'>
			<Container>

				<GridWrapper>
					<SliderPhoto photoData={reviewData} />
					<SectionTitle>Testimonial</SectionTitle>
					<IconWrapper>
						<Icon iconId={'quote'} viewBox='0 0 32 32' />
					</IconWrapper>
					<SliderReview textData={reviewData} />
					<NavigationTestymony />
				</GridWrapper>

			</Container>
		</StyledTestimony>
	);
};

const GridWrapper = styled.div`
	& ${SectionTitle} {
		margin: 0px 0px 40px 0px;
		@media ${myTheme.breakpoints.tablet} {
			margin: 0px 0px 20px 0px;
		}
		@media ${myTheme.breakpoints.mobile} {
			margin: 0px 0px 30px 0px;
		}
	}

	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-template-rows: auto auto 1fr auto;
	column-gap: 100px;
	min-width: 0;
	@media ${myTheme.breakpoints.tablet} {
		column-gap: 50px;
	}
	@media ${myTheme.breakpoints.mobile} {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(5, auto);
	}
`

const IconWrapper = styled.div`
	margin: 0px 0px 30px 0px;
	font-size: 0;
	@media ${myTheme.breakpoints.tablet} {
			margin: 0px 0px 15px 0px;
		}
`

const StyledTestimony = styled.section`
`
