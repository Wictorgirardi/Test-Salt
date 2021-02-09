import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TableData from "../../components/Table";
import Grid from "@material-ui/core/Grid";
import ModalEdit from "components/ModalEdit";
import Header from "components/Header";

const Home = (props) => {
  return (
    <>
      <Header />
      <Grid container style={{ padding: "2%" }}>
        <TableData></TableData>
      </Grid>
      <Grid item xs={12} style={{ textAlign: "end", padding: "3%", bottom: 0 }}>
        {" "}
        <ModalEdit edit={false}> </ModalEdit>
      </Grid>
    </>
  );
};

export default Home;
