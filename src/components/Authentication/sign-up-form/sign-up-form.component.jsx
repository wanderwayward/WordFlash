import { useForm } from "react-hook-form";
import { Button, Grid, Paper, Box, FormControl, Typography, FormHelperText } from "@mui/material";
import { StyledTextField } from "../../../utils/styledComponents";

import { signUpWithEmailAndPassword, auth} from "../../../utils/firebase-utils";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/user.context";
import {handleGoogleAuthentication} from "../../../hooks/handleGoogleAuthentication";

const SignUpForm = ({ switchToSignIn, showSnackbar }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        if(user){   
            navigate("/")       
        }
    }, [user, navigate])


    const googleAuthHandler = handleGoogleAuthentication(showSnackbar, "Signed up with Google successfully", "Failed to sign up with Google");

    const onSubmit = async (data) => {
        try { 
            const {user} = await signUpWithEmailAndPassword(auth, data.email, data.password, data.displayName);
            showSnackbar("Signed up successfully", "success");
        } catch (err) {
            switch (err.code) {
                case 'auth/email-already-in-use':
                    showSnackbar("Email already in use", "error")
                    break;
                case 'auth/admin-restricted-operation':
                    showSnackbar("Admin restricted operation", "error")
                    break;
                default:
                    showSnackbar("An unexpected error occurred. Please try again.", "error");
            }
        }
    } 

    return (
        <Paper elevation={10} sx={{ backgroundColor: "#FCDDBC", border: "0 0 0 20px solid white" }}>
            <Box p={3}>
                <Box marginBottom={3}>
                    <Typography variant="h3" fontWeight="bold">Sign Up</Typography>
                </Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl error={errors.displayName ? true : false} fullWidth>
                        <StyledTextField 
                            {...register("displayName", { required: true })}
                            label="Display Name" 
                            variant="filled"
                            fullWidth
                        />
                        {errors.name && <FormHelperText>Name is required</FormHelperText>}
                    </FormControl>
                    <FormControl error={errors.email ? true : false} fullWidth>
                        <StyledTextField 
                            {...register("email", { required: true })}
                            label="Email" 
                            variant="filled" 
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
                    <Grid container spacing={1} justifyContent="center" marginY={2}>
                        <Grid item xs={5}>
                            <Button type="submit" variant="contained" color="secondary" >
                                Sign Up with Email
                            </Button>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5}>
                            <Button variant="contained" color="secondary" onClick={()=>googleAuthHandler(setUser)}>
                                Sign Up with Google
                            </Button>
                        </Grid>
                    </Grid>
                    <Typography>Already have an account? <Button color="secondary" onClick={switchToSignIn}>Sign In</Button></Typography>
                </form>
            </Box>
        </Paper>
    );
}

export default SignUpForm;
