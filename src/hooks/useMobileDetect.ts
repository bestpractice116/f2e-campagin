import { useState, useEffect, } from 'react';

import { ViewPortEnum, } from '../enums';

const { Medium, } = ViewPortEnum;

function useMobileDetect(size = Medium): boolean {
	const [width, setWidth] = useState(window.innerWidth);

	function _handleWindowSizeChange() {
		setWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener('resize', _handleWindowSizeChange);

		return () => window.removeEventListener('resize', _handleWindowSizeChange);
	}, []);

	const isMobile = width < size;

	return isMobile;
}

export default useMobileDetect;
