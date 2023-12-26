import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Pag } from '../../../../components/Pagination';
import { Slide } from './Slide';
import 'swiper/css';
import 'swiper/css/pagination';



type slideItemsType = {
	title: string;
	src: string;
	description: string;
}

export const SliderPortfolio = (props: { slideItems: Array<slideItemsType> }) => {
	return (
		<Swiper
			modules={[Navigation, Pagination]}
			navigation={{
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}}
			pagination={{
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			}}
			// slidesPerView={3}
			spaceBetween={24}
			loop={true}
			breakpoints={{
				// 575.98: {
				// 	slidesPerView: 1,
				// },
				575.98: {
					slidesPerView: 2,
				},
				991.98: {
					slidesPerView: 3,
				},
			}}
		>
			{props.slideItems.map((item, index) => {
				return (
					<SwiperSlide key={index}>
						<Slide title={item.title} src={item.src} description={item.description} />
					</SwiperSlide>
				)
			})}

			<Pag />

		</Swiper>
	);
};



