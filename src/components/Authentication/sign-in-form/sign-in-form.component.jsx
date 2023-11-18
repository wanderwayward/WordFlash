import { useForm } from "react-hook-form";
import { Button, Grid, Paper, Box, FormControl, Typography, FormHelperText } from "@mui/material";
import { StyledTextField } from "../../../utils/styledComponents";
import { signInUserWithEmailAndPassword, auth } from "../../../utils/firebase-utils";
import { handleGoogleAuthentication } from "../../../hooks/handleGoogleAuthentication";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/user.context";


const SignIn = ({switchToSignUp, showSnackbar}) => {
    const navigate = useNavigate();
    const location = useLocation();
    

    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        if(user){
            const redirectTo= location.state?.background?.pathname || "/"; // If the user is already signed in, redirect to the previous page or the home page
            navigate(redirectTo)       
        }
    }, [user, navigate, location.state])


    const { register, handleSubmit, formState: { errors } } = useForm();

    const googleAuthHandler = handleGoogleAuthentication(showSnackbar, "Signed in with Google successfully", "Failed to sign in with Google");
 

    const onSubmit = async (data) => {
        try { 
            const { user } = await signInUserWithEmailAndPassword(auth, data.email, data.password);
            setUser(user); // Set the user in the context after successful sign in
            showSnackbar("Signed in successfully", "success");

            const redirectTo= location.state?.background?.pathname || "/"; // If the user is already signed in, redirect to the previous page or the home page
            navigate(redirectTo)
        } catch (err) {
            console.error(err.message);
            showSnackbar("Failed to sign in. Please check your credentials and try again.", "error");
        }
    }

    return (
        <Paper elevation={10} sx={{ backgroundColor: "#FCDDBC", border: "0 0 0 20px solid white" }}>
            <Box p={3}>
                <Box marginBottom={3}>
                    <Typography variant="h3" fontWeight="bold">Sign In</Typography>
                </Box>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl error={errors.email ? true : false} fullWidth>
                            <StyledTextField 
                                {...register("email", { required: true })}
                                label="Email" 
                                variant="filled"
                                type='email'
                                fullWidth 
                            />
                            {errors.email && <FormHelperText>Email is required</FormHelperText>}
                        </FormControl>
                        <FormControl error={errors.password ? true : false} fullWidth>
                            <StyledTextField 
                                {...register("password", { required: true })}
                                label="Password" 
                                variant="filled" 
                                type="password" 
                                fullWidth
                            />
                            {errors.password && <FormHelperText>Password is required</FormHelperText>}
                        </FormControl>
                        <Grid container spacing={1} justifyContent="center"  marginY={2}>
                            <Grid item xs={5}>
                                <Button type="submit" variant="contained" color="secondary">
                                    Sign In with Email
                                </Button>
                            </Grid>
                        <Grid item xs={1}></Grid>
                            <Grid item xs={5}>
                                <Button variant="contained" color="secondary" onClick={() => googleAuthHandler(setUser)}>
                                        Sign In with Google
                                </Button>
                            </Grid>
                        </Grid>
                    <Typography>Don't have an account? <Button color="secondary" onClick={switchToSignUp}>Sign Up</Button></Typography>
                </form>
            </Box>
        </Paper>
                        
                                            
    );
};

export default SignIn;