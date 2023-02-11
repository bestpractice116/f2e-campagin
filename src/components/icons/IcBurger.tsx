import { MouseEventHandler, } from 'react';

type Props = {
	className?: string
	onClick?: MouseEventHandler<SVGSVGElement>;
} & typeof defaultProps;

const defaultProps = {
	className: '',
	onClick: () => {},
};

function BurgerIcon({
	className,
	onClick,
}: Props) {
	return (
		<svg className={className} width='30' onClick={onClick} height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_6937_12101)'>
				<path d='M5 7.5H25' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
				<path d='M5 15H25' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
				<path d='M5 22.5H25' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
			</g>
			<defs>
				<clipPath id='clip0_6937_12101'>
					<rect width='30' height='30' fill='white'/>
				</clipPath>
			</defs>
		</svg>
	);
}

BurgerIcon.defaultProps = defaultProps;

export default BurgerIcon;