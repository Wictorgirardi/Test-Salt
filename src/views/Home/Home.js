import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import TableData from "../../components/Table";
import Grid from "@material-ui/core/Grid";
import ModalEdit from "components/ModalEdit";
import Header from "components/Header";
import Info from "components/Info";

const Home = (props) => {
  return (
    <>
      <Header />

      <Grid container style={{ padding: "2%" }}>
        <Info></Info>
        <TableData></TableData>
      </Grid>
      <Grid item xs={12} style={{ textAlign: "end", padding: "2%", bottom: 0 }}>
        {" "}
        <ModalEdit edit={false}> </ModalEdit>
      </Grid>
    </>
  );
};

export default Home;
