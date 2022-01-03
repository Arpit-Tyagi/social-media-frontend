import {ActionType} from "../constants/actions-type.js";
import ApiServce from '../../services/ApiService.js'
import { toast } from 'react-toastify';


export const postUpload = (post) =>{

    return async () => {
        try{
           await ApiServce.uploadPost(post);
          toast.success("Post Uploaded Successfully",  {
            position: "top-center",
            theme: "colored",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            }); 
        }catch {
            toast.error("Failed to upload the post",  {
                position: "top-center",
                theme: "colored",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                }); 
        }
      };
}

export const getPostList = (user) =>{
    return async (dispatch) => {
        try{
          const res = await ApiServce.getPostList();
          console.log(res.data);
          dispatch({ type: ActionType.Post_Get, payload: res.data} );
          toast.success("Check recent post",  {
            position: "top-center",
            theme: "colored",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            }); 
        }catch {
            toast.error("Unable to get post",  {
                position: "top-center",
                theme: "colored",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                }); 
        }
}

}

export const likeDislikePost = (userId, postId) =>{
  return async (dispatch) => {
      try{
        console.log(postId);
        console.log(postId);
        await ApiServce.likeDislikePost(userId, postId);
        console.log("liked");
        const res = await ApiServce.getPostList();
          console.log(res.data);
          dispatch({ type: ActionType.Post_Get, payload: res.data} );
      }catch {
          toast.error("Unable to like post",  {
              position: "top-center",
              theme: "colored",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              }); 
      }
}

}


export const deletePost = (userId, postId) =>{
  return async (dispatch) => {
      try{
        console.log("In delete Post")
        await ApiServce.deletePost(userId, postId);
        const res = await ApiServce.getPostList();
          dispatch({ type: ActionType.Post_Get, payload: res.data} );
          toast.success("Post Deleted",  {
            position: "top-center",
            theme: "colored",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      }catch {
          toast.error("Not Permitted to delete",  {
              position: "top-center",
              theme: "colored",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              }); 
      }
}

}


export const addComments = (comment, postId) =>{
  return async (dispatch) => {
      try{
        console.log("In add comment")
        await ApiServce.addComment(comment, postId);
        const res = await ApiServce.getPostList();
          dispatch({ type: ActionType.Post_Get, payload: res.data} );
          toast.success("Comment Added",  {
            position: "top-center",
            theme: "colored",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      }catch {
          toast.error("Error in  Addoing Comment",  {
              position: "top-center",
              theme: "colored",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              }); 
      }
}

}
