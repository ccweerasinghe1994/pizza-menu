import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header.component';
import Footer from './Components/Footer/Footer';

function App() {
	return (
		<div className="max-w-7xl my-0 mx-auto flex flex-col items-center gap-20">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
