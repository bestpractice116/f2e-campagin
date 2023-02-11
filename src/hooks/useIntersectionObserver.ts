import { RefObject, useEffect, useState } from 'react';

interface Options {
	threshold?: number | number[],
	root?: null
	rootMargin?: string
	triggerOnce?: boolean,
}

function useIntersectionObserver(
	elementRef: RefObject<Element>,
	{
		threshold = 0,
		root = null,
		rootMargin = '0%',
	}: Options,
): {
	isIntoView: boolean
} {
	const [isIntoView, setIsIntoView] = useState<boolean>(false);

	useEffect(() => {
		const options = { threshold, root, rootMargin };

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsIntoView(entry.isIntersecting);

				observer.disconnect();
			}
		}, options);

		if (elementRef.current) {
			observer.observe(elementRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, [elementRef?.current, threshold, root, rootMargin]);

	return { isIntoView, };
}

export default useIntersectionObserver;
