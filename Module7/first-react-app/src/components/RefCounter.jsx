import { useRef, useState } from "react"
export default function RefCounter() {

    const [countState, setCountState] = useState(0)

    let countRef = useRef(0);
    let count = 0;

    function handleClick() {
        countRef.current = countRef.current + 1;
        count = count + 1;
        alert(`You clicked ${countRef.current} (${count}) times!`);
    }

    return (
        <div className="RefCounter componentBox">
            <button onClick={handleClick}>
                REFCOUNTER: Click me!
                {/* <p>Normal Count: {count}</p> */}
            </button> 
                Ref: {countRef.current} var: {count} <br/>
            <button onClick={() => setCountState(countState +1)}>
                STATE COUNTER: Click me to update!
            </button>
            State: {countState}
        </div>
    );
}