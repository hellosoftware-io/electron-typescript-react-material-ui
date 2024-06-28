import React, { useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Grid,
  Box,
  Typography,
  Container,
  CircularProgress,
  Snackbar,
  Alert,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { CustomTextField } from '../../components/TextFieldComponent';
import { schema } from './validationSchema';

const defaultTheme = createTheme();


interface IFormInput {
  name: string;
  dob: string;
  cpf: string;
  address: string;
  city: string;
  zipcode: string;
  email: string;
  username: string;
  ipProxy: string;
}

export default function SignIn() {
  const methods = useForm<IFormInput>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = methods;

  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSnackbarOpen(true);
      console.log(data);
    }, 2000);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          border: 1,
          borderRadius: 2,
          bgcolor: 'white',
          mt:5, 
          mb:5,
        }}
      >
        <Box
          sx={{
        
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Formulário de Cadastro
          </Typography>
          <FormProvider {...methods}>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              autoComplete="on"
            >
              <Typography
                component="h1"
                variant="body1"
                textAlign="left"
                color="black"
                sx={{ mt: 1, mb:1 }}
              >
                Dados Pessoais
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CustomTextField
                    control={control}
                    name="name"
                    label="Nome Completo"
                    helperText={errors.name?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    control={control}
                    name="dob"
                    label="Data de Nascimento"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    helperText={errors.dob?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    control={control}
                    name="cpf"
                    label="CPF"
                    helperText={errors.cpf?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    control={control}
                    name="address"
                    label="Endereço"
                    helperText={errors.address?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    control={control}
                    name="city"
                    label="Cidade"
                    helperText={errors.city?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    control={control}
                    name="zipcode"
                    label="CEP"
                    helperText={errors.zipcode?.message}
                  />
                </Grid>
              </Grid>

              <Typography
                component="h1"
                variant="body1"
                textAlign="left"
                color="black"
                sx={{ mt: 1, mb:1 }}
              >
                Dados Sociais
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CustomTextField
                    control={control}
                    name="email"
                    label="Email"
                    helperText={errors.email?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    control={control}
                    name="username"
                    label="Nome de Usuário"
                    helperText={errors.username?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    control={control}
                    name="password"
                    label="Senha do Aplicativo"
                    helperText={errors.username?.message}
                  />
                </Grid>
              </Grid>

              <Typography
                component="h1"
                variant="body1"
                textAlign="left"
                color="black"
                sx={{ mt: 1, mb:1 }}
              >
                Dados de Proxy
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CustomTextField
                    control={control}
                    name="ipProxy"
                    label="IP do Proxy"
                    helperText={errors.ipProxy?.message}
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: 'red',
                  '&:hover': {
                    backgroundColor: loading ? 'red' : 'darkred',
                  },
                }}
                disabled={!isValid || loading}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Enviar'}
              </Button>
            </Box>
          </FormProvider>
        </Box>
      </Container>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" variant="filled" sx={{ width: '100%' }}>
          Dados enviados com sucesso!
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
