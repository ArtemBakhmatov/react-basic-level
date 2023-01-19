//import React from 'react';  React.Component
import { Component, StrictMode } from 'react'; // Тут прописали ввиде деструктирезации (Component)
import './App.css';

const Header = () => {
	return <h2>Hello World!</h2>
}

// const Field = () => {
// 	const holder = 'Enter here';
// 	const styleField = {
// 		width: '300px'
// 	};
// 	return <input 
// 			placeholder={holder} 
// 			type='text' 
// 			style={styleField}/>
// }

class Field extends Component {
	render() { // метод render() -> обязателен
		const holder = 'Enter here';
		const styleField = {
			width: '300px'
		};

		return <input 
			placeholder={holder} 
			type='text' 
			style={styleField}/>
	}
}

function Btn() {
	const text = 'Log in';
	const logged = true;
	
	return <button>{logged ? 'Enter' : text}</button>
}
function App() {
	return (
		<div className="App">
			<StrictMode>
				<Header/>
			</StrictMode>
			<Field/>
			<Btn/>
		</div>
	);
}

export {Header};
export default App;
