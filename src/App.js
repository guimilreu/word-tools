import { Routes, Route } from 'react-router-dom';

import './css/App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';

const App = () => {
	return (
		<div className="container-fluid h-100">
			<Navbar />
			<Alert />
			<div className="container my-3">
				<Routes>
					<Route exact path="/" element={<TextForm />} />
					<Route exact path="/about" element={<About />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
};

export default App;
