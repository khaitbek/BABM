import { useEffect } from 'react';
import { Courses } from './components/Courses/Courses';
import { Footer } from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Hero } from './components/Hero';
import { News } from './components/News/News';
import { Partners } from './components/Partners/Partners';
import { Statistics } from './components/Statistics/Statistics';
import { StyledApp, StyledMain, StyledPageTop } from './styles/global';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<StyledApp
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.85 }}>
			<StyledPageTop>
				<Header />
				<Hero />
				<Statistics />
			</StyledPageTop>
			<StyledMain>
				<Courses />
				<News />
				<Partners />
			</StyledMain>
			<Footer />
		</StyledApp>
	);
}

export default App;
