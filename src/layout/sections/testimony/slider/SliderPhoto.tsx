import React from 'react';
import img from '../../../../assets/images/review.jpg'
import photo from '../../../../assets/images/IMG_6434.webp'
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Controller } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { myTheme } from '../../../../styles/Theme.Styled';

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
				allowTouchMove={false}
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
	min-width: 0;
	grid-row: 1/5;
	grid-column: 1/2;
	@media ${myTheme.breakpoints.mobile} {
		margin: 0px 0px 20px 0px;
		grid-row: 2/3;
	}
`

const Photo = styled.img`
	width: 100%;
	object-fit: cover;
	object-position: center;
	aspect-ratio: 3 / 4;
	@media ${myTheme.breakpoints.mobile} {
		max-width: 290px;
	}
`
