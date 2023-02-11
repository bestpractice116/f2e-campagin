import { MouseEventHandler } from 'react';

type Props = {
	className?: string
	onClick?: MouseEventHandler<SVGSVGElement>
} & typeof defaultProps;

const defaultProps = {
	className: '',
	onClick: () => {},
};

function IcTriangle({
	className,
	onClick,
}: Props) {
	return (
		<svg className={className} onClick={onClick} width="117" height="79" viewBox="0 0 117 79" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M71.7284 2.28828C76.0272 0.448552 81.0188 2.20724 83.2149 6.33536L114.085 64.3624C117.875 71.4851 111.101 79.6114 103.412 77.1661L7.91923 46.795C-0.0277877 44.2675 -0.560686 33.2253 7.10601 29.9442L71.7284 2.28828Z" stroke="white" strokeWidth="2"/>
		</svg>
	);
}

IcTriangle.defaultProps = defaultProps;

export default IcTriangle;
