import { useLayoutEffect, useRef } from 'react';
import clsx from 'clsx';
import gsap from 'gsap';

import {
	ClockPng,
	FolderPng,
	PausePng,
	PencilPng,
} from '../../assets/images';
import { ViewPortEnum, } from '../../enums';
import { useIntersectionObserver, useMobileDetect } from '../../hooks';
import { IcCarot, IcPacman, } from '../Icons';
import Card from './card';

function Activity() {
	const containerRef = useRef(null);
	const titleRef = useRef(null);
	const cardGroupRef = useRef(null);

	const isMobile = useMobileDetect(ViewPortEnum.Large);
	const { isIntoView, } = useIntersectionObserver(containerRef, { threshold: 0.5 });

	useLayoutEffect(() => {
		const tl = gsap.timeline({
			defaults: {
				duration: 1.5,
			},
		});

		if (isIntoView && !isMobile) {
			tl.from(titleRef.current, {
				opacity: 0,
				y: 40,
			});

			tl.from(cardGroupRef.current, {
				opacity: 0,
				y: 100,
			}, '<');
		}

		return () => {
			tl.revert();
		};
	}, [isIntoView, isMobile]);

	function _renderCardTitle(text: string) {
		return (
			<h3
				className={clsx(
					'mt-[22px]',
					'text-center text-2xl font-bold leading-8',
					'group-hover:text-primary-1 group-hover:text-shadow-[0px_0px_10px_rgba(157,164,255,0.6)]',
					'sm:mt-0',
					'sm:text-left sm:text-[32px] sm:leading-[48px]'
				)}
			>
				{text}
			</h3>
		);
	}

	return (
		<section
			ref={containerRef}
			className={clsx(
				'bg-neutral-4',
				'mt-[80px] py-[80px]',
				'flex flex-col items-center justify-center',
			)}
		>
			<h1
				ref={titleRef}
				className={clsx(
					'flex items-center gap-4',
					'sm:gap-9',
					{ 'opacity-0': !isIntoView && !isMobile }
				)}
			>
				<div className='flex items-center'>
					<IcPacman />
					<div className='flex items-center gap-3'>
						<div className='bg-neutral-1 h-[6px] w-[6px] rounded-full'></div>
						<div className='bg-neutral-1 h-[6px] w-[6px] rounded-full'></div>
						<div className='bg-neutral-1 h-[6px] w-[6px] rounded-full'></div>
					</div>
				</div>
				<div className='text-neutral-1 text-shadow-white text-[32px] font-bold sm:text-[40px]'>
					活動說明
				</div>
				<div className='flex items-center gap-3'>
					<div className='bg-neutral-1 h-[6px] w-[6px] rounded-full'></div>
					<div className='bg-neutral-1 h-[6px] w-[6px] rounded-full'></div>
					<div className='bg-neutral-1 h-[6px] w-[6px] rounded-full'></div>
					<div className='bg-primary-1 shadow-xs shadow-primary-1 h-3 w-3 rounded-full'></div>
				</div>
			</h1>
			<div
				ref={cardGroupRef}
				className={clsx(
					'mt-[100px]',
					'flex flex-col items-center justify-center',
					'2xl:flex-row 2xl:flex-wrap',
					{ 'opacity-0': !isIntoView && !isMobile }
				)}
			>
				<Card
					className={clsx(
						'px-[75px] pt-[30px] pb-8',
						'flex-col',
						'sm:py-[54px] sm:pr-[92px] sm:pl-[56px]',
					)}
				>
					<img
						className={clsx(
							'h-[90px] w-[74]',
							'sm:mr-[76px] sm:h-auto sm:w-auto'
						)}
						src={PencilPng}
						alt='pencil'
					/>
					<div className='text-neutral-1 space-y-4 text-xl'>
						{_renderCardTitle('開放報名')}
						<div>
							<span className='text-secondary'>10/13</span> (四) 早上 11:00
						</div>
						<div
							className={clsx(
								'h-3 w-0.5',
								'bg-neutral-1',
								'my-2 mx-auto rounded-[10px]',
								'sm:ml-[62%]'
							)}
						></div>
						<div>
							<span className='text-secondary'>10/30</span>  (日) 晚上 23:59
						</div>
						<div>截止前可修改報名組別</div>
					</div>
				</Card>
				<IcCarot
					className={clsx(
						'my-[62px]',
						'rotate-90',
						'2xl:mx-[62px] 2xl:my-0 2xl:rotate-0'
					)}
				/>
				<Card
					className={clsx(
						'px-[29px] pt-[29px] pb-8',
						'flex-col-reverse',
						'sm:py-[36px] sm:pr-[64px] sm:pl-[48px]',
					)}
				>
					<div className='text-neutral-1 space-y-4 text-center text-xl sm:text-left'>
						{_renderCardTitle('各組別開賽')}
						<div>
							<span className='text-secondary'>10/31</span> UI組、團體組開賽
						</div>
						<div>
							<span className='text-secondary'>11/07</span> 前端組開賽
						</div>
						<div className='hidden sm:block'>前端工程師可採用<br />UI 設計師的設計稿產出完<br />整作品</div>
						<div className='block sm:hidden'>前端工程師可採用<br />UI 設計師的設計稿產出完整作品</div>
					</div>
					<img
						className='h-[90px] w-[74px] sm:ml-[76px] sm:h-auto sm:w-auto'
						src={ClockPng}
						alt='clock'
					/>
				</Card>
				<IcCarot
					className={clsx(
						'my-[62px]',
						'rotate-90',
						'order-1',
						'2xl:order-none 2xl:ml-[700px] 2xl:w-full'
					)}
				/>
				<Card
					className={clsx(
						'px-[77px] pt-6 pb-8',
						'flex-col-reverse',
						'order-2',
						'sm:py-[104px] sm:pr-[58px] sm:pl-[48px]',
						'2xl:order-none',
					)}
				>
					<div className='text-neutral-1 space-y-4 text-xl'>
						{_renderCardTitle('線上直播')}
						<div>
							<span className='text-secondary'>11/03 - 11/24</span> 每週四
						</div>
					</div>
					<img
						className='sm:ml-[76px]'
						src={PausePng}
						alt='pause'
					/>
				</Card>
				<IcCarot
					className={clsx(
						'my-[62px]',
						'rotate-90',
						'2xl:mx-[62px] 2xl:rotate-180'
					)}
				/>
				<Card
					className={clsx(
						'px-[75px] pb-[32px] pt-[22px]',
						'flex-col',
						'sm:py-[54px] sm:pr-[92px] sm:pl-[48px]',
					)}
				>
					<img
						className='h-[103px] w-[86px] sm:mr-[76px] sm:h-auto sm:w-auto'
						src={FolderPng}
						alt='folder'
					/>
					<div className='text-neutral-1 space-y-4 text-center text-xl sm:text-left'>
						{_renderCardTitle('登錄作品')}
						<div>
							<span className='text-secondary'>10/31</span> (一) 中午 12:00
						</div>
						<div className='bg-neutral-1 mx-auto my-2 h-3 w-0.5 rounded-[10px] sm:ml-[62%]'></div>
						<div>
							<span className='text-secondary'>11/28</span>  (一) 中午 12:00
						</div>
						<div>依賽程登錄作品</div>
					</div>
				</Card>
			</div>
		</section>
	);
}

export default Activity;
