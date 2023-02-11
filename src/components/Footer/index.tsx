type AuthorInfoType = {
	title: string
	author: string
	href: string
}

function Footer() {
	function _renderAuthorInfo(info: AuthorInfoType) {
		return (
			<span>
				{info.title}
				<a
					className='text-secondary hover:underline hover:underline-offset-2'
					href={info.href}
					target='_blank'
					rel='noreferrer'
				>
					{info.author}
				</a>
			</span>
		);
	}

	return (
		<footer className='py-8'>
			<div className='text-neutral-1 text-center text-sm'>
				<div>Copyright © 2023 All rights reserved.</div>
				<div className='mt-2 space-x-2'>
					{_renderAuthorInfo({
						title: 'Code：',
						author: 'Tom Jin',
						href: 'https://github.com/tommm2'
					})}
					<span>/</span>
					{_renderAuthorInfo({
						title: 'UI：',
						author: 'Jenny Wu',
						href: 'https://2022.thef2e.com/users/12061549261447630282/'
					})}
				</div>
			</div>
		</footer>
	);
}

export default Footer;
