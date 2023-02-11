type Props = {
	className?: string
} & typeof defaultProps;

const defaultProps = {
	className: '',
};

function IcStar({
	className,
}: Props) {
	return (
		<svg className={className} width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path d='M12.4461 1.106C12.7204 0.364713 13.7688 0.364713 14.0431 1.106L16.9032 8.83525C16.9894 9.06831 17.1732 9.25206 17.4063 9.3383L25.1355 12.1984C25.8768 12.4727 25.8768 13.5211 25.1355 13.7954L17.4063 16.6555C17.1732 16.7418 16.9894 16.9255 16.9032 17.1586L14.0431 24.8878C13.7688 25.6291 12.7204 25.6291 12.4461 24.8878L9.58598 17.1586C9.49974 16.9255 9.31599 16.7418 9.08293 16.6555L1.35368 13.7954C0.612394 13.5211 0.612394 12.4727 1.35368 12.1984L9.08293 9.3383C9.31599 9.25206 9.49974 9.06831 9.58598 8.83525L12.4461 1.106Z' fill='url(#paint0_linear_111_35575)'/>
			<defs>
				<linearGradient id='paint0_linear_111_35575' x1='13.2446' y1='-1.052' x2='13.2446' y2='27.0458' gradientUnits='userSpaceOnUse'>
					<stop stopColor='#9FA6FF'/>
					<stop offset='1' stopColor='#55FFAD'/>
				</linearGradient>
			</defs>
		</svg>
	);
}

IcStar.defaultProps = defaultProps;

export default IcStar;
