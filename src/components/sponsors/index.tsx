import { BlockLogoPng, KdanLogoPng, TitanLogoPng } from '../../assets/images';
import { IcStarYellow, } from '../Icons';

function Sponsors() {
	return (
		<section className='bg-neutral-3 mt-[114px] flex flex-col items-center pt-20 pb-[100px]'>
			<h1 className='text-neutral-1 relative text-center text-[32px]'>
				<IcStarYellow className='absolute -left-12 top-6' />
				<div className='font-monument'>Sponsors</div>
				<div className='font-bold'>鑽石級贊助商</div>
				<IcStarYellow className='absolute -right-10 -top-4 w-8' />
			</h1>
			<div className='mt-[60px] flex flex-col items-center gap-[60px] sm:flex-row'>
				<img
					src={BlockLogoPng}
					alt='block-studio'
				/>
				<img
					src={KdanLogoPng}
					alt='kdan'
				/>
				<img
					src={TitanLogoPng}
					alt='titan'
				/>
			</div>
		</section>
	);
}

export default Sponsors;
