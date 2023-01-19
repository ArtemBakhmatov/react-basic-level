import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Header } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  	<StrictMode>
		<App/>
	</StrictMode>
);

/* <StrictMode></StrictMode> -> обнаружение потенциальных проблем в приложении (например: устаревший код), 
в html его не будет видно, только внутри реакта (работает только в режиме разработки)*/

/* Чтобы работал emmet: Управление -> Параметры -> Расширения -> Emmet -> Include Languages -> 
нажать на кнопку (добавить элемент) -> Элемент: javascript , Значение: javascriptreact*/

