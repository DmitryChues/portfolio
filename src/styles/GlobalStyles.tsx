import { createGlobalStyle } from "styled-components";
import { myTheme } from "./Theme.Styled";

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		border: 0;
	}
	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}
	html,
	body {
		height: 100%;
		/* min-width: $minWidth + px; */
	}
	body {
		color: ${myTheme.colors.font.medium};
		line-height: 1;
		font-size: 16px;
		font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
		-ms-text-size-adjust: 100%;
		-moz-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	input,
	button,
	textarea {
	font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	font-size: inherit;
	}
	button {
	cursor: pointer;
		color: inherit;
		background-color: inherit;
	}
	a {
		color: inherit;
		display: inline-block;
	}
	a:link,
	a:visited,
	a:hover {
		text-decoration: none;
	}
	ul li {
		list-style: none;
	}
	img {
		vertical-align: top;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: inherit;
		font-size: inherit;
	}
	section {
		padding: 100px 0;
		@media ${myTheme.breakpoints.tablet} {
			padding: 70px 0;
		}
		@media ${myTheme.breakpoints.mobile} {
			padding: 50px 0;
		}
	}
	
`