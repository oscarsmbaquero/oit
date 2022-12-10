import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo4 from "../../assets/images/logo.jpg"
//import { loginUser, useDispatchAuth } from "../../../context";
//import { registerUser, useDispatchAuth } from '../../../context';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import Swal from "sweetalert2";
//import logo4 from "../../../assets/images/logo.jpg";
import { MenuItem, Select } from "@mui/material";
import emailjs from '@emailjs/browser';
//import Swal from "sweetalert2";


// const loginInitialState = {
//   email: "",
//   password: "",
//   name: "",
//   // surname: "",
//   account_type: "",
//   image:""
// };

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.primary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/oscarsmbaquero">
       OIT -Soluciones y Servicios Tecnológicos.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  //const navigate = useNavigate();
  //const dispatch = useDispatchAuth();
  let navigate = useNavigate();

  //const [registerForm, setRegisterForm] = useState(loginInitialState);

  // const handleRegisterForm = (event) => {
  //   console.log(event.target,'target');
  //   const { name, value } = event.target;
  //   console.log(name,value,'name');
  //   setRegisterForm((prevState) => ({ ...prevState, [name]: value }));
  // };
  //  console.log(registerForm,'registerForm')
 
  //console.log(dispatch,22);
  //enviar login al server
  const sendMail = (e) => {
    e.preventDefault();
    console.log('Entro')  
      
    try {

      console.log(e.target.mail.value);
      emailjs
        .sendForm(
          "service_kqpmbaa",
          "template_2c1n23x",
          e.target,
          "dso8n6rVU1ADlfbV4"
        )
        .then((response) => console.log(response));
      // Swal.fire({
      //   //title: "Success!",
      //   text: " Gracias por la reserva. Le confirmaremos su reserva lo antes posible",
      //   icon: "success",
      //   confirmButtonText: "Ok",
      // });
      navigate("/");
    } catch (error) {
      navigate("/");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            //marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            onSubmit={sendMail}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="mail"
              label="Mail"
              type="mail"
              id="mail"
              // onChange={handleRegisterForm}
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              label="Name"
              type="text"
              id="name"
              //onChange={handleRegisterForm}
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="question"
              label="Text"
              type="text"
              id="password"
              //onChange={handleRegisterForm}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 0 }}
            >
              Enviar
            </Button>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}
