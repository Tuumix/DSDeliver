import {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button onClick={() => setCount(count - 1)}>Decrementar</button>
            <h1>Valor do contador : {count}</h1>
        </div>
    )
}

export default Counter;