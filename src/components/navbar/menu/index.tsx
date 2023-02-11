import clsx from 'clsx';

type Props = {
	isDropdownType?: boolean
} & typeof defaultProps

const defaultProps = {
	isDropdownType: false,
};

function Menu({
	isDropdownType,
}: Props) {
	function _renderMenuItem(text: string) {
		return (
			<li
				className={clsx(
					'text-neutral-2',
					'relative',
					'group',
					'duration-300',
					'hover:text-neutral-1 hover:text-shadow-white'
				)}
			>
				<a href='#'>{text}</a>
				<div
					className={clsx(
						'bg-secondary',
						'rounded-[80px]',
						'shadow-xs shadow-secondary',
						'hidden',
						'absolute',
						'group-hover:block',
						{ 'w-1 h-[9px] top-2 -left-2.5': isDropdownType },
						{ 'w-3 h-1 -bottom-2.5 left-[40%]': !isDropdownType },
					)}
				></div>
			</li>
		);
	}

	return (
		<nav>
			<ul className={clsx(isDropdownType ? 'space-y-8' : 'flex items-center gap-8')}>
				{_renderMenuItem('關卡資訊')}
				{_renderMenuItem('攻略資源')}
				{_renderMenuItem('求職專區')}
			</ul>
		</nav>
	);
}

Menu.defaultProps = defaultProps;

export default Menu;
