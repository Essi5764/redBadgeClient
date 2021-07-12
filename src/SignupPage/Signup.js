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




// const Signup = () => {
//     return (
//         <div>
//             <div className="icon">
//                 <div className="icon_class">
//                     <PersonAddIcon fontSize="large"/>
//                 </div>
//                 <div className="text">Sign Up</div>
//             </div>
//             <div className="row m-2">
//                 <div className="col-6 p-2">
//                     <TextField id="firstname" type="text" variant="outlined" label="First Name" fullwidth />
//                 </div>
//                 <div className="col-6 p-2">
//                     <TextField id="lastname" type="text" variant="outlined" label="Last Name" fullwidth />
//                 </div>
//             </div>

//             <div className="row m-2">
//                 <TextField id="email" className="p-2" type="text" variant="outlined" label="Email" fullwidth />
//                 <TextField id="password" className="p-2" type="text" variant="outlined" label="Password" fullwidth />
//                 <FormControlLabel
//                     control={
//                         <Checkbox
//                             icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
//                             checkedIcon={<CheckBoxIcon fontSize="small" />}
//                             name="checkedIcon"
//                         />

//                     }
//                     label="I agree with all term and conditions."
//                 />
//                 <Button variant="contained" color="primary">Create Account</Button>
//             </div>
//             <Divider variant="middle"/>
//             <p className="text-center">
//                 <Link to="/signin" className="text-black-50">
//                     <h5>Already have an Account?</h5>
//                 </Link>
//             </p>

//         </div>
//     )
// }

// export default Signup;



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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Signup = (props)=> {
    const classes = useStyles();
    

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to="/signin" className="text-black-50">
                                <h5>Already have an Account?</h5>
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default Signup;