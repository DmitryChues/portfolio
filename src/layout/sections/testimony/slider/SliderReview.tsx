import React from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Controller } from 'swiper/modules';

import { myTheme } from '../../../../styles/Theme.Styled';
import 'swiper/css';
import 'swiper/css/pagination';

export const SliderReview = () => {
	return (
		<>
			<SliderContainer>
				<Swiper
					modules={[Navigation, Pagination, Controller]}
					navigation={{
						nextEl: '.testimony-button-next',
						prevEl: '.testimony-button-prev',
					}}
					autoHeight={true}
					pagination={{
						el: '.testymony-pagination',
						type: 'bullets',
						// clickable: true
					}}
				>
					<SwiperSlide>
						<Review>
							<Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione praesentium voluptatibus sunt accusantium voluptas optio eum non soluta mollitia, nulla qui est amet velit totam provident veniam voluptatem! Esse, dicta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maxime explicabo nemo. Blanditiis cumque qui error natus quo expedita eaque distinctio nisi repellendus omnis sapiente autem sed commodi, quibusdam et!</Text>
							<Name>Ivan Ivanov</Name>
							<Profession>ceo</Profession>
						</Review>
					</SwiperSlide>
					<SwiperSlide>
						<Review>
							<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maxime explicabo nemo. Blanditiis cumque qui error natus quo expedita eaque distinctio nisi repellendus omnis sapiente autem sed commodi, quibusdam et!</Text>
							<Name>Ivan Ivanov</Name>
							<Profession>ceo</Profession>
						</Review>
					</SwiperSlide>
					<SwiperSlide>
						<Review>
							<Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium mollitia cumque illum, quos unde vel in inventore consequatur amet tenetur facere consectetur doloribus, iure, temporibus distinctio assumenda libero atque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias necessitatibus, eveniet alias ipsum itaque id, sed nostrum nihil ducimus veniam quam inventore! Possimus provident fugiat quis ipsam natus earum tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maxime explicabo nemo. Blanditiis cumque qui error natus quo expedita eaque distinctio nisi repellendus omnis sapiente autem sed commodi, quibusdam et!</Text>
							<Name>Ivan Ivanov</Name>
							<Profession>ceo</Profession>
						</Review>
					</SwiperSlide>
				</Swiper>
			</SliderContainer>

		</>
	);
};

const SliderContainer = styled.div`
	min-width: 0;
`

const Review = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0px 0px 30px 0px;
	@media screen and (max-width: 992px) {
		margin: 0px 0px 10px 0px;
	}
`

const Text = styled.p`
	margin: 0px 0px 20px 0px;
	color: ${myTheme.colors.font.dark};
	font-size: 16px;
	font-weight: 500;
	line-height: 228.571%;
	letter-spacing: -0.28px;
	@media screen and (max-width: 768px) {
		line-height: 200%;
	}
`

const Name = styled.span`
	color: ${myTheme.colors.accent};
	font-size: 18px;
	font-weight: 700;
	line-height: 187.5%;
	letter-spacing: -0.64px;
`

const Profession = styled.span`
	font-size: 14px;
	font-weight: 600;
	line-height: 142.857%;
	letter-spacing: -0.56px;
`