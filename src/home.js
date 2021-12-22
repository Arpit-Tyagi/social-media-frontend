import {React} from 'react';
import {Button, ButtonGroup, TextField} from '@material-ui/core';
import { Register } from './UserModule/register';
import { Login } from './UserModule/login';

export const Home = () =>{

    return(
        <div><h3> Welcome to Social Media App</h3>
        
    <Button variant="contained" color="primary">
     User Login
    </Button>
    <>&nbsp; &nbsp; &nbsp;</><>&nbsp; &nbsp; &nbsp;</>
    <Button variant="contained" color="primary">
        Register User
    </Button>
    <Login></Login>
        </div>
    );

}