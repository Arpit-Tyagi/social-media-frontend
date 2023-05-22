import {React} from 'react';
import { useSelector } from "react-redux";

import {Topbar} from '../UserModule/topBar.js'
import {Share} from '../UserModule/share.js'
import Feed from '../UserModule/feed.js'



export const HomeContainer = () =>{
    const user = useSelector((state)=>state.userReducer);
    console.log(user);

    return(
        <div>
            
            <Topbar ></Topbar>
         <div style={{marginLeft: '400px'}}><br/><br/><br/> <Share></Share></div>  

         <div><br/><br/><Feed username={user.name}></Feed></div>

        
        </div>
    );

}