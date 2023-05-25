import { useState, useEffect } from "react";

export const Useeffect = () => {
    let [count,setCount] = useState(0)

    useEffect(()=> {
        alert(`${count}`)
    },[count])

    function plus() {
        setCount(count + 1)
    }
    function minus() {
        setCount(count - 1)
    }


  return (
    <div>
        <h1>{count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
    </div>
  )
}
