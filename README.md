# F2E 4rd campagin
---
[Demo](https://tommm2.github.io/f2e-4rd-campagin/#/)

## 預覽圖
---
![Web-Design.png](https://postimg.cc/y3c4h7cM)

## Using
- React
- Typescript
- Tailwindcss
- [clsx](https://www.npmjs.com/package/clsx) - A tiny utility for constructing className strings conditionally.
- gsap
- eslint
- vite

## Project structure
---
```
$PROJECT_ROOT
├── assets
│   # static resource
├── components
│   # React component files
├── hooks
│  ├── useMobileDetect # dectect mobile viewport
│  └── useIntersectionObserver # dectect target is into view or not
├── constant
│   # constant data
├── enums
│   # enums
└── public
```

## 心得
遇到一個小坑，如果 timeline 等等有關動畫的操作沒在 unmount 後清掉，動畫會一直疊加下去
```javascript
useLayoutEffect(() => {
	const tl = timeline({});

	// ...

	return () => {
		tl.revert(); // 不曉得為什麼用 kill 沒有用
	}
}, []);
```

## 設計稿作者及圖片提供
### [Jenny Wu](https://2022.thef2e.com/users/12061549261447630282/)
