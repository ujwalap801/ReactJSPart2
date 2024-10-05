import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CounterContextProp from './Contexts/CounterContextProp'; // Ensure this path is correct
import LoginContext from './Contexts/LoginContext'



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterContextProp>
        <LoginContext>
        <App /> 
        </LoginContext>
         
        </CounterContextProp>
    </React.StrictMode>
);
