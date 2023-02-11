import { MouseEventHandler } from 'react';

type Props = {
	className?: string
	onClick?: MouseEventHandler<SVGSVGElement>
} & typeof defaultProps;

const defaultProps = {
	className: '',
	onClick: () => {},
};

function IcStarYellow({
	className,
	onClick,
}: Props) {
	return (
		<svg className={className} onClick={onClick} width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g filter='url(#filter0_d_202_13701)'>
				<path d='M25 10.3164L28.9163 20.9001L39.5 24.8164L28.9163 28.7327L25 39.3164L21.0837 28.7327L10.5 24.8164L21.0837 20.9001L25 10.3164Z' fill='#FFF385'/>
			</g>
			<defs>
				<filter id='filter0_d_202_13701' x='0.5' y='0.316406' width='49' height='49' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
					<feFlood floodOpacity='0' result='BackgroundImageFix'/>
					<feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/>
					<feOffset/>
					<feGaussianBlur stdDeviation='5'/>
					<feComposite in2='hardAlpha' operator='out'/>
					<feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 0.952941 0 0 0 0 0.521569 0 0 0 0.6 0'/>
					<feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_202_13701'/>
					<feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_202_13701' result='shape'/>
				</filter>
			</defs>
		</svg>
	);
}

IcStarYellow.defaultProps = defaultProps;

export default IcStarYellow;
