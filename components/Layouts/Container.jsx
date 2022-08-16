import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";
import Image from "next/image";
import BackGround from "./BackGround";

export default function FixedContainer({ backgroundColor, ...props }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            bgcolor: backgroundColor,
            height: "100vh",
          }}
        >
          {props.children}
        </Box>
      </Container>
      {/* <BackGround /> */}
    </React.Fragment>
  );
}

FixedContainer.propTypes = {
  backgroundColor: PropTypes.string,
};

FixedContainer.defaultProps = {
  backgroundColor: "transparent",
};
