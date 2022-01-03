import { React } from 'react';
import { useState } from 'react';
import { Button, Container, Link, TextField, makeStyles } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { userLogin } from '../redux/actions/userActions.js';




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '25ch',
    },
  },

  textField: {
    background: ' #FFFFE0',
    borderRadius: 3,
    margin: theme.spacing(3),
    width: '25ch',
  },

  container: {

    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    justify: "center",
    borderRadius: 3,
    boxShadow: '0 4px 6px 3px rgba(255, 105, 135, .3)',
    color: 'white',
    height: "auto",
    marginTop: '50px',
  },
  button: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: "auto",

  }

}));



export const Login = () => {

  const [user, setUser] = useState({
    'email': '',
    'password': ''
  });

  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(user)
    dispatch(userLogin(user, navigate));
  }

  return (
    <div>
      <div><h1>Social Media Application</h1></div>

      <Container maxWidth="sm" className={classes.container}>
        <br></br>
        <h1>User Login</h1>

        <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">
          <TextField
            required
            type="email"
            label="email"
            name="email"
            placeholder="Enter your email"
            variant="filled"
            className={classes.textField}
            onChange={handleChange}
          />
          <TextField
            required
            label="Password"
            type="password"
            name="password"
            variant="filled"
            className={classes.textField}
            onChange={handleChange}
          />


          <Button variant="contained" type='submit' className={classes.button}>
            LogIn
           </Button>

        </form>
        <div>If you don't have an account please <a href='/Register'>Register </a></div>
        <br></br><br></br>
      </Container>



    </div>
  )
}