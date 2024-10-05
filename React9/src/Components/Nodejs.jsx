import React from 'react'
import { useContext } from 'react'
import { CounterContextObj } from '../Contexts/CounterContextProp'


const Nodejs = () => {

  const {counter,setCounter}= useContext(CounterContextObj);
  
  return (
    <div className='text-center'>
     <h1>NodeJS</h1>
    

      {/* Counter from counterxonextObj not from rootcomponent */}
      <button className='btn btn-warning' onClick={()=>setCounter(counter-1)}>Decrement</button>
             <h1>Counter: {counter}</h1>

     <p className="lead">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ullam itaque praesentium, consequatur facilis dicta optio quod autem libero eligendi officia explicabo delectus veniam harum consequuntur debitis exercitationem vitae perferendis!
        Dicta sapiente quis iusto. Assumenda eos eveniet et nobis veritatis ut itaque architecto ducimus laudantium fuga temporibus doloremque nulla inventore, aliquam in, soluta blanditiis sapiente corrupti eum quaerat placeat consectetur?
        Consequatur incidunt reiciendis vero nesciunt Possimus repellat maiores aperiam totam magnam suscipit voluptates expedita, rerum doloribus accusantium voluptate voluptatem, sunt aliquam ab, nemo est porro!
     </p>
    </div>
 )
}

export default Nodejs
