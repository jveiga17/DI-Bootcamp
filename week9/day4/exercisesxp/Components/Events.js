import React, { useState } from "react";

function Events() {
    const [isToggleOn, setIsToggleOn] = useState(true);

    const clickme = () => {
        alert('I was clicked');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            alert(`keyEnter: ${e.target.value}`);
        }
    };

    const toggleState = () => {
        setIsToggleOn(!isToggleOn);
    };

    return (
        <div>
            <button onClick={clickme}>Click Me</button>
            <input type="text" onKeyDown={handleKeyDown}></input>
            <button onClick={toggleState}>{isToggleOn ? 'on' : 'off'}</button>
        </div>
    );
}

export default Events;