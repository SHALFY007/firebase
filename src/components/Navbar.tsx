import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { CHAT_ROUTE, LOGIN_ROUTE } from './utils/consts';
import {useAuthState} from 'react-firebase-hooks/auth'
import Login from "./Login";
import { getAuth, signOut} from "firebase/auth"

function Navbar() {

    const auth = getAuth();
    const [user]:any = useAuthState(auth)

    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant='dense'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <Grid justifyContent="flex-end">
            {user ?
            <NavLink to={CHAT_ROUTE}>
                <Button onClick={() => signOut(auth)} color='secondary' variant='outlined'>Выйти</Button>
            </NavLink>
               : 
               <NavLink to={LOGIN_ROUTE}>
                <Button color='secondary' variant='outlined'>Логин</Button>
            </NavLink>

            }
          
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Navbar