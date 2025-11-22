
import { createRoot } from 'react-dom/client'


function kwToHp(kw) {
  return kw * 1.36;
}

const myFunc = () => {
  alert('Hello World');
};

const mystyles = {
  color: "red",
  fontSize: "20px",
  backgroundColor: "lightyellow",
};

function Car(props) {
  
  const myClass = "myClass";

  const myobj = {
    brand: "Ford",
    name: "Fiat",
    model: "500",
    color: "white"
  };

  const flag = 5;

  // html elements as variables
  const greet1 = <p>Hi</p>
  const greet2 = <p>Hello</p>

  return (
    <>
      {/* adding classes and inline CSS in JSX */}
      <h2 className={myClass} style={mystyles}>I'm a {props.color} car</h2>

      {/* accessing object properties */}
      <p>It is a {myobj.brand} {myobj.model}.</p>
      {/* calling a function */}
      <p>It prduces  {kwToHp(218)} horsepower.</p>

      <p>Our car runs on {flag > 10 ? "Petrol": "Disel"}</p>

      {/* conditional rendering */}
      {flag < 10 ? greet1:greet2}

      <button onClick={myFunc} disabled={false}>Click Me</button>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Car color="red"/>
)
