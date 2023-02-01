import Header from "../components/header";
import { useSelector } from "react-redux";


const Page = () => {
  const { users } = useSelector(( state) => state.users);

  return (
    <div>
      <Header />
      <h4>User List:</h4>
      <ol>
        {users.map((user) => (
          <li>{user}</li>
        ))}
      </ol>

    </div>
  );
};

export default Page;