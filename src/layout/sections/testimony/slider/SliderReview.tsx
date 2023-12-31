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

export const SliderReview: React.FC<{ textData: Array<reviewDataPropsType> }> = (props: { textData: Array<reviewDataPropsType> }) => {
	return (
		<S.SliderContainerRewiew>
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
				allowTouchMove={false}
			>
				{props.textData.map((item, index) => {
					return (
						<SwiperSlide key={index}>
							<S.Review>
								<S.Text>{item.text}</S.Text>
								<S.Name>{item.name}</S.Name>
								<S.Profession>{item.profession}</S.Profession>
							</S.Review>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</S.SliderContainerRewiew>
	);
};

