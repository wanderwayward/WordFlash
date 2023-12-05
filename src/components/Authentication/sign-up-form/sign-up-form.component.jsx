import { useForm } from "react-hook-form";
import { Button, Grid, Sheet, Box, FormControl, Typography, FormHelperText, Input } from "@mui/joy";

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
        <Sheet 
        variant="soft"
        color="primary"
        elevation={10} 
        sx={{  borderRadius: 20 }}>
            <Box p={3}>
                <Box marginBottom={3}>
                    <Typography variant="h3" fontWeight="bold">Sign Up</Typography>
                </Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl error={errors.displayName ? true : false} >
                        <Input 
                            {...register("displayName", { required: true })}
                            placeholder="Display Name" 
                            variant="soft"
                            fullWidth
                        />
                        {errors.name && <FormHelperText>Name is required</FormHelperText>}
                    </FormControl>
                    <FormControl error={errors.email ? true : false} >
                        <Input 
                            {...register("email", { required: true })}
                            placeholder="Email" 
                            variant="soft" 
                            fullWidth
                            sx={{marginTop: 2,
                                marginBottom: 2}}
                        />
                        {errors.email && <FormHelperText>Email is required</FormHelperText>}
                    </FormControl>
                    <FormControl error={errors.password ? true : false} >
                        <Input 
                            {...register("password", { required: true })}
                            placeholder="Password" 
                            variant="soft" 
                            type="password" 
                            fullWidth 
                        />
                        {errors.password && <FormHelperText>Password is required</FormHelperText>}
                    </FormControl>
                    <Grid container spacing={1} justifyContent="center" marginY={2}>
                        <Grid  xs={5}>
                            <Button type="submit" variant="soft" color="success" >
                                Sign Up with Email
                            </Button>
                        </Grid>
                        <Grid  xs={1}></Grid>
                        <Grid  xs={5}>
                            <Button variant="soft" color="success" onClick={()=>googleAuthHandler(setUser)}>
                                Sign Up with Google
                            </Button>
                        </Grid>
                    </Grid>
                    <Box
                    sx={{
                        display: 'flex',	
                        justifyContent: 'center',
                    }}>                      
                    <Typography>Already have an account?  </Typography>
                    <Button 
                        variant="soft" 
                        color="danger" 
                        onClick={switchToSignIn}
                        sx={{marginX:'20px'}}>
                            Sign In
                        </Button>
                    </Box>
                </form>
            </Box>
        </Sheet>
    );
}

export default SignUpForm;
