import { useContext } from 'react';
import { CounterContextObj } from '../Contexts/CounterContextProp'; // Ensure this path is correct
import React from 'react';
import BirdImage from '../assets/Bird1.jpg'; 

const Home = () => {
    
    // Use context
    const { counter, setCounter } = useContext(CounterContextObj);

    return (
        <div className='text-center'>
            <h1 className='display-3 text-secondary'>Routing Demo in React</h1>
            

            {/* Counter from counterxonextObj not from rootcomponent */}
             <button className='btn btn-warning' onClick={()=>setCounter(counter+1)}>Increment</button>
             <h1>Counter: {counter}</h1>
           
            <img src={BirdImage} alt='A beautiful bird' className='rounded-5 p-4' />
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda numquam reprehenderit, sequi incidunt aspernatur commodi non nostrum beatae fuga molestias, sed at, ut dignissimos unde tempora! Unde at delectus culpa.
                Ab enim hic voluptatibus aliquam? Itaque exercitationem enim harum dicta, sunt eveniet. Minima nam officiis similique veritatis a corporis libero. Molestias minus neque earum nemo recusandae voluptatum temporibus eius aliquid!
            </p>
        </div>
    );
}

export default Home;
