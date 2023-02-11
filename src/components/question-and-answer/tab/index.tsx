import clsx from 'clsx';
import { useCallback } from 'react';

export type Props = {
	title: string;
	index: number;
	setSelectedTab: (index: number) => void;
	isActive?: boolean;
} & typeof defaultProps;

const defaultProps = {
	isActive: false,
};

function Tab({
	title,
	index,
	setSelectedTab,
	isActive,
}: Props) {
	const _handleOnClick = useCallback(() => {
		setSelectedTab(index);
	}, [setSelectedTab, index]);

	return (
		<li>
			<button
				className={clsx(
					'mb-2',
					'text-xl',
					{ 'text-neutral-2 cursor-pointer': !isActive },
					{ 'text-neutral-1 text-shadow-white cursor-default': isActive }
				)}
				onClick={_handleOnClick}
			>
				{title}
			</button>
			<div
				className={clsx(
					'h-1 w-3',
					'bg-secondary',
					'mx-auto rounded-[80px]',
					'shadow-xs shadow-secondary',
					{ 'hidden': !isActive },
				)}
			></div>
		</li>
	);
}

Tab.defaultProps = defaultProps;

export default Tab;