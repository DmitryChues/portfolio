import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Controller } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { S } from './Slider_Styles';

type reviewDataPropsType = {
	photoPath: string,
	text: string,
	name: string,
	profession: string
}

export const SliderPhoto: React.FC<{ photoData: Array<reviewDataPropsType> }> = (props: { photoData: Array<reviewDataPropsType> }) => {
	return (
		<S.SliderContainerPhoto>
			<Swiper
				speed={500}
				modules={[Navigation, Pagination, Controller]}
				navigation={{
					nextEl: '.testimony-button-next',
					prevEl: '.testimony-button-prev',
				}}
				autoHeight={true}
				allowTouchMove={false}
			>
				{props.photoData.map((item, index) => {
					return (
						<SwiperSlide key={index}>
							<S.Photo src={item.photoPath}></S.Photo>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</S.SliderContainerPhoto>
	);
};