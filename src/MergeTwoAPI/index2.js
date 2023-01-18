import React, { useEffect, useState } from "react";
import "./style.css";

function MergeAPI2() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [userTitleData, setUserTitleData] = useState([]);
  const [showScreen, setShowScreen] = useState(true);

  useEffect(() => {
    // USER API FETCH
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((userData) => setUsers(userData));

    // USER API FETCH
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((postData) => setPosts(postData));
  }, []);

  useEffect(() => {
    let arr = [];
    if (users.length && posts.length > 0) {
      posts.map((post) => {
        // console.log(post);
        let obj = {};
        users.map((user) => {
          // console.log(user);
          if (user.id === post.userId) {
            obj["username"] = user.username;
            obj["title"] = post.title;
            obj["postId"] = post.id;
          }
        });
        arr.push(obj);
        // console.log(arr);
      });
      setUserTitleData(arr);
    }
  }, [users, posts]);

  const callCommentAPI = (item) => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${item.postId}`)
      .then((res) => res.json())
      .then((commentData) => setComments(commentData));
    setShowScreen(false);
  };
  return (
    <div style={{ margin: "20px" }}>
      {showScreen ? (
        <div className="flex">
          {userTitleData ? (
            userTitleData.map((data, index) => (
              <div
                className="UI-cards"
                key={index}
                style={{ width: "200px" }}
                onClick={() => callCommentAPI(data)}
              >
                <div style={{ fontWeight: "bold", paddingBottom: "20px" }}>
                  {data.username}
                </div>
                <div>{data.title}</div>
              </div>
            ))
          ) : (
            <p>No Data</p>
          )}
        </div>
      ) : (
        <div>
        <button onClick={()=>setShowScreen(true)}>Back</button>
        <div className="flex">
          {comments ? (
            comments.map((comment) => (
              <div
                className="UI-cards"
                key={comment.id}
                style={{ width: "200px" }}
              >
                <div style={{ fontWeight: "bold", paddingBottom: "20px" }}>
                  {comment.name}
                </div>
                <div>{comment.body}</div>
              </div>
            ))
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
        </div>
      )}
    </div>

  );
}

export default MergeAPI2;
