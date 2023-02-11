import { useLayoutEffect, useRef, } from 'react';
import clsx from 'clsx';
import { gsap } from 'gsap';

import {
	ThumderPng,
	PhonePng,
	ReturnArrowPng,
	DashboardSmPng,
} from '../../assets/images';
import {
	useIntersectionObserver,
	useMobileDetect,
} from '../../hooks';
import { ViewPortEnum, } from '../../enums';
import FlipCard from './flip-card';

function LevelInfo() {
	const containerRef = useRef(null);
	const thumderRef = useRef(null);
	const titleRef = useRef(null);
	const subTitletRef = useRef(null);

	const isMobile = useMobileDetect(ViewPortEnum.Large);
	const { isIntoView, } = useIntersectionObserver(containerRef, { threshold: 0.5 });

	useLayoutEffect(() => {
		const tl = gsap.timeline({
			defaults: {
				duration: 1.5,
				ease: 'power1.out'
			}
		});

		const cards = gsap.utils.toArray<HTMLElement>('.flip-card');

		if (isIntoView && !isMobile) {
			tl.from(titleRef.current, { opacity: 0, y: -20 });

			tl.from(thumderRef.current, {
				opacity: 0,
				y: -20,
				delay: 0.2,
			}, '<');

			tl.from(subTitletRef.current, {
				opacity: 0,
				y: 80
			}, '<');

			cards.forEach((card, index) => {
				tl.from(card, {
					opacity: 0,
					y: (4 - index) * 50,
					stagger: index * 0.2
				}, '<');
			});

			cards.forEach((card) => {
				tl.to(card, {
					duration: 1,
					rotateY: 180,
				});
			});
		}

		return () => {
			tl.revert();
		};
	}, [isMobile, isIntoView]);

	return (
		<section
			ref={containerRef}
			className={clsx(
				'pt-[135px]',
				'flex flex-col items-center',
				{ 'opacity-0': !isIntoView && !isMobile }
			)}
		>
			<hgroup className='relative'>
				<img
					ref={thumderRef}
					className={clsx(
						'h-[75px] w-[46px]',
						'absolute -top-10 -right-10',
						'md:h-auto md:w-auto',
						'md:-top-20 md:-right-20'
					)}
					src={ThumderPng}
					alt='thumder'
				/>
				<h1
					ref={titleRef}
					className={clsx(
						'px-10 pt-5 pb-6',
						'border-secondary rounded-full border-4',
						'flex flex-col items-center justify-center gap-[10px]',
						'text-shadow-secondary text-secondary text-[32px]',
						'font-bold',
						'shadow-xs shadow-secondary',
						'md:px-9 md:pt-4 md:pb-5',
						'md:block',
						'2xl:text-5xl 2xl:leading-[72px]',
					)}
				>
					<span>年度最強合作</span>
					<span>三大主題來襲</span>
				</h1>
				<h2
					ref={subTitletRef}
					className={clsx(
						'text-neutral-1',
						'mt-[60px]',
						'text-center text-xl',
						'2xl:text-2xl 2xl:leading-9'
					)}
				>
					<div className='hidden md:block'>
						<div>各路廠商強強聯手</div>
						<div>共同設計出接地氣的網頁互動挑戰關卡</div>
					</div>
					<div className='block md:hidden'>
						<div>各路廠商強強聯手</div>
						<div>共同設計出接地氣的</div>
						<div>網頁互動挑戰關卡</div>
					</div>
				</h2>
			</hgroup>
			<div
				className={clsx(
					'mt-[60px]',
					'flex flex-col gap-10',
					'lg:flex-row'
				)}
			>
				<FlipCard
					weekText='Week 1'
					tagText='# 板塊設計'
					imgSrc={DashboardSmPng}
					title='The F2E 活動網站設計'
					subTitle='視覺滾動'
				/>
				<FlipCard
					weekText='Week 2'
					tagText='# 凱鈿行動科技'
					imgSrc={PhonePng}
					title='今晚，我想來點點簽'
					subTitle='CANVAS'
				/>
				<FlipCard
					weekText='Week 3'
					tagText='# 鈦坦科技'
					imgSrc={ReturnArrowPng}
					title='Scrum 新手村簽'
					subTitle='JS Draggable'
				/>
			</div>
		</section>
	);
}

export default LevelInfo;
