import { MouseEventHandler, } from 'react';

type Props = {
	className?: string
	onClick?: MouseEventHandler<SVGSVGElement>
} & typeof defaultProps;

const defaultProps = {
	className: '',
	onClick: () => {},
};

function IcClose({
	className,
	onClick,
}: Props) {
	return (
		<svg className={className} onClick={onClick} width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_6937_13256)'>
				<path d='M18 6L6 18' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
				<path d='M6 6L18 18' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
			</g>
			<defs>
				<clipPath id='clip0_6937_13256'>
					<rect width='24' height='24' fill='white'/>
				</clipPath>
			</defs>
		</svg>
	);
}

IcClose.defaultProps = defaultProps;

export default IcClose;
