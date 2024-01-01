import './App.css';
// import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Portfolio } from './layout/sections/works/Portfolio'
import { Testimony } from './layout/sections/testimony/Testimony';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Footer } from './layout/footer/Footer';
import { About } from './layout/sections/about/About';
import { GoTopBtn } from './components/goTopBtn/GoTopBtn';

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Main />
			<About />
			<Skills />
			<Portfolio />
			<Testimony />
			<Contacts />
			<Footer />
			<GoTopBtn />
		</div>
	);
}

export default App;