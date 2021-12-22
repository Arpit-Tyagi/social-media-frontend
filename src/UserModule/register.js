import {React } from 'react';
import {Button, Container,Grid , TextField,makeStyles } from '@material-ui/core';


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
      },

      button:{
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
      color: 'white',
      height: "auto",
      
    },

  }));


export const Register =() =>{

    const classes = useStyles();

    return(
        <div>
            <h1>User Registeration</h1>

            <Container maxWidth="sm"  className={classes.container}>
            <form className={classes.root} noValidate autoComplete="off">   
        <TextField
        
          label="Name"
          placeholder="Enter your name"
          variant="filled"
          className={classes.textField}
        />
        <TextField
         
          type="email"
          label="email"
          placeholder="Enter your email"
          variant="filled"
          className={classes.textField}
        />
        <TextField
         
          label="Password"
          type="password"
          variant="filled"
          className={classes.textField}
        />
        
        <TextField
        id="date"
        label="Date Of Birth"
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />

<Button variant="contained"  className={classes.button}>
        Register
    </Button>
        
      </form>
            </Container>



        </div>
    )
}