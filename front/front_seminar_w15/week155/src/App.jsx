import { useQuery } from "@tanstack/react-query";
import "./App.css";

function App() {
  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await response.json();
  }
  const { data: postData } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  console.log("queryResult", queryResult);

  const posts = postData ?? [];

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
