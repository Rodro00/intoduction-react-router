import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
  const navigate = useNavigate();
  const {id,title} = post;

  const hlndleShowDetails=()=>{
    navigate(`/post/${id}`)
  }

  return (
    <div className='box'>
      <h3>Post id:{id}</h3>
      <p>
        title:{title}
      </p>
      <Link to={`/post/${id}`}>Show Details</Link>
      <br />
      <button onClick={hlndleShowDetails}>Click to see details</button>
    </div>
  );
};

export default Post;