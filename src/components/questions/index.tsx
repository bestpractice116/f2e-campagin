import { useLayoutEffect, useRef, } from 'react';
import { gsap, } from 'gsap';
import clsx from 'clsx';

import { useIntersectionObserver, useMobileDetect, } from '../../hooks';
import {
	IcUnionCircle,
	IcBubble1,
	IcBubble2,
	IcBubble3,
	IcRoundSm,
	IcRoundLg,
	IcHashTag,
	IcSerration,
	IcTriangle,
	IcQuestionMark,
	IcExclamationMark,
} from '../Icons';

function Questions() {
	const containerRef = useRef(null);
	const icGroup1Ref = useRef(null);
	const icGroup2Ref = useRef(null);
	const icGroup3Ref = useRef(null);

	const isMobile = useMobileDetect();
	const { isIntoView, } = useIntersectionObserver(containerRef, { threshold: 0.5 });

	useLayoutEffect(() => {
		const tl = gsap.timeline({
			delay: 1,
			defaults: {
				duration: 0.8,
				ease: 'elastic.out(0.8, 0.2)',
				scale: 0,
			},
		});

		if (isIntoView) {
			tl.from(icGroup1Ref.current, { y: 50, });
			tl.from(icGroup2Ref.current, { y: 300, });
			tl.from(icGroup3Ref.current, { y: 480, });
		}

		return () => {
			tl.revert();
		};
	}, [isIntoView, isMobile]);

	return (
		<section
			ref={containerRef}
			className={clsx(
				'mt-[70px] md:mt-[125px]',
				'flex flex-col items-center',
				{ 'opacity-0': !isIntoView }
			)}
		>
			<div
				className={clsx(
					'h-[500px] w-[350px]',
					'relative',
					'md:h-[min(75vw,860px)] md:w-[min(70vw,912px)]'
				)}
			>
				<div ref={icGroup1Ref}>
					<IcRoundSm
						className={clsx(
							'w-[105px]',
							'absolute left-9',
							'md:left-[min(5vw,80px)] md:w-[min(20vw,275px)]'
						)}
					/>
					<IcSerration
						className={clsx(
							'w-[23px]',
							'absolute left-[188px] top-3',
							'md:left-[min(35vw,50%)] md:w-[min(5vw,61px)]'
						)}
					/>
					<IcBubble1
						className={clsx(
							'w-[270px]',
							'absolute top-6',
							'md:top-[min(8vw,123px)] md:w-[min(40vw,561px)]'
						)}
					/>
					<IcQuestionMark
						className={clsx(
							'w-[72px]',
							'absolute right-10 -top-2',
							'md:right-[min(14vw,140px)] md:top-[min(10vw,70px)] md:w-[min(13vw,175px)]'
						)}
					/>
				</div>
				<div ref={icGroup2Ref}>
					<IcExclamationMark
						className={clsx(
							'w-24',
							'absolute top-[210px]',
							'md:top-[min(30vw,390px)] md:w-[min(20vw,257px)]'
						)}
					/>
					<IcUnionCircle
						className={clsx(
							'w-4',
							'absolute top-[190px] left-16',
							'md:top-[min(30vw,380px)] md:left-[min(23vw,290px)] md:w-[min(3.5vw,42px)]'
						)}
					/>
					<IcBubble2
						className={clsx(
							'w-[238px]',
							'right-2 top-[100px]',
							'absolute',
							'md:right-2 md:top-[min(20vw,252px)] md:w-[min(40vw,530px)]'
						)}
					/>
				</div>
				<div ref={icGroup3Ref}>
					<IcRoundLg
						className={clsx(
							'w-[132px]',
							'absolute left-[100px] top-[280px]',
							'md:left-[min(15vw,300px)] md:top-[min(44vw,500px)] md:w-[min(28vw,346px)]'
						)}
					/>
					<IcTriangle
						className={clsx(
							'w-[57px]',
							'absolute right-11 top-[260px]',
							'md:right-[min(8vw,100px)] md:top-[min(42vw,476px)] md:w-[min(8vw,118px)]',
						)}
					/>
					<IcBubble3
						className={clsx(
							'w-[270px]',
							'absolute top-[310px] left-[10px]',
							'-rotate-[6.8deg]',
							'md:left-[94px] md:top-[min(52vw,630px)] md:w-[min(40vw,560px)] md:-rotate-0'
						)}
					/>
					<IcHashTag
						className={clsx(
							'w-[72px]',
							'absolute right-6 top-[400px]',
							'md:top-[min(50vw,600px)] md:w-[min(15vw,198px)]'
						)}
					/>
				</div>
			</div>
		</section>
	);
}

export default Questions;
