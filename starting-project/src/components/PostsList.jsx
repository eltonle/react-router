import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  const posts = useLoaderData();
  //   const [posts, setPosts] = useState([]);
  //   const [isFetching, setIsFetching] = useState(false);

  //   useEffect(() => {
  //     async function fetchPosts() {
  //       setIsFetching(true);
  //     //   const response = await fetch("http://localhost:8080/posts");
  //     //   const resData = await response.json();
  //       setPosts(resData.posts);
  //       setIsFetching(false);
  //     }

  //     fetchPosts();
  //   }, []);

  return (
    <>
      {/* {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )} */}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "while" }}>
          <h2>Ther are no pots yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {/* {isFetching && (
        <div style={{ textAlign: "center", color: "while" }}>
          <p>Loading......</p>
        </div>
      )} */}
    </>
  );
}

export default PostsList;
