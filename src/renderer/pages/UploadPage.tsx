import * as React from "react";
import FileButton from "../components/FileButton";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function UploadPage() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          border: 1,
          borderColor: "divider",
          borderRadius: 2,
          bgcolor: "secondary.main",
          mt: 8,
        }}
      >
        <Typography variant="h1" textAlign="center" sx={{ mt: 8 }}>
          Enviar arquivo
        </Typography>
        <Typography variant="h2" textAlign="center" sx={{ mt: 3, mx: 2 }}>
          Selecione arquivos com extensão .csv ou .xlsx
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mt: 10, mb: 5 }}>
          <FileButton />
        </Typography>
      </Box>
    </Box>
  );
}
