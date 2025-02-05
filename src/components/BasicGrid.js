import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Cow from "../assets/cow.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function BasicGrid() {
  return (
    <Box rowSpacing={1} margin={2} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <Item>
            <>
              <h2>Our Mission</h2>
              <p>
                Eureka is an advisory team dedicated to high-net-worth
                individuals looking to retire in Spain. We serve as your
                end-to-end partner, offering personalized guidance and expertise
                to ensure a seamless transition.
              </p>
            </>
          </Item>
        </Grid>
        <Grid item md={4} xs={6}>
          <Item>
            <h1>Why retire in Spain?</h1>
          </Item>
        </Grid>
        <Grid item md={4} xs={6}>
          <Item>
            <div className="container">
              <img
                src={Cow}
                alt="Cow in a field"
                style={{ height: 100, width: 100, objectFit: "cover" }}
              ></img>
            </div>
          </Item>
        </Grid>
        <Grid item md={8} xs={12}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
