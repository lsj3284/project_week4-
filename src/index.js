import React from 'react'; 
//브라우저가 읽을수 있도록 jsx를 바꾸기 위해서 작성
import ReactDOM from 'react-dom/client';
// 클라이언트에서 앱을 초기화하는데 사용되는 클라이언트 별 메서드 제공
import App from './App';
// App.js import
import reportWebVitals from './reportWebVitals';
//  React의 성능을 측정하기 위한 것입니다.
import {Provider} from "react-redux"; 
// Redact-redux 라이브러리에 내장되어있는 리액트 앱에 store를
//손쉽게 연동할수 있도록 도와주는 컴포넌트
import store from "./redux/config/configStore";
// redux 를 사용하기위한 redux 연동파일 import

const root = ReactDOM.createRoot(document.getElementById('root'));
// 리액트 앨리먼트를 렌더링 하기위해서 선언
root.render( 
  <Provider store={store}>
    {/* store 연동을위한 Provider 컴포넌트  */}
    <App />
    {/* App.js 컴포넌트 */}
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
