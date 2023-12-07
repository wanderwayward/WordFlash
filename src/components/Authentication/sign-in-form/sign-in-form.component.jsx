import { useForm } from "react-hook-form";
import { Button, Grid, Sheet, Box, FormControl, Typography, Input, FormHelperText } from "@mui/joy";
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

    const googleAuthHandler = handleGoogleAuthentication(showSnackbar, "Signed in with Google.", "Failed to sign in.");
 

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
        <Sheet 
        variant="soft"
        color="primary"
        elevation={10} 
        sx={{  borderRadius: 20 }}>
            <Box p={3}>
                <Box marginBottom={3}>
                    <Typography variant="h3" fontWeight="bold">Sign In</Typography>
                </Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl error={errors.email ? true : false} >
                        <Input 
                            {...register("email", { required: true })}
                            placeholder="Email" 
                            variant="soft"
                            type='email'
                            fullWidth 
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
                        sx={{marginTop: 2}}
                        />
                         {errors.password && <FormHelperText>Password is required</FormHelperText>}
                    </FormControl>
                    <Grid container spacing={1} justifyContent="center"  marginY={2}>
                        <Grid  xs={5}>
                            <Button variant="soft" color="success" >
                                Sign In with Email
                            </Button>
                        </Grid>
                        <Grid  xs={1}> </Grid>
                        <Grid  xs={5}>
                            <Button variant="soft" color="success" onClick={() => googleAuthHandler(setUser)}>
                                Sign In with Google
                            </Button>
                        </Grid>
                    </Grid>
                    <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>    
                    <Typography>Don't have an account? </Typography>
                    <Button 
                        variant="soft" 
                        color="danger" 
                        onClick={switchToSignUp}
                        sx={{marginX:'10px'}}>
                            Sign Up
                        </Button>
                    </Box>
                </form>
            </Box>
        </Sheet>                                    
    );
};

export default SignIn;