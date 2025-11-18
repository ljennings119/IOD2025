import { useState, useEffect } from "react";

function ClockDisplay() {

const [showClock, setShowClock] = useState(false);

const toggleClock = () => {
setShowClock(!showClock);
}

return (
<div className="ClockDisplay componentBox">
{showClock && <Clock />}
<button onClick={toggleClock}>Toggle Clock</button>
</div>
)
}

// Renders a digital time that updates every second
function Clock() {

const [date, setDate] = useState(new Date());

// useEffect(() => { // first arg is usually an arrow function
// setInterval(() => tick(), 1000);
// console.log('Clock component mounted');
// }, []); // second arg is an array of dependencies

useEffect(() => {
let clockInterval = setInterval(() => tick(), 1000);
console.log('Clock component mounted');

// function returned from useEffect is run on unmount
// and used to cleanup any side effects
return () => {
console.log('Clock component unmounted');
clearInterval(clockInterval);
}
}, []);

const tick = () => {
setDate(new Date());
console.log('tick'); // track the effect frequency
};

return (
<div className="Clock componentBox">
<h3>Digital Clock</h3>
{date.toLocaleTimeString()}
</div>
);
}





export {Clock, ClockDisplay}