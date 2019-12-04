import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import './contnet.css';

const Main = () => {
  return <div>App!!!!</div>;
};

const app = document.createElement('div');
app.id = 'my-extension-root';
document.body.appendChild(app);
ReactDOM.render(<Main />, app);
