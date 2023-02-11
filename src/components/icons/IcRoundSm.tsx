import { MouseEventHandler } from 'react';

type Props = {
	className?: string
	onClick?: MouseEventHandler<SVGSVGElement>
} & typeof defaultProps;

const defaultProps = {
	className: '',
	onClick: () => {},
};

function IcRoundSm({
	className,
	onClick,
}: Props) {
	return (
		<svg className={className} onClick={onClick} width="279" height="114" viewBox="0 0 279 114" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M29.2043 43.3036L219.647 2.60645C247.887 -3.42836 274.989 16.7616 277.289 45.5475C279.391 71.8648 259.761 94.9038 233.444 97.0064L39.32 112.516C19.9689 114.062 3.04719 99.5842 1.58024 80.2269C0.255169 62.7417 12.0562 46.9681 29.2043 43.3036Z" fill="#151F3F" stroke="url(#paint0_linear_224_34967)" strokeWidth="2"/>
			<defs>
				<linearGradient id="paint0_linear_224_34967" x1="5.23997" y1="18.2714" x2="270.703" y2="123.147" gradientUnits="userSpaceOnUse">
					<stop stopColor="#313A65"/>
					<stop offset="1" stopColor="#313A65" stopOpacity="0"/>
				</linearGradient>
			</defs>
		</svg>
	);
}

IcRoundSm.defaultProps = defaultProps;

export default IcRoundSm;
