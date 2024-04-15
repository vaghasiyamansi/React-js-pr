import React,{useRef} from 'react'

function Useref() {

    const ref = useRef();
    console.log(ref , "ref");

    const handleRef = () => {
        ref.current.focus();
        ref.current.style.color="blue";
    }
  return (
    <div>
      <input type="text" ref={ref}/>
      <button onClick={handleRef}>Click me</button>
    </div>
  );
}

export default Useref;
