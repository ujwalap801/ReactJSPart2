import { createContext, useState } from 'react';

// Create Context object
export const CounterContextObj = createContext();

const CounterContextProp = ({ children }) => {
    // State
    const [counter, setCounter] = useState(100);
      
    return (
        <CounterContextObj.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContextObj.Provider>
    );
}

export default CounterContextProp;
