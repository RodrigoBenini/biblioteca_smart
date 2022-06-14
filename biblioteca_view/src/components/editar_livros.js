import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();

export default function EditarLivros() {
  const handleSubmitLivros = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      titulo: data.get('titulo'),
      isbn: data.get('isbn'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 5,
            mb: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1,mb:2, bgcolor: '#0288d1' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Editar Livros
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }} onSubmit={handleSubmitLivros} >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="titulo_do_livro"
                  name="titulo"
                  required
                  fullWidth
                  id="titulo"
                  label="Novo titulo do Livro"
                  autoFocus
                />
              </Grid>
           
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="isbn"
                  label="Novo código ISBN do Livro"
                  name="isbn"
                  autoComplete="ISBN"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="categoria"
                  label="Nova categoria do Livro"
                  id="categoria"
                  autoComplete="Categoria"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="ano"
                  label="Novo ano do Livro"
                  id="ano"
                  autoComplete="Ano"
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 4, mb: 3 }}
            >
              Salvar
            </Button>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}