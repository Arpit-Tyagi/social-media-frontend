import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import ApiServce from '../services/ApiService.js'
import "./feed.css";


export default function List( {userIdlist} ) {
  const dispatch = useDispatch();
  const [user, setUser] = useState();

  
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
//   const posts=  useSelector((state)=>state.postReducer.post);
   console.log(userIdlist)


   useEffect(() => {
    ApiServce.getUser(userIdlist).then(res =>{
         console.log(res.data)
     setUser(res.data);
    }
     ).catch(
         console.log("error")
     )
  }, [userIdlist]);


if(user){
  return (
            <div className="postTopLeft">
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "noAvatar.png"
                }
                alt=""
              />
            <span className="postUsername">{user.name}</span>
          </div>
        );

    }

    return(
        <div><h6>searching</h6></div>
    );
}






