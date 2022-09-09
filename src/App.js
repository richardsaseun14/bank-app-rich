import { Header, SideNav } from './components';

function App() {
	return (
		<div className='h-screen'>
			<Header></Header>
			<SideNav></SideNav>
			<div className='content p-8'>
				<h4 className='text-xl font-semibold'>Hello, Benedict,</h4>
				<hr className='my-8 h-px bg-gray-200 border-0 dark:bg-gray-700' />
			</div>
		</div>
	);
}

export default App;
