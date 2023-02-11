import { MouseEventHandler } from 'react';

type Props = {
	className?: string
	onClick?: MouseEventHandler<SVGSVGElement>
} & typeof defaultProps;

const defaultProps = {
	className: '',
	onClick: () => {},
};

function IcRoundLg({
	className,
	onClick,
}: Props) {
	return (
		<svg className={className} onClick={onClick} width="346" height="126" viewBox="0 0 346 126" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1.91997 92.2034C1.91998 77.3354 12.191 64.4387 26.682 61.1115L280.816 2.76048C311.865 -4.36874 342.005 17.7312 344.543 49.4875C346.854 78.4232 325.12 103.689 296.163 105.726L36.0599 124.026C17.6055 125.324 1.91996 110.703 1.91997 92.2034Z" fill="#151F3F" stroke="url(#paint0_linear_224_34966)" strokeWidth="2"/>
			<defs>
				<linearGradient id="paint0_linear_224_34966" x1="4.72335" y1="22.3568" x2="320.964" y2="166.331" gradientUnits="userSpaceOnUse">
					<stop stopColor="#313A65"/>
					<stop offset="1" stopColor="#313A65" stopOpacity="0"/>
				</linearGradient>
			</defs>
		</svg>
	);
}

IcRoundLg.defaultProps = defaultProps;

export default IcRoundLg;
