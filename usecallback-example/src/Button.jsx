import { memo } from "react";


function Button({ onClick, text }) {

  console.log(`Child ${text} button rendered`);
  return <button onClick={onClick}>{text}</button>;
}

export default memo(Button)
