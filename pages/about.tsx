import { useSelector } from "react-redux";
import Navbar from '../components/Navbar'

const Page = () => {
  const { users } = useSelector(( state) => state.users);

  return (
    <div className="container">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="user-list" style={{
        position: 'absolute', 
        left: '50%', 
        top: '30%',
        transform: 'translate(-50%, -50%)'
    }}>
      <h4><b> User List:</b></h4>
      <ol>
        {users.map((user) => (
          <li>{user}</li>
        ))}
      </ol>
      </div>
    </div>
  );
};

export default Page;