import { MouseEventHandler, } from 'react';

type Props = {
	className?: string
	onClick?: MouseEventHandler<SVGSVGElement>;
} & typeof defaultProps;

const defaultProps = {
	className: '',
	onClick: () => {},
};

function IcCarot({
	className,
	onClick,
}: Props) {
	return (
		<svg className={className} onClick={onClick} width='44' height='65' viewBox='0 0 44 65' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g filter='url(#filter0_d_7429_11755)'>
				<path d='M12.001 52.3167L32.001 32.3167L12.001 12.3167L12.001 52.3167Z' fill='#9DA4FF'/>
				<path d='M12.001 52.3167L32.001 32.3167L12.001 12.3167L12.001 52.3167Z' stroke='#9DA4FF' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round'/>
			</g>
			<defs>
				<filter id='filter0_d_7429_11755' x='0.000976562' y='0.316589' width='44' height='64.0001' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
					<feFlood floodOpacity='0' result='BackgroundImageFix'/>
					<feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/>
					<feOffset/>
					<feGaussianBlur stdDeviation='5'/>
					<feComposite in2='hardAlpha' operator='out'/>
					<feColorMatrix type='matrix' values='0 0 0 0 0.615686 0 0 0 0 0.643137 0 0 0 0 1 0 0 0 0.6 0'/>
					<feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_7429_11755'/>
					<feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_7429_11755' result='shape'/>
				</filter>
			</defs>
		</svg>

	);
}

IcCarot.defaultProps = defaultProps;

export default IcCarot;
