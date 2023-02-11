import { MouseEventHandler, } from 'react';

type Props = {
	className?: string
	onClick?: MouseEventHandler<SVGSVGElement>;
} & typeof defaultProps;

const defaultProps = {
	className: '',
	onClick: () => {},
};

function IcPacman({
	className,
	onClick,
}: Props) {
	return (
		<svg className={className} onClick={onClick} width='52' height='57' viewBox='0 0 52 57' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g filter='url(#filter0_d_224_35010)'>
				<path d='M38.2119 40.9261C38.9169 41.7764 38.8043 43.0478 37.8811 43.6542C35.4808 45.2306 32.7293 46.2153 29.8537 46.5131C26.3126 46.8797 22.7423 46.188 19.5942 44.5255C16.4462 42.863 13.8618 40.3043 12.168 37.1731C10.4741 34.0418 9.74684 30.4785 10.0781 26.9339C10.4093 23.3893 11.7843 20.0225 14.029 17.2593C16.2737 14.4961 19.2874 12.4606 22.6889 11.4101C26.0905 10.3597 29.7272 10.3416 33.1391 11.358C35.9097 12.1833 38.431 13.6608 40.4977 15.6547C41.2926 16.4216 41.1677 17.6919 40.3173 18.3968L29.5397 27.3323C28.6893 28.0373 28.5715 29.2981 29.2765 30.1484L38.2119 40.9261Z' fill='#9DA4FF'/>
			</g>
			<defs>
				<filter id='filter0_d_224_35010' x='0' y='0.608765' width='51.0293' height='56' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
					<feFlood floodOpacity='0' result='BackgroundImageFix'/>
					<feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/>
					<feOffset/>
					<feGaussianBlur stdDeviation='5'/>
					<feComposite in2='hardAlpha' operator='out'/>
					<feColorMatrix type='matrix' values='0 0 0 0 0.615686 0 0 0 0 0.643137 0 0 0 0 1 0 0 0 0.6 0'/>
					<feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_224_35010'/>
					<feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_224_35010' result='shape'/>
				</filter>
			</defs>
		</svg>
	);
}

IcPacman.defaultProps = defaultProps;

export default IcPacman;