// import { Divider } from '@material-ui/core';
// import React from 'react'
// import './App.css';
// import {TextField,Button} from '@material-ui/core';
// import {Link} from 'react-router-dom';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
// import PersonAddIcon from '@material-ui/icons/PersonAdd';




// const Signin = () => {
//     return (
//         <div>
//             <div className="icon">
//                 <div className="icon_class">
//                     <PersonAddIcon fontSize="large"/>
//                 </div>
//                 <div className="text">Sign In</div>
//             </div>


//             <div className="row m-2">
//                 <TextField id="email" className="p-2" type="text" variant="outlined" label="Email" fullwidth /><br/>
//                 <TextField id="password" className="p-2" type="text" variant="outlined" label="Password" fullwidth /><br/>
//                 <FormControlLabel
//                     control={
//                         <Checkbox
//                             icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
//                             checkedIcon={<CheckBoxIcon fontSize="small" />}
//                             name="checkedIcon"
//                         />

//                     }
//                     label="Remember Me"
//                 />
//                 <Button variant="contained" color="primary">Submit</Button>
//             </div>
//             <Divider variant="middle"/>
//             <p className="text-center">
//                 <Link to="/signup" className="text-black-50">
//                     <h5>New? Create Account</h5>
//                 </Link>
//             </p>

//         </div>
//     )
// }

// export default Signin;

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Signin=(props)=> {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            {/* <Link href="#" variant="body2">
                                Forgot password?
                            </Link> */}
                        </Grid>
                        <Grid item>
                            <Link to="/signup" className="text-black-50">
                                <h5>New? Create Account</h5>
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default Signin;