import * as React from 'react';
import Livros from './livros';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  useParams,
  useNavigate
} from 'react-router-dom';
import axios from 'axios';




const theme = createTheme();
export default function Login() {



  //Inicio Axios autenticação
  const [usuario, setUsuario] = React.useState("");
  const [password, setPassword] = React.useState("");

  function login() {
    axios.post('http://localhost:3001/auth/login', { user: usuario, password: password })
      .then(response => {
        if (response.data.access_token) {
          localStorage.setItem('hash_login', response.data.access_token);
          navigate("/livros")
        } else {
          alert('Usuário ou senha inválidos')
        }
      })
      .catch(console.error);
  }
  //Fim axios autenticacao

  //setar roteamento
  let navigate = useNavigate();

  let params = useParams();


  return (


    <Box sx={{
      bgcolor: '#3D405B',
      display: 'flex',
      height: 'auto',


    }} >


      <ThemeProvider theme={theme} >
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              bgcolor: '#F1F1DE',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 7,
              border: '1px double #1976d2',
              borderRadius: 16,
              mb: '50%',
              mt: '50%'

            }}
          >
            <Avatar sx={{ mb: 2, bgcolor: '#F2CC8F' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">

              Login Administrativo

            </Typography>

            <Box sx={{ mt: 1, mb: 2 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="usuario"
                label="Usuario"
                name="usuario"
                autoComplete="usuario"
                autoFocus
                onChange={(event) =>
                  setUsuario(event.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{ mb: 2 }}
                onChange={(event) =>
                  setPassword(event.target.value)}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={login}
              >

                Login
              </Button>

            </Box>
          </Box>


        </Container>
      </ThemeProvider>
    </Box>
  );
}
