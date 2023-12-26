
type FontPropsType = {
	family?: string
	weight?: number
	color?: string
	lineHeight?: number
	Fmax?: number
	Fmin?: number
}

export const font = ({ family, weight, color, lineHeight, Fmin, Fmax }: FontPropsType) => `
	font-family: ${family || "Montserrat"};
	font-weight: ${weight || 400};
	color: ${color};
	line-height: ${lineHeight || 1.2};
	font-size: calc((100vw - 320px)/(1440 - 320) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`