import React from 'react';
import ReactDOM from 'react-dom/client';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';
import MotionPathPlugin from 'gsap/MotionPathPlugin';

import App from './App';
import './index.css';

gsap.registerPlugin(ScrollTrigger, TextPlugin, MotionPathPlugin);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
