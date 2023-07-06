import {useState} from "react";
import './Counter.scss';
import styles from './Counter.module.scss';


const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    return (
        <div className={styles.counter}>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
        </div>
    );
};

export default Counter;
