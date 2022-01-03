
import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:3030/users';

class ApiService {

    userRegistration(user){
        return axios.post(""+USER_API_BASE_URL+"/register", user);
    }
    userLogin(emailPassword){
        return axios.post(""+USER_API_BASE_URL+"/userLogin", emailPassword);
    }
    uploadfile(data){
        return axios.post(""+USER_API_BASE_URL+"/upload", data);
    }
    uploadPost(post){
        return axios.post(""+USER_API_BASE_URL+"/uploadPost", post);
    }
    getPostList(){
        return axios.get(""+USER_API_BASE_URL+"/allPosts");
    }
    likeDislikePost(userId, postId){
        return axios.put(""+USER_API_BASE_URL+"/likedislikePost/"+postId+"/"+userId);
    }
    getUser(userId){
        return axios.get(""+USER_API_BASE_URL+"/userById/"+userId);
    }

    deletePost(userId, postId){
        return axios.delete(""+USER_API_BASE_URL+"/deletePost/"+userId+"/"+postId);
    }

    addComment(comment, postId){
        return axios.put(""+USER_API_BASE_URL+"/addComment/"+postId, comment);
    }
  
}

export default new ApiService();