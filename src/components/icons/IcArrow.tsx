import { MouseEventHandler, } from 'react';

type Props = {
	className?: string
	onClick?: MouseEventHandler<SVGSVGElement>;
} & typeof defaultProps;

const defaultProps = {
	className: '',
	onClick: () => {},
};

function IcArrow({
	className,
	onClick,
}: Props) {
	return (
		<svg className={className} onClick={onClick} width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_7409_4962)'>
				<path d='M17 7L7 17' stroke='#6E77E9' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
				<path d='M8 7H17V16' stroke='#6E77E9' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_7409_4962'>
					<rect width='24' height='24' fill='white'/>
				</clipPath>
			</defs>
		</svg>
	);
}

IcArrow.defaultProps = defaultProps;

export default IcArrow;

