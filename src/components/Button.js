import React, {useState} from "react";


const Button = ()=>{
    let [clicked, setClicked] = useState(0);

    function countClick(){
        setClicked(clicked+1); 
    }
    return (
        <div>
            <p>Button clicked {clicked} times</p>
            <button onClick={countClick}>Click me</button>
        </div>
    )
}

export default Button;