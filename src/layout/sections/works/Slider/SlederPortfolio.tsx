import React from 'react';
import styled from 'styled-components';
import { myTheme } from '../../../../styles/Theme.Styled';
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
			slidesPerView={3}
			spaceBetween={24}
			loop={true}
		>
			{props.slideItems.map((item, index) => {
				return (
					<SwiperSlide>
						<Slide title={item.title} src={item.src} description={item.description} />
					</SwiperSlide>
				)
			})}

			<Pag />

		</Swiper>
	);
};



const StyledWorkHover = styled.a`
	display: none;
	pointer-events: auto;
	background-color: rgba(0, 0, 0, 0.59);
	color: ${myTheme.colors.font.light};

	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
`

const StyledSlide = styled.div`
	background-color: #ffffff;
	max-width: 100%;
	
	position: relative;
	

	&:hover {
		& ${StyledWorkHover} {
			display: flex;
			flex-direction: column;
			justify-content:center;
			align-items: center;
		}
	}
`

const StyledImage = styled.img`
	width: 100%;
	height: 260px;
	object-fit: cover;
`



const StyledTitle = styled.h3`
	font-family: Anton;
	font-size: 32px;
	text-transform: uppercase;
	
`

const StyledDescription = styled.span`
font-size: 18px;
font-weight: 700;
line-height: 187.5%;
letter-spacing: -0.64px;
`