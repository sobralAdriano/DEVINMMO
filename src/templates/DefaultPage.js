import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Header } from "../components/Header";

export const DefaultPage = ({ children }) => {
  return (
    <>
      <Header />
      <Box marginTop={2}>
        <Container>{children}</Container>
      </Box>
    </>
  );
};