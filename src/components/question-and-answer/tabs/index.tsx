import { ReactElement, useState } from 'react';
import clsx from 'clsx';

import Tab, { Props as TabProps } from '../tab';

type Props = {
	children: ReactElement<TabProps>[];
	initialTabIndex?: number;
} & typeof defaultProps;

const defaultProps = {
	initialTabIndex: 0,
};

function Tabs({
	children,
	initialTabIndex,
}: Props) {
	const [selectedTabIndex, setSelectedTabIndex] = useState(initialTabIndex);

	function _renderTabs() {
		return children.map((item, index) => (
			<Tab
				key={index}
				title={item.props.title}
				index={index}
				isActive={selectedTabIndex === index}
				setSelectedTab={setSelectedTabIndex}
			/>
		));
	}

	return (
		<div className='mx-4 mt-[60px] xl:mx-0'>
			<ul
				className={clsx(
					'w-[min(92vw,612px)]',
					'flex items-center gap-6',
					'whitespace-nowrap',
					'overflow-x-auto',
					'invisible-scrollbar',
					'sm:w-auto sm:justify-center',
				)}
			>
				{_renderTabs()}
			</ul>
			{children[selectedTabIndex]}
		</div>
	);
}

Tabs.defaultProps = defaultProps;

export default Tabs;
