import { createRoot } from 'react-dom/client'

// creating a component
function Car(props) {
  return (
    <h2>I am {props.brand} car!</h2>
  );
}

export default function Garage() {
  return (
    <>
      <h1>Cars in the Garage</h1>
      {/* reusing components */}
      <Car brand="Audi"/>
      <Car brand="BMW"/>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <Garage/>
)
