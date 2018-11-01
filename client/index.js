import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App.jsx';

const randNum = max => Math.floor(Math.random() * max);
const genres = ['action', 'romance', 'comedy', 'horror', 'documentary'];

ReactDOM.render(<App genre={`${genres[randNum(genres.length)]}`}/>, document.getElementById('app'));
