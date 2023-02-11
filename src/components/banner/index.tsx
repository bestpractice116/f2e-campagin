import { RefObject, useLayoutEffect, useRef } from 'react';
import { gsap, } from 'gsap';
import clsx from 'clsx';

import {
	HandPng,
	BannerTitlePng,
	F2EMarkPng,
	UIMarkPng,
} from '../../assets/images';
import { useIntersectionObserver, useMobileDetect } from '../../hooks';
import { MarqueeTextEnum, } from '../../enums';

function Banner() {
	const containerRef = useRef(null);
	const f2eMarkRef = useRef(null);
	const uiMarkRef = useRef(null);
	const titleRef = useRef(null);
	const subTextRef = useRef(null);
	const leftHandRef = useRef(null);
	const rightHandRef = useRef(null);
	const maqureeTopRef = useRef(null);
	const maqureeBottomRef = useRef(null);

	const isMobile = useMobileDetect();
	const { isIntoView, } = useIntersectionObserver(containerRef, {
		threshold: isMobile ? 0.6 : 0.8
	});

	useLayoutEffect(() => {
		const tl = gsap.timeline({
			defaults: {
				duration: 2,
				ease: 'power1.easeOut',
			}
		});

		if (isIntoView) {
			tl.to(maqureeTopRef.current, { x: -700, });

			tl.to(maqureeBottomRef.current, { x: 0, }, '<');

			tl.from(f2eMarkRef.current, {
				rotate: 80,
				x: 80,
				y: -180,
			}, '<');

			tl.from(uiMarkRef.current, {
				rotate: -80,
				x: -80,
				y: 180,
			}, '<');

			tl.from(titleRef.current, { opacity: 0, scale: 0, }, '<');

			tl.from(subTextRef.current, { opacity: 0, scale: 0, }, '<');

			tl.from(leftHandRef.current, {
				opacity: 0,
				...(isMobile ? { yPercent: 100 } : { xPercent: 150 }),
			}, '<');

			tl.from(rightHandRef.current, {
				opacity: 0,
				...(isMobile ? { yPercent: -100 } : { xPercent: -150 }),
			}, '<');
		}

		return () => {
			tl.revert();
		};
	}, [isIntoView, isMobile]);

	function _renderMaquree(ref: RefObject<HTMLDivElement>, isBottom = false) {
		return (
			<div
				className={clsx(
					'bg-gradient-1',
					'px-4 pt-[14px] pb-[10px]',
					'flex items-center gap-10',
					'whitespace-nowrap'
				)}
			>
				<div
					ref={ref}
					className={clsx(
						'flex items-center gap-10',
						{ '-translate-x-[730px]': isBottom }
					)}
				>
					{[...Array(MarqueeTextEnum.Five)].map(() => (
						<>
							<div className='font-monument text-neutral-1 text-[clamp(20px,4vw,40px)]'>
								Interactive web design
							</div>
							<div className='bg-neutral-1 h-4 w-4 flex-none rounded-full'></div>
						</>
					))}
				</div>
			</div>
		);
	}

	function _renderSubText() {
		return (
			<div
				ref={subTextRef}
				className={clsx(
					'mt-6',
					'items-center justify-center gap-12',
					isMobile ? 'hidden' : 'flex'
				)}
			>
				<span
					className={clsx(
						'font-bold leading-9',
						'md:text-[min(2.2vw,32px)]'
					)}
				>
					前端工程師
				</span>
				<div className='h-[22px] w-[22px]'>
					<div className='bg-neutral-6 h-6 w-1.5 rotate-45 rounded-md'></div>
					<div className='bg-neutral-6 h-6 w-1.5 -translate-y-6 -rotate-45 rounded-md'></div>
				</div>
				<span
					className={clsx(
						'font-bold leading-9',
						'md:text-[min(2.2vw,32px)]'
					)}
				>
					UI設計師
				</span>
			</div>
		);
	}

	return (
		<section
			ref={containerRef}
			className='mt-[124px]'
		>
			{_renderMaquree(maqureeTopRef)}
			<div
				className={clsx(
					'pt-[12px] pb-[64px]',
					'bg-banner bg-cover',
					'overflow-hidden',
					'relative',
					'md:pt-[94px] md:pb-[73px]',
				)}
			>
				<div className={clsx({ 'opacity-0': !isIntoView })}>
					<img
						ref={f2eMarkRef}
						className={clsx(
							'absolute top-4 left-[66%]',
							'md:w-[min(15vw,145px)]'
						)}
						src={F2EMarkPng}
						alt='f2e-mark'
					/>
					<div
						className={clsx(
							'flex flex-col items-center justify-center',
							'md:flex-row'
						)}
					>
						<img
							ref={leftHandRef}
							className={clsx(
								'w-auto',
								'-rotate-[40deg] -scale-x-90',
								'md:h-[min(20vw,336px)] md:w-[min(20vw,280px)]',
								'md:-rotate-0 md:scale-100'
							)}
							src={HandPng}
							alt='hand'
						/>
						<img
							ref={titleRef}
							className={clsx(
								'w-[calc(326px+12vw)]',
								'md:w-[min(35vw,530px)]'
							)}
							src={BannerTitlePng}
							alt='banner title'
						/>
						<img
							ref={rightHandRef}
							className={clsx(
								'w-auto',
								'-rotate-[135deg]',
								'md:h-[min(20vw,336px)] md:w-[min(20vw,280px)]',
								'md:-rotate-0 md:-scale-x-100',
							)}
							src={HandPng}
							alt='hand'
						/>
					</div>
					{_renderSubText()}
					<img
						ref={uiMarkRef}
						className={clsx(
							'w-[min(40vw,300px)]',
							'absolute left-4 -bottom-10',
							'md:w-[min(25vw,348px)]',
							'md:left-[min(10vw,160px)] md:-bottom-[min(4vw,64px)]'
						)}
						src={UIMarkPng}
						alt='ui-mark'
					/>
				</div>
			</div>
			{_renderMaquree(maqureeBottomRef, true)}
		</section>
	);
}

export default Banner;
