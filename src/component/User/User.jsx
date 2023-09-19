import { Link } from 'react-router-dom';
import './User.css'

const User = ({user}) => {
  const {id,name,phone} = user;
  return (
    <div className='box'>
      <h3>Name:{name}</h3>
      <p>Phone:{phone}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;