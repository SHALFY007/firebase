import { Box, Button, Container, Grid } from "@mui/material"
import { useContext } from "react"
import {Context} from '../index'
// import {app} from "../index"
import {GoogleAuthProvider, signInWithPopup, getAuth} from "firebase/auth"


function Login() {

    const auth = getAuth();

    const login = () => {
        const provider = new GoogleAuthProvider()
        const user = signInWithPopup(auth, provider)
        user.then(data => console.log(data.user.displayName))
    }

    return (
        <Container>
            <Grid container
            style={{height: window.innerHeight- 50}}
            alignItems={"center"}
            justifyContent={"center"}
            >
                <Grid style={{width: 400, background: "gray"}}
                container
                alignItems={"center"}
                direction={"column"}>
                <Box p={5}>
                    <Button onClick={login} variant={"outlined"} color="inherit">Войти с помощью Google</Button>
                </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login