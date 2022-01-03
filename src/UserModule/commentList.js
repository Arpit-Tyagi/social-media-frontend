import { useEffect, useState } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

import ApiServce from '../services/ApiService.js'
import "./feed.css";


export default function CommentList( {comment} ) {
  const [user, setUser] = useState();

  
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
//   const posts=  useSelector((state)=>state.postReducer.post);
   console.log(comment.userId)


   useEffect(() => {
    ApiServce.getUser(comment.userId).then(res =>{
         console.log(res.data)
     setUser(res.data);
    }
     ).catch(
         console.log("error")
     )
  }, [comment]);


if(user){
  return (
            <div className="postTopLeft">
                <div>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "noAvatar.png"
                }
                alt=""
              /></div>
              <div>
            <span className="postUsername">{user.name}</span></div>

            <div>
            <input
              readOnly
              value={comment.commentdesc}
            /></div>
            
          </div>
        );

    }

    return(
        <div> <CircularProgress color="inherit" /></div>
    );
}






