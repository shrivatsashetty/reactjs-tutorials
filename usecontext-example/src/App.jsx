import { useState } from 'react'
import './App.css'

import Component2 from './Component2';

import UserContext from './UserContext';

function App() {
  const [user] = useState("Shrivatsa");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  )
}

export default App
