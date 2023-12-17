import React from 'react';
import img from '../../../../assets/images/review.jpg'
import photo from '../../../../assets/images/IMG_6434.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';

export const SliderPhoto = () => {
	return (
		<SliderContainer>
			<Swiper
				modules={[Navigation, Pagination]}
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
	width: 400px;
`

const Photo = styled.img`
	width: 100%;
`