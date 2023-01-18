import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//const elem = <h2>Hello World!</h2>;  // jsx
//const elem = React.createElement('h2', {className: 'greeting'}, 'Hello World!'); // (тег, класс, текст)

/*  React.createElement выводит так (const element), потом через render() в виде html
const element = {
  type: 'h2',
  props: {
    className: 'greeting',
    clildren: 'Привет Мир!'
  }
} */

const text = 'Hello World!';

const elem = (
	<div>
		<h2 className='text'>Текст: {text}</h2>   
		<input type="text" />
		<label htmlFor=""></label>
		<button tabIndex={0}>Click</button>
	</div>
);
// в фигурные скобки мы не может добавить объект {new Date()}, но можем массив (они сконкантинируются)
// className -> class  // htmlFor -> for
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  	elem 
);

/* Чтобы работал emmet: Управление -> Параметры -> Расширения -> Emmet -> Include Languages -> 
нажать на кнопку (добавить элемент) -> Элемент: javascript , Значение: javascriptreact*/

