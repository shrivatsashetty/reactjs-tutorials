import React from 'react'
import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      From Navbar Component Count: <b>{count}</b>
    </div>
  )
}

export default Navbar
