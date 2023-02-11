import Navbar from './components/navbar';
import Hero from './components/hero';
import Questions from './components/questions';
import Banner from './components/banner';
import LevelInfo from './components/level-info';
import Activity from './components/activity';
import Award from './components/award';
import QuestionAndAnswer from './components/question-and-answer';
import Sponsors from './components/sponsors';
import Footer from './components/Footer';

function App() {
	return (
		<div className='app'>
			<Navbar />
			<Hero />
			<Questions />
			<Banner />
			<LevelInfo />
			<Activity />
			<Award />
			<QuestionAndAnswer />
			<Sponsors />
			<Footer />
		</div>
	);
}

export default App;
