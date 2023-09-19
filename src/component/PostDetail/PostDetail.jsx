import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const post = useLoaderData();
  const navigate = useNavigate()
  const {body,id} = post;
  // console.log(post)
  const haldeGoBack =()=>{
      navigate(-1)
  }
  return (
    <div>
      <p>{id}</p>
      <h3>{body}</h3>
      <button onClick={haldeGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetail;