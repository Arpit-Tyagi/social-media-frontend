import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { toast } from 'react-toastify';

import "./post.css";
import { likeDislikePost, deletePost,addComments } from '../redux/actions/postActions.js';
import ApiServce from '../services/ApiService.js'
import List from './List.js'
import CommentList from './commentList.js';

export default function Post({ post }) {
  const dispatch = useDispatch();
  const [like, setLike] = useState(post.likes.length);
  const [comment, setComment] = useState(post.comments.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useSelector((state) => state.userReducer);
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState(false);
  const [newComment, setNewComment] = useState({
    userId: currentUser._id,
    commentdesc: ''
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setNewComment({
      ...newComment,
      [name]: value
    });
  };


  const addComment = () =>{
    if(newComment.commentdesc ==''){
      toast.error("Add text in comment",  {
        position: "top-center",
        theme: "colored",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }); 
    }else{
    dispatch(addComments(newComment, post._id));
    setComment(comment + 1);
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleOpenComment = () => {
    setDisplay(true);
  };
  const handleCloseComment = () => {
    setDisplay(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await ApiServce.getUser(post.userId);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {

    dispatch(likeDislikePost(currentUser._id, post._id));
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const removePost = () => {
    dispatch(deletePost(currentUser._id, post._id));
  };

  // const LikeList= () =>{


  //     {post.likes.map((p) => (  <List res={p.userId} /> ))}
  //     }

  // };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.name}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "noAvatar.png"
                }
                alt=""
              />
            </Link>
            <span className="postUsername">{user.name}</span>
            {/* <span className="postDate">{format(post.createdAt)}</span> */}
          </div>
          <div className="postTopRight">
            <Button variant="contained" type='button' color="secondary" onClick={removePost}>
              Delete
            </Button>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF + post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}like.png`}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              onClick={likeHandler}
              alt=""
            />
            {/* <span className="postLikeCounter">{like} people like it</span> */}
            <div>
              <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                {like} people like it
             </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"People List "}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {post.likes.map((p) => (<List userIdlist={p} />))}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Okay
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
          <div className="postBottomRight">

            <Button variant="outlined" color="primary" onClick={handleOpenComment}>
              {comment} Commented
             </Button>
            <Dialog
              open={display}
              onClose={handleCloseComment}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"People List "}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {post.comments.map((p) => (<CommentList comment={p} />))}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseComment} color="primary">
                  Okay
                  </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>

        <div className="postTop" >
        <div className="postBottomLeft">
          <div style={{display:"flex", position:"relative"}}>
            <div> <img
            className="postProfileImg"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "noAvatar.png"
            }
            alt=""
          /></div>
          <div><input
              required
              style={{ width: "380px", height: "30px" }}
              placeholder={"Add a Comment "}
              name="commentdesc"
              onChange={handleChange}
            /> </div></div>
            <div className="postBottomRight">
            <Button variant="contained" type='button' style={{marginLeft:"15px"}} color="primary" onClick={addComment}>
              Add Comment
            </Button>
            </div>
            </div>
          
        </div>


      </div>
    </div>
  );
}