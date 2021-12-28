import {React } from 'react';
import {useState } from 'react';
import {Button, Container, TextField,makeStyles } from '@material-ui/core';
import {userRegister} from '../redux/actions/userActions.js';
import {useDispatch} from "react-redux";


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(3),
        width: '25ch',
      },
    },

    textField: {
        background:  ' #FFFFE0',
        borderRadius: 3,
        margin: theme.spacing(3),
        width: '25ch',
      },

      container:{

        background:  'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      justify:"center",
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: "auto",
      marginTop:'50px',
      },

      button:{
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
      color: 'white',
      height: "auto",
      
    },
    loginInput:{
      height: "50px",
      borderRadius: "10px",
      border: "1px solid gray",
      fontSize: "18px",
      paddingLeft: "20px"
  }

  }));


export const Register =() =>{

    const classes = useStyles();
    const dispatch = useDispatch();

    const[user, setUser] = useState({
      name:"",
      email:"",
      password:"",
      dob:""

    });

    const handleChange = e => {
      const { name, value } = e.target;
      setUser({
        ...user,
        [name]: value
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userRegister(user));
    //console.log(user);

  };

    return(
        <div>

<div><h1>Social Media Application</h1></div>
            

            <Container maxWidth="sm"  className={classes.container}>
              <br></br>
            <h1>User Registeration</h1>
            <form className={classes.root} onSubmit={handleSubmit} >   
        <TextField
          label="Name"
          placeholder="Enter your name"
          variant="filled"
          name="name"
          required
          value={user.name}
          className={classes.textField}
          onChange={handleChange}
        />
        <TextField
          type="email"
          name="email"
          label="email"
          pattern=".+@gmail\.com" 
          required={true}
          placeholder="Enter your email"
          variant="filled"
          value={user.email}
          className={classes.textField}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="filled"
          required={true}
          value={user.password}
          className={classes.textField}
          onChange={handleChange}
        />
        
        <TextField
        id="date"
        name="dob"
        label="Date Of Birth"
        type="date"
        required
        value={user.dob}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleChange}
      />

<Button type='submit' variant="contained"  className={classes.button}>
        Register
    </Button>
        
      </form>
            </Container>



        </div>
    )
}