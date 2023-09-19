import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const {name,email} = user;
  return (
    <div>
      <h3>This is user details:{name}</h3>
    </div>
  );
};

export default UserDetails;