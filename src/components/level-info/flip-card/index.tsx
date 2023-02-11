import clsx from 'clsx';

import { LockerPng, } from '../../../assets/images';
import { useMobileDetect } from '../../../hooks';
import { ViewPortEnum, } from '../../../enums';

type Props = {
	weekText: string
	tagText: string
	title: string
	subTitle: string
	imgSrc: string
} & typeof defaultProps;

const defaultProps = {
	weekText: '',
	tagText: '',
	title: '',
	subTitle: '',
	imgSrc: '',
};

function FlipCard({
	weekText,
	tagText,
	title,
	subTitle,
	imgSrc,
}: Props) {
	const isMobile = useMobileDetect(ViewPortEnum.Large);

	return (
		<div
			className={clsx(
				'h-[360px] w-[300px]',
				'bg-transparent',
				'perspective',
			)}
		>
			<div
				className={clsx(
					'flip-card',
					'h-full w-full',
					'relative',
					'transform-3d',
					{ 'rotate-y-[180deg]': isMobile }
				)}
			>
				<div
					className={clsx(
						'card-front',
						'h-full w-full',
						'bg-gradient-3',
						'rounded-[32px] p-0.5',
						'absolute',
						'backface-hidden'
					)}
				>
					<div className='bg-gradient-2 rounded-[32px] px-[56px] py-[50px]'>
						<div
							className={clsx(
								'font-monument whitespace-nowrap',
								'text-neutral-1 text-[32px] tracking-widest'
							)}
						>
							{weekText}
						</div>
						<img
							className='mt-4'
							src={LockerPng}
							alt='locker'
						/>
					</div>
				</div>
				<div
					className={clsx(
						'card-back',
						'h-full w-full',
						'bg-neutral-1',
						'rounded-2xl px-6 pt-4 pb-7',
						'flex flex-col items-center justify-between',
						'absolute',
						'rotate-y-[180deg]',
						'backface-[hidden]'
					)}
				>
					<div className='my-4 inline-block rounded-lg bg-[#83FAC1] px-2 py-1 font-bold'>{tagText}</div>
					<div className='text-primary-3 text-center text-2xl'>
						<div className='font-bold'>{title}</div>
						<div className='mt-2 text-xl'>{subTitle}</div>
					</div>
					<img
						className='h-[140px] w-[143px]'
						src={imgSrc}
						alt='Small Dashboard'
					/>
					<div className='mt-[30px] flex w-full items-center justify-between text-sm'>
						<div className='text-primary-2 font-monument'>{weekText}</div>
						<a
							className='flex items-center'
							href='#'
						>
							<span
								className={clsx(
									'text-primary-3',
									'hover:font-bold hover:underline hover:underline-offset-4'
								)}
							>
								查看關卡細節
							</span>
							<div
								className={clsx(
									'h-[10px] w-[10px]',
									'ml-3',
									'border-primary-3 border-t-2 border-r-2',

								)}
							>
								<div
									className={clsx(
										'h-[15px] w-0.5',
										'bg-primary-3',
										'translate-x-0.5 -translate-y-[3px] rotate-45'
									)}
								></div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

FlipCard.defaultProps = defaultProps;

export default FlipCard;
