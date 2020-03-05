import React, { useState } from 'react';

export default function Example() {
    // create state variable count and the function to update it using hooks
    // useState argument sets the count to 0
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times.</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <p>Howdy do?!</p>
        </div>
    )
}