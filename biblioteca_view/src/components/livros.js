import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import BookIcon from '@mui/icons-material/Book';
import InputBase from '@mui/material/InputBase';
import { color } from '@mui/system';
import Login from './login';
import Cadastro from './cadastro_livros';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { OpenInFull } from '@mui/icons-material';
import {
  useParams,
  useNavigate
} from 'react-router-dom';
import useState from 'react';
import { yellow } from '@mui/material/colors';
import CadastroLivros from './cadastro_livros';
import EditarLivros from './editar_livros';
import Apagar from './apagar_dialog';
import EstanteLivros from './img/bookshelf.jpg';
import { MenuItem, FormControl, Select, InputLabel } from '@mui/material';
import axios from 'axios';



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/RodrigoBenini">
        Rodrigo Benini
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// Inicio setar constantes 



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(0),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const theme = createTheme();


// Fim Setar constantes 




export default function Livros() {

  // Inicio setar constantes privadas do livros.js



    

  //Inicio constantes para abertura de Dialog com outro componente embutido
  const [openCadastrar, setCadastrarOpen] = React.useState(false);
  const [openEditar, setEditarOpen] = React.useState(false);
  const [openApagar, setApagarOpen] = React.useState(false);
  const [openFavoritar, setFavoritarOpen] = React.useState(false);

  const handleChangeFavoritar = (event) => {
    setFavoritarOpen(event.target.value);
  };



  const handleOpenCadastrar = () => {
    setCadastrarOpen(true);
  };
  const handleOpenEditar = () => {
    setEditarOpen(true);
  };
  const handleOpenApagar = () => {
    setApagarOpen(true);
  };
  const handleOpenFavoritar = () => {
    setFavoritarOpen(true);
  };
  const handleCloseCadastrar = () => {
    setCadastrarOpen(false);
  };
  const handleCloseEditar = () => {
    setEditarOpen(false);
  };
  const handleCloseApagar = () => {
    setApagarOpen(false);
  };
  const handleCloseFavoritar = () => {
    setFavoritarOpen(false);
  };

  //Fim constantes para abertura de Dialog com outro componente embutido

  let navigate = useNavigate();

  let params = useParams();


  // Fim setar constantes privadas do livros.js

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" sx={{ bgcolor: '#628ca5' }}>
        <Toolbar>


          <BookIcon sx={{ m: 1, color: '#9fc8ce', fontSize: 'large' }} />

          <Typography sx={{ m: 1 }} variant="h6" color="inherit">
            <Button variant="contained" onClick={() => { navigate("/livros") }}>
              Biblioteca Smart
            </Button>
          </Typography>


          <Search sx={{ m: 1, flexGrow: 1 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Pesquisar livros..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Button sx={{ m: 1 }} variant="contained" color="info" onClick={() => { navigate("/livros") }}>
            Livros
          </Button>


          <Button sx={{ m: 1 }} variant="contained" color="warning" onClick={() => { navigate("/usuarios") }}>
            Usuários
          </Button>




        </Toolbar>

      </AppBar>


      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: '#75abb3',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Biblioteca Smart
            </Typography>
            <Typography  variant="h5" align="center" color="text.secondary" paragraph>
              Sistema gerenciamento de biblioteca, utilize seu acesso administrativo aqui
              para  realizar as seguintes ações: cadastrar, adicionar um livro nos favoritos de um usuario, editar ou apagar seus livros.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >

              <Button variant="contained" color="success" onClick={handleOpenCadastrar}>Cadastrar Livros</Button>
              <Dialog open={openCadastrar}
                onClose={handleCloseCadastrar}>

                <CadastroLivros />
              </Dialog>

            </Stack>
          </Container>
        </Box>
        {/* End hero unit */}
        <Grid container sx={{ py: 8, bgcolor: '#9fc8ce', height: '100%', display: 'flex', justifyContent: 'space-evenly', p: 8 }} maxWidth="xs">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9

                    }}
                    image={EstanteLivros}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained" sx={{ bgcolor: '#F8B400' }} onClick={handleOpenFavoritar}>Favoritar Livro</Button>
                    <Dialog open={openFavoritar} onClose={handleCloseFavoritar} BackdropProps={{ invisible: true }}>
                      <Box sx={{ m: 2,mt: 2, minWidth: 300 }}>
                        <FormControl fullWidth>
                          <InputLabel id="usuario_favoritar">Selecione o usuario para favoritar o livro:</InputLabel>
                          <Select
                            labelId="usuario_favoritar"
                            id="usuario_favoritar"
                            value={openFavoritar}
                            label="Selecione o usuario para favoritar o livro"
                            onChange={handleChangeFavoritar}
                          >
                            <MenuItem value={1}>Usuario 1</MenuItem>
                            <MenuItem value={2}>Usuario 2</MenuItem>
                            <MenuItem value={3}>Usuario 3</MenuItem>
                            <MenuItem value={4}>Usuario 4</MenuItem>
                            <MenuItem value={5}>Usuario 5</MenuItem>
                            <MenuItem value={6}>Usuario 6</MenuItem>
                            <MenuItem value={7}>Usuario 7</MenuItem>
                            <MenuItem value={8}>Usuario 8</MenuItem>
                            <MenuItem value={9}>Usuario 9</MenuItem>
                          </Select>
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2}}
                            onClick={handleCloseFavoritar}
                          >
                            Salvar
                            
                          </Button>
                        </FormControl>
                      </Box>

                    </Dialog>


                    <Button size="small" variant="contained" color="warning" onClick={handleOpenEditar}>
                      Editar</Button>
                    <Dialog open={openEditar} onClose={handleCloseEditar} BackdropProps={{ invisible: true }}>

                      <EditarLivros />
                    </Dialog>
                    <Button size="small" variant="contained" color="error" onClick={handleOpenApagar}>Apagar  </Button>

                    <Dialog
                      open={openApagar}
                      onClose={handleCloseApagar} BackdropProps={{ invisible: true }}>
                      <Apagar />
                    </Dialog>

                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

        </Grid>

      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: '#628ca5', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Biblioteca Smart
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Salve e acesse seus livros em nuvem!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider >
  );
}
