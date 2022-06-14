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

export default function Apagar() {


    return (

        <ThemeProvider theme={theme} >
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
                    <Typography component="h1" variant="h5">
                        Deseja Apagar?
                    </Typography>
                    <Box sx={{ mt: 2}}>
                        <Grid container spacing={1} sx={{ m: 1, mb:2}}>

                            <Grid sx={{ m: 1,mb:2 }}>
                            <Button variant="contained" color="success">
                                Sim
                            </Button>
                            </Grid>
                            <Grid sx={{ m: 1,mb:2 }}>
                            <Button variant="contained" color="error">
                                Não
                            </Button>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}