import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CounterContextProp from './Contexts/CounterContextProp'; // Ensure this path is correct

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterContextProp>
            <App />
        </CounterContextProp>
    </React.StrictMode>
);
