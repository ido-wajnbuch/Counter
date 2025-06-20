import React, { useState } from 'react';

const Counter : React.FC = () =>
{
    const [value, setValue] = useState(0);
    return <div>
        <button onClick={() => setValue(value + 1)}>+</button>
        <button onClick={() => setValue(value - 1)}>-</button>
        {value}
    </div>
}

export default Counter;