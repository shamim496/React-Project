import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';

const todos = ReactDom.createRoot(document.getElementById('todos'));

todos.render(
    <App />
)