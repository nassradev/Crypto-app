import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CryptoInfo from './CryptoInfo'
import './App.css'
class Main extends React.Component {
  render() {
    return (
     <div className="container">
        <h1 className="title">React Crypto Price Tracker</h1>
      <App  />
<CryptoInfo  />
      </div>
     
    );
  }
}


ReactDOM.render(
  <Main  />, 
  document.getElementById('root')
);
