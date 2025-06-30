import React, { useState } from 'react';
function Counter() {
    //const count=0
    const[count, setCount] = useState(0);

    
    

    return (
        //fragment
        <div>
            <h2>Count:{count}</h2>
            <button className="btn" onClick={()=>setCount(count+1)}>Increment</button>
            <button className="btn" onClick={()=>setCount(count-1)}>Decrement</button>
            <button className="rst" onClick={()=>setCount(0)}>Reset</button>
        </div>
    );
}


export default Counter;

//useState - hook
//add state - data that changes over time

//class - stateful component, functional- stateless component

//To overcome this, we can use the useState hook to add state to our functional component

//hooks - special functions that let us hook into react features