import Header from "../components/Header";
import { useSelector } from "react-redux";
import Navbar from '../components/Navbar'



const Page = () => {
  const { users } = useSelector(( state) => state.users);

  return (
    <div>
      <Navbar />
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