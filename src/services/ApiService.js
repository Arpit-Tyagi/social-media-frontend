
import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:3030/users';

class ApiService {

    userRegistration(user){
        return axios.post(""+USER_API_BASE_URL+"/register", user);
    }
    userLogin(emailPassword){
        return axios.post(""+USER_API_BASE_URL+"/userLogin", emailPassword);
    }
    
  
}

export default new ApiService();