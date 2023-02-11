import { useState, } from 'react';
import clsx from 'clsx';

import { LogoPng, } from '../../assets/images';
import {
	IcClose,
	IcBurger,
} from '../Icons';
import Menu from './menu';

function Navbar() {
	const [isDropdownVisible, setIsDropdownVisible] = useState(false);

	function _renderOverlay() {
		if (isDropdownVisible) {
			return (
				<div className='bg-neutral-8 fixed inset-y-0 z-10 w-full md:hidden'></div>
			);
		}
	}

	return (
		<>
			<div className='fixed top-0 z-50 mx-auto w-full max-w-lg md:static'>
				<div className={clsx(
					'w-full px-[21px] py-[16px]',
					'bg-neutral-5',
					'flex items-center justify-between',
					'absolute left-0 z-20',
					'md:static md:px-[32px] md:py-[34px]',
				)}>
					<div className='flex items-center'>
						<IcBurger
							className='mr-[25px] cursor-pointer md:hidden'
							onClick={() => setIsDropdownVisible(!isDropdownVisible)}
						/>
						<img
							className='w-[110px] md:w-auto'
							src={LogoPng}
							alt='f2e-logo'
						/>
					</div>
					<div className='hidden md:flex md:items-center'>
						<Menu />
						<button className='btn-secondary ml-12 px-6 pt-[10px] pb-3 duration-300'>
							登入
						</button>
					</div>
					<button className='btn-secondary px-4 pt-2 pb-[10px] duration-300 md:hidden'>
						立即報名
					</button>
				</div>
				<div
					className={clsx(
						'bg-neutral-5',
						'mx-auto w-full px-[21px] py-[16px]',
						'flex flex-col items-center',
						'absolute left-0 top-[75px] z-0',
						'duration-300',
						'md:hidden',
						{ '-translate-y-full': !isDropdownVisible }
					)}
				>
					<div className='ml-auto mb-[22px]'>
						<IcClose
							className='cursor-pointer'
							onClick={() => setIsDropdownVisible(false)}
						/>
					</div>
					<Menu isDropdownType />
					<button className='btn-secondary mt-10 w-full pt-[10px] pb-3 duration-300'>
						登入
					</button>
				</div>
			</div>
			{_renderOverlay()}
		</>
	);
}

export default Navbar;
