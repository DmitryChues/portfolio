import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { SliderReview } from './slider/SliderReview';
import { SliderPhoto } from './slider/SliderPhoto';
import { Container } from '../../../components/Container';
import { NavigationTestymony } from './slider/NavigationTestymony';
import photo1 from '../../../assets/images/review.jpg';
import photo2 from '../../../assets/images/IMG_6434.webp';
import photo3 from '../../../assets/images/DSC_0468.jpeg';
import photo4 from '../../../assets/images/MQOdUPQHpzk.jpg';
import { S } from './Testimony_Styles';


const reviewData = [
	{
		photoPath: photo1,
		text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione praesentium voluptatibus sunt accusantium voluptas optio eum non soluta mollitia, nulla qui est amet velit totam provident veniam voluptatem! Esse, dicta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maxime explicabo nemo. Blanditiis cumque qui error natus quo expedita eaque distinctio nisi repellendus omnis sapiente autem sed commodi, quibusdam et!',
		name: 'Ivan Ivanov',
		profession: 'ceo'
	},
	{
		photoPath: photo2,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maxime explicabo nemo. Blanditiis cumque qui error natus quo expedita eaque distinctio nisi repellendus omnis sapiente autem sed commodi, quibusdam et!',
		name: 'Sergey Petrov',
		profession: 'developer'
	},
	{
		photoPath: photo3,
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium mollitia cumque illum, quos unde vel in inventore consequatur amet tenetur facere consectetur doloribus, iure, temporibus distinctio assumenda libero atque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias necessitatibus, eveniet alias ipsum itaque id, sed nostrum nihil ducimus veniam quam inventore! Possimus provident fugiat quis ipsam natus earum tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maxime explicabo nemo. Blanditiis cumque qui error natus quo expedita eaque distinctio nisi repellendus omnis sapiente autem sed commodi, quibusdam et!',
		name: 'Viktoria Kurtsevich',
		profession: 'designer'
	},
	{
		photoPath: photo4,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maxime explicabo nemo. Blanditiis cumque qui error natus quo expedita eaque distinctio nisi repellendus omnis sapiente autem sed commodi, quibusdam et!',
		name: 'Viktor Bykov',
		profession: 'engineer'
	},
]

export const Testimony: React.FC = () => {
	return (
		<S.StyledTestimony id='testimony'>
			<Container>

				<S.GridWrapper>
					<SliderPhoto photoData={reviewData} />
					<SectionTitle>Testimonial</SectionTitle>
					<S.IconWrapper>
						<Icon iconId={'quote'} viewBox='0 0 32 32' />
					</S.IconWrapper>
					<SliderReview textData={reviewData} />
					<NavigationTestymony />
				</S.GridWrapper>

			</Container>
		</S.StyledTestimony>
	);
};