import {
	QuestionsCountText,
	commonQuestionsData,
	uiQuestionsData,
	f2eQuestionsData,
	teamQuestionsData,
} from '../../constant';
import TabPanel from './tab-panel';
import Tabs from './tabs';

type Content = {
	question: string;
	answer: string;
}

function QuestionAndAnswer() {
	function _renderTabsContent(data: Content[]) {
		return data.map((item, index) => (
			<div
				key={index}
				className='flex gap-6'
			>
				<div className='text-primary-3 font-monument text-[32px]'>{QuestionsCountText[index]}</div>
				<div className='text-neutral-5'>
					<div className='text-2xl font-bold leading-9'>{item.question}</div>
					<div className='mt-4 text-xl'>{item.answer}</div>
				</div>
			</div>
		));
	}
	return (
		<section className='scroll-section flex flex-col items-center pt-[140px]'>
			<h1 className='text-neutral-1 text-shadow-white font-monument text-[40px]'>Q&A</h1>
			<Tabs>
				<TabPanel title='常見問題'>
					{_renderTabsContent(commonQuestionsData)}
				</TabPanel>
				<TabPanel title='設計師常見問題'>
					{_renderTabsContent(uiQuestionsData)}
				</TabPanel>
				<TabPanel title='前端工程師常見問題'>
					{_renderTabsContent(f2eQuestionsData)}
				</TabPanel>
				<TabPanel title='團體組常見問題'>
					{_renderTabsContent(teamQuestionsData)}
				</TabPanel>
			</Tabs>
			<button className='btn-yellow'>
				立即報名
			</button>
		</section>
	);
}

export default QuestionAndAnswer;
