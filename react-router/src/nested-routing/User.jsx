import { useParams } from "react-router-dom";

function User() {
  const { firstname } = useParams();
  return <h1>Hello, {firstname}!</h1>;
}

export default User
