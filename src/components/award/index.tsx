import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import clsx from 'clsx';

import {
	CarPng,
	CoinPng,
	FilePng,
	FlagPng,
} from '../../assets/images';
import { useIntersectionObserver, useMobileDetect } from '../../hooks';
import { ViewPortEnum, } from '../../enums';

function Award() {
	const containerRef = useRef(null);
	const title1Ref = useRef(null);
	const title2Ref = useRef(null);
	const cardGroupRef = useRef(null);
	const carRef = useRef(null);
	const flagRef = useRef(null);

	const isMobile = useMobileDetect(ViewPortEnum.XL);
	const { isIntoView, } = useIntersectionObserver(containerRef, { threshold: 0.4, });

	useLayoutEffect(() => {
		const tl = gsap.timeline({
			defaults: {
				duration: 1,
			}
		});

		if (isIntoView && !isMobile) {
			tl.from(title1Ref.current, {
				opacity: 0,
				y: 40,
			});

			tl.from(cardGroupRef.current, {
				opacity: 0,
				y: 80,
			}, '<');

			tl.from(title2Ref.current, { opacity: 0 });

			tl.to(carRef.current, {
				xPercent: -820,
			});

			tl.to(flagRef.current, {
				duration: 0.5,
				x: -10,
				y: -20,
				rotate: -50,
			});
		}

		return () => {
			tl.revert();
		};
	}, [isIntoView, isMobile]);

	return (
		<section
			ref={containerRef}
			className={clsx(
				'mt-[100px]',
				'flex flex-col items-center',
				{ 'opacity-0': !isIntoView && !isMobile }
			)}
		>
			<h1
				ref={title1Ref}
				className={clsx(
					'w-[320px]',
					'text-neutral-1 text-center text-[24px] font-bold',
					'text-shadow-white',
					'sm:w-[420px] sm:text-[32px]',
					'xl:w-[840px] xl:text-[40px]'
				)}
			>
				<span>區區修煉已經無法滿足了嗎？</span>
				<span ref={title2Ref}>還有比賽等著你！</span>
			</h1>
			<div className='w-auto'>
				<div className='mt-[60px]'>
					<div className='flex items-end justify-between'>
						<img
							ref={flagRef}
							className='h-10 w-10 sm:h-auto sm:w-auto'
							src={FlagPng}
							alt='flag'
						/>
						<img
							ref={carRef}
							className='h-5 w-[60px] sm:h-auto sm:w-auto'
							src={CarPng}
							alt='car'
						/>
					</div>
					<div className='bg-neutral-1 h-[3px]'></div>
				</div>
				<div
					ref={cardGroupRef}
					className={clsx(
						'mt-[73px]',
						'flex flex-col items-center gap-[60px]',
						'xl:flex-row'
					)}
				>
					<div
						className={clsx(
							'bg-neutral-3',
							'rounded-[32px] p-0.5',
							'duration-300',
							'hover:bg-gradient-4 hover:-translate-y-5'
						)}
					>
						<div
							className={clsx(
								'h-[492px] w-[343px]',
								'bg-neutral-3',
								'rounded-[32px]',
								'px-6 pt-6',
								'sm:h-[552px] sm:w-[485px]',
								'sm:px-10 sm:pt-10'
							)}
						>
							<div>
								<img
									className='mx-auto'
									src={FilePng}
									alt='file'
								/>
								<h3
									className={clsx(
										'text-primary-1 text-[32px] font-bold',
										'text-center',
										'text-shadow-primary',
										'sm:text-[40px]'
									)}
								>
									評審機制
								</h3>
							</div>
							<div className='text-neutral-1 mt-14'>
								<div>
									<div className='text-2xl font-bold'>初選：</div>
									<div className='mt-2 text-xl'>將由六角學院前端、UI 評審進行第一波篩選。</div>
								</div>
								<div className='mt-8'>
									<div className='text-2xl font-bold'>決選：</div>
									<div className='mt-2 text-xl'>由六角學院與贊助廠商討論，進行最後篩選， 並於 12/30(五) 由評審進行直播公布名單！</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className={clsx(
							'bg-neutral-3',
							'rounded-[32px] p-0.5',
							'duration-300',
							'hover:bg-gradient-4 hover:-translate-y-5'
						)}
					>
						<div
							className={clsx(
								'w-[343px]',
								'bg-neutral-3',
								'rounded-[32px] ',
								'px-6 pt-6 pb-8',
								'sm:h-[552px] sm:w-[485px]',
								'sm:px-10 sm:pt-10'
							)}
						>
							<div>
								<img
									className='mx-auto'
									src={CoinPng}
									alt='file'
								/>
								<h3
									className={clsx(
										'text-primary-1 text-[40px] font-bold',
										'text-center',
										'text-shadow-primary',
									)}
								>
									獎金
								</h3>
							</div>
							<div className='text-neutral-1 mt-14 space-y-6'>
								<div>
									<div className='space-x-0 text-xl sm:space-x-2'>
										<span className='block font-bold sm:inline'>初選佳作：</span>
										<span>共六十位</span>
										<span className='text-secondary pl-2 sm:pl-0'>數位獎狀</span>
									</div>
									<div className='text-neutral-2 mt-2'>每週主題個人組十位、團體組十組</div>
								</div>
								<div>
									<div className='space-x-0 text-xl sm:space-x-2'>
										<span className='block font-bold sm:inline'>個人企業獎：</span>
										<span>共六位</span>
										<span className='text-secondary pl-2 sm:pl-0'>NTD 3,000/位</span>
									</div>
									<div className='text-neutral-2 mt-2'>每週主題各兩名，設計一位、前端 一位</div>
								</div>
								<div>
									<div className='space-x-0 text-xl sm:space-x-2'>
										<span className='block font-bold sm:inline'>團體企業獎：</span>
										<span>共三組</span>
										<span className='text-secondary pl-2 sm:pl-0'>NTD 10,000/組</span>
									</div>
									<div className='text-neutral-2 mt-2'>每週主題各 1 組</div>
								</div>
								<div className='text-xl font-bold'>以上皆提供完賽數位獎狀</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Award;
