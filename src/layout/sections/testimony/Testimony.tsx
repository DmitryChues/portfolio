import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { SliderReview } from './slider/SliderReview';
import { SliderPhoto } from './slider/SliderPhoto';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { ButtonNavTestimony } from '../../../components/ButtonNavTestymony';

export const Testimony = () => {
	return (
		<StyledTestimony>
			<Container>

				<FlexWrapper gap='100px'>
					<SliderPhoto />
					<ReviewWrapper>
						<SectionTitle>Testimonial</SectionTitle>
						<IconWrapper>
							<Icon iconId={'quote'} viewBox='0 0 32 32' />
						</IconWrapper>
						<SliderReview />
						<ButtonNavTestimony />
					</ReviewWrapper>
				</FlexWrapper>

			</Container>
		</StyledTestimony>
	);
};

const ReviewWrapper = styled.div`
	min-width: 0;
	display: flex;
	flex-wrap: wrap;
	align-content: start;
	${SectionTitle} {
		margin: 0px 0px 20px 0px;
		flex: 0 1 100%;
	}
	/* max-width: 500px; */
	
	/* justify-content:center;align-items: center; */
`

const IconWrapper = styled.div`
	margin: 0px 0px 30px 0px;
	font-size: 0;
`

const StyledTestimony = styled.section`
	& ${FlexWrapper} {
		min-width: 0;
	}
	
`
