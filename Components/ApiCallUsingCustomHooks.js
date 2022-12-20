import { list } from "postcss";
import React from "react";
import useFetchData from "../Hooks/useFetchData.js";

function ApiCallUsingCustomHooks() {
  const users = useFetchData("https://jsonplaceholder.typicode.com/users", (data) =>
    data.map((item) => ({ id: item.id, name: item.name }))
  );
  const posts = useFetchData("https://jsonplaceholder.typicode.com/posts", (data) =>
    data.slice(0, 10)
  );

  return (
    <>
      <div>
        <div>
          <h1>this is user information</h1>

          {users.loading && <h3>Loading...</h3>}
          {users.error && <h3>{users.error}</h3>}

          {users.data?.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </div>
        <div>
          <h1 className="font-extrabold">this is user information</h1>

          {posts.loading && <h3>Loading...</h3>}
          {posts.error && <h3>{posts.error}</h3>}
          {posts.data?.map((post) => {
            return (
              <li key={post.id}>
                {post.id}
                <h1>
                  {post.title}
                  <br />
                  {post.body}
                </h1>

                <hr />
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ApiCallUsingCustomHooks;
