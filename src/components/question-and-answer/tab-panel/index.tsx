import clsx from 'clsx';
import { ReactElement } from 'react';

type Props = {
	title: string;
	children: ReactElement | ReactElement[];
}

function TabPanel({ children }: Props) {
	return (
		<div
			className={clsx(
				'h-auto max-w-[881px]',
				'bg-neutral-1',
				'mt-11 rounded-[32px] px-6 py-8',
				'space-y-[35px]',
				'sm:max-h-[1244px]',
				'md:h-[868px]',
				'xl:h-[1244px]',
				'xl:p-20',
				'xl:space-y-[60px]'
			)}
		>
			{children}
		</div>
	);
}

export default TabPanel;
