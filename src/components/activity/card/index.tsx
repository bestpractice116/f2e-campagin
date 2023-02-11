import clsx from 'clsx';

type Props = {
	className?: string
	children: React.ReactNode
} & typeof defaultProps

const defaultProps = {
	className: ''
};

function Card({
	className,
	children,
}: Props) {
	return (
		<div
			className={clsx(
				className,
				'rounded-[32px] border-[3px]',
				'flex items-center justify-center',
				'group',
				'hover:border-primary-1 hover:bg-primary-3 hover:bg-opacity-10',
				'hover:shadow-xs hover:shadow-primary-3',
				'transition-all duration-300',
				'sm:h-[300px] sm:w-[520px]',
				'sm:flex-row'
			)}
		>
			{children}
		</div>
	);
}

Card.defaultProps = defaultProps;

export default Card;
