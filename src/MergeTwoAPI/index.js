import React, { useEffect, useState } from 'react';
// import "./style.css";
    // Combine/Merge Two API:

function MergeTwoAPI() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [userTitleData, setUserTitleData] = useState([]);
    const [showScreen, setShowScreen] = useState(true);

    useEffect(() => {
        // USER API FETCH:
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(userData => setUsers(userData));
        // POST API FETCH:
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(postData => setPosts(postData));
    }, []);

    useEffect(() => {
        let arr= [];
        if(users.length && posts.length > 0) {
            posts.map((post) => {
                let obj = {};
                users.filter((user, index) => {
                    if(post.userId === user.id) {
                        obj["username"] = user.username;
                        obj["title"] = post.title;
                        obj["postId"] = post.id
                    }
                })
                arr.push(obj);
            })
            setUserTitleData(arr);
    }
}, [users, posts]);

    const callCommentEvent = (item) => {
        setComments([]);
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${item.postId}`)
        .then(res => res.json())
        .then(commentData => setComments(commentData));
        setShowScreen(false);

    }
  return (
    <div style={{margin:'20px'}}>
      {showScreen ? (
        <div className="flex">
            {userTitleData ? userTitleData.map((item) => (
                <div className='UI-cards' key={item.id} onClick={()=>callCommentEvent(item)}>
                    <div style={{fontWeight:'bolder', paddingBottom:"20px"}}>{item.username}</div>
                    <div>{item.title}</div>
                </div>
            )): <p>No Data:</p>
            }
        </div>
      ): 
      <div className='flex'>
        {comments ? comments.map((comment) => (
            <div className="UI-cards" key={comment.id}>
                <div style={{fontWeight:'bolder', paddingBottom:"20px"}}>{comment.name}</div>
                <div>{comment.body}</div>
            </div>
        )): <p>Loading...</p>}
      </div>

      }
    </div>
  )
}

export default MergeTwoAPI;
