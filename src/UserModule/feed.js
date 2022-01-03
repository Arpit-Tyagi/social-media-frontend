import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { getPostList } from '../redux/actions/postActions.js';

import Post from "./post.js";

import "./feed.css";


export default function Feed({ username }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state)=>state.userReducer);
  const posts=  useSelector((state)=>state.postReducer.post);
  console.log(posts)


  useEffect(() => {
    dispatch(getPostList(user));
  }, [username, user._id]);

  if(posts){
  return (
    <div className="feed">
      <div className="feedWrapper">
        {/* {(!username || username === user.username) && <Share />} */}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
        }

        return (
          <div className="feed">
            Loading
            </div>
        );
}