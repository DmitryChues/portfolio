import React from 'react';
import img from '../../../../assets/images/review.jpg'
import photo from '../../../../assets/images/IMG_6434.webp'
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Controller } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export const SliderPhoto = () => {
	return (
		<SliderContainer>
			<Swiper
				modules={[Navigation, Pagination, Controller]}
				navigation={{
					nextEl: '.testimony-button-next',
					prevEl: '.testimony-button-prev',
				}}
				autoHeight={true}
			>
				<SwiperSlide>

					<Photo src={img}></Photo>

				</SwiperSlide>
				<SwiperSlide>

					<Photo src={photo}></Photo>

				</SwiperSlide>
				<SwiperSlide>

					<Photo src={img}></Photo>

				</SwiperSlide>
			</Swiper>
		</SliderContainer>
	);
};

const SliderContainer = styled.div`
	/* width: 400px; */
	min-width: 0;
	grid-row: 1/5;
	grid-column: 1/2;
	@media screen and (max-width: 992px) {
		margin: 0px 0px 40px 0px;
	}
	@media screen and (max-width: 768px) {
		margin: 0px 0px 20px 0px;
		grid-row: 2/3;
	}
`

const Photo = styled.img`
	max-width: 400px;
	width: 100%;
	height: 420px;
	object-fit: cover;
	object-position: center;
	@media screen and (max-width: 992px) {
		height: 300px;
		max-width: 250px;
	}
`
