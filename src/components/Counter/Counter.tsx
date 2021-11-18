import React, {useState} from 'react';
//import styles from './index.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>The current number is: {count}.</div>
            <button onClick= {() => { setCount(count + 1) }}>Click Me to Add One</button>
        </div>
    );
    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //     console.log('Counter: the first render.');
    //     console.log(`The new value of count is: ${count}`)

    //     return () => {
    //         console.log(`The old value of count is: ${count}`)
    //         console.log('The couter has been reomved.')
    //     };
    // }, [count]);

    // return (
    //     <div>
    //         <div>The current number: {count}</div>
    //         <button onClick={() => { setCount(count + 1);}}>
    //             Click me to add 1
    //         </button>
    //     </div>
    // );
};

export default Counter;