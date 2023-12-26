import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { SliderReview } from './slider/SliderReview';
import { SliderPhoto } from './slider/SliderPhoto';
import { Container } from '../../../components/Container';
import { ButtonNavTestimony } from '../../../components/ButtonNavTestymony';


export const Testimony = () => {
	return (
		<StyledTestimony id='testimony'>
			<Container>

				<GridWrapper>
					<SliderPhoto />
					<SectionTitle>Testimonial</SectionTitle>
					<IconWrapper>
						<Icon iconId={'quote'} viewBox='0 0 32 32' />
					</IconWrapper>
					<SliderReview />
					<ButtonNavTestimony />
				</GridWrapper>

			</Container>
		</StyledTestimony>
	);
};

const GridWrapper = styled.div`
	& ${SectionTitle} {
		margin: 0px 0px 40px 0px;
		@media screen and (max-width: 992px) {
			margin: 0px 0px 20px 0px;
		}
		@media screen and (max-width: 768px) {
			margin: 0px 0px 30px 0px;
		}
	}

	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-template-rows: auto auto 1fr auto;
	column-gap: 100px;
	min-width: 0;
	@media screen and (max-width: 992px) {
		column-gap: 50px;
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(5, auto);
	}
`

const IconWrapper = styled.div`
	margin: 0px 0px 30px 0px;
	font-size: 0;
	@media screen and (max-width: 992px) {
			margin: 0px 0px 15px 0px;
		}
`

const StyledTestimony = styled.section`
`
