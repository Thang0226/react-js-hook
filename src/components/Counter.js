import {useState} from 'react';

function Counter() {
    let [count, setCount] = useState(5);


    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            Giá trị: {count}
            <div>
                <button onClick={handleClick}>Tăng</button>
            </div>
        </div>
    )
}

export default Counter;