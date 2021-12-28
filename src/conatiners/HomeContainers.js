import {React} from 'react';
import {Topbar} from '../UserModule/topBar.js'
import {Share} from '../UserModule/share.js'
import { useSelector } from "react-redux";


export const HomeContainer = () =>{

    return(
        <div>
            
            <Topbar></Topbar>
         <div> <Share></Share></div>  

        
        </div>
    );

}