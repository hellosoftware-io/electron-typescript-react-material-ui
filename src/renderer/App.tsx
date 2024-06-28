import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import theme from "./theme";
import SimpleBar from "./components/SimpleBn";
import Header from "./components/AppBar";
import Form from '../renderer/components/Form'; 
import UploadPage from "./pages/UploadPage";

export default function App(): JSX.Element {
  const [value, setValue] = React.useState('single');
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <main style={{ height:'100%', display: 'flex', flexDirection:'column'}}>
        <Header/>
          { value === 'single' && <Form/>} 
          { value === 'multiple' && <UploadPage/>}
          { value === 'config' && <Box>Config</Box>}
        <SimpleBar setValue={setValue}/>
        </main>

    </ThemeProvider>
  );
}
