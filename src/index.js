import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './sass.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import myLogo from './myLogo.png';
import keranjang from './keranjang.svg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Header
const myStyle = {
  color: "black",
  backgroundColor: "#b6f9fd",
  padding: "10px",
  fontFamily: "peralta"
};


const head = ReactDOM.createRoot(document.getElementById('head'));
head.render(
<React.StrictMode>
<div style={myStyle}>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <h1>
          <img src={myLogo} className="App-myLogo" alt="myLogo" /> SEP'S
        </h1>
      </div>
      <div class="col">
      <button type="button" >PRODUK</button>
      <button type="button" >JUAL</button>
        <svg xmlns="http://www.w3.org/2000/svg" width="63" height="63" fill="blue" class="bi bi-cart-fill" viewBox="0 0 16 16" className="App-keranjang">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="63" height="63" fill="blue" class="bi bi-person-circle" viewBox="0 0 16 16" className="App-avatar">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
      </div>
    </div>
  </div>
</div>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
