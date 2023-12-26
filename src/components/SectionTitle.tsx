import styled from "styled-components";
import { myTheme } from "../styles/Theme.Styled";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
	${font({ family: "'Anton', sans-serif", color: `${myTheme.colors.font.dark}`, Fmin: 32, Fmax: 40 })}
	letter-spacing: 0.8px;
	text-transform: uppercase;
`