import { useRef, useLayoutEffect, } from 'react';
import clsx from 'clsx';
import { gsap, } from 'gsap';

import {
	DashboardPng,
	DashedArrow1Png,
	DashedArrow2Png,
	CodePng,
} from '../../assets/images';
import { useMobileDetect, } from '../../hooks';
import { MarqueeTextEnum, } from '../../enums';
import { IcStar } from '../Icons';

function Hero() {
	const dashboardRef = useRef(null);
	const codeRef = useRef(null);
	const titleRef = useRef(null);
	const marquee = useRef(null);

	const isMobile = useMobileDetect();

	useLayoutEffect(() => {
		const tl = gsap.timeline({
			delay: 0.5,
			defaults: {
				duration: 2,
			}
		});

		tl.fromTo(
			codeRef.current,
			{
				y: isMobile ? 80 : -50,
				opacity: 0
			},
			{ y: 0, opacity: 1 },
		);

		tl.fromTo(
			dashboardRef.current,
			{
				y: isMobile ? -50 : 50,
				opacity: 0
			},
			{ y: 0, opacity: 1 },
			'<'
		);

		tl.fromTo(
			titleRef.current,
			{
				y: isMobile ? 120 : 50,
				opacity: 0
			},
			{ y: 0, opacity: 1 },
			'<'
		);

		tl.to(marquee.current, {
			xPercent: -200,
			ease: 'none',
			duration: 10,
			repeat: -1,
		});

		tl.to(codeRef.current, {
			y: isMobile ? 20 : -50,
			duration: 2,
			yoyo: true,
			repeat: -1,
			ease: 'power1.inOut'
		}, '<');

		tl.to(dashboardRef.current, {
			y: isMobile ? -20 : 50,
			duration: 2,
			yoyo: true,
			repeat: -1,
			ease: 'power1.inOut'
		}, '<');

		return () => {
			tl.revert();
		};
	}, [isMobile]);

	function _renderMaquree() {
		return [...Array(MarqueeTextEnum.Ten)].map((_, index) => (
			<div
				key={index}
				className='flex items-center'
			>
				<div
					className={clsx(
						'maquree-text',
						'font-monument text-neutral-5  text-[28px]',
						'whitespace-nowrap leading-[58px] tracking-[0.08em]',
						'md:text-[clamp(20px,4vw,48px)]'
					)}
				>
					JOIN US
				</div>
				<IcStar className='ml-[30px]' />
			</div>
		));
	}

	return (
		<section className='mt-[152px]'>
			<div className='relative mx-auto flex max-w-lg flex-col justify-center md:flex-row'>
				<img
					ref={codeRef}
					className={clsx(
						'w-[70px]',
						'absolute -top-14 left-24',
						'-rotate-[20deg]',
						'md:top-10 md:left-[min(10vw,120px)] md:w-[min(10vw,150px)]',
					)}
					src={CodePng}
					alt='code'
				/>
				<img
					className={clsx(
						'absolute bottom-4',
						'hidden',
						'md:top-[min(10vw, 40px)] md:left-[min(20vw,300px)] md:block md:w-[min(16vw,241px)] ',
					)}
					src={DashedArrow1Png}
					alt='dasharrow-1'
				/>
				<div className='flex flex-col items-center'>
					<hgroup
						ref={titleRef}
						className='relative whitespace-nowrap'
					>
						<h2
							className={clsx(
								'font-pilot text-center text-[27px] leading-[55px] tracking-[0.2em]',
								'-right-0 -top-16',
								'text-neutral-1 text-shadow-hero',
								'md:absolute md:text-[min(4vw,52px)]',
							)}
						>
							4TH
						</h2>
						<h1
							className={clsx(
								'mr-0',
								'text-neutral-1 text-shadow-hero',
								'font-monument text-[42px] tracking-[0.2em]',
								'md:mr-[min(10vw,140px)] md:text-[min(6vw,80px)] md:leading-[min(8vw,96px)]',
							)}
						>
							THE F2E
						</h1>
					</hgroup>
					<div
						className={clsx(
							'text-neutral-1',
							'mt-9',
							'whitespace-nowrap text-xl font-bold tracking-[0.8em]',
							'md:text-[min(2.5vw,28px)]',
						)}
					>
						互動式網頁設計
					</div>
					<button className='btn-yellow'>
						立即報名
					</button>
				</div>
				<img
					className={clsx(
						'hidden',
						'absolute -top-[40px]',
						'md:right-[min(4.5vw,100px)] md:block md:w-[min(16vw,195px)]',
					)}
					src={DashedArrow2Png}
					alt='dasharrow-2'
				/>
				<img
					ref={dashboardRef}
					className={clsx(
						'w-[105px]',
						'absolute -bottom-32 right-28 z-0',
						'md:right-[min(16vw,280px)] md:-bottom-[min(5vw,10px)] md:w-[min(20vw,250px)]',
					)}
					src={DashboardPng}
					alt='dahsboard'
				/>
			</div>
			<div
				ref={marquee}
				className='mt-[208px]'>
				<div className='flex items-center gap-[30px]'>
					{_renderMaquree()}
					{_renderMaquree()}
				</div>
			</div>
		</section>
	);
}

export default Hero;
