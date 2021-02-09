import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import TableData from "../../components/Table";
import Grid from "@material-ui/core/Grid";
const Home = (props) => {
  return (
    <>
      <Grid container style={{padding: '3%'}}>
        <TableData></TableData>
      </Grid>
    </>
  );
};

export default Home;
