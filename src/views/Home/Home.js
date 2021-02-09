import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useForm } from "react-hook-form";
import TableData from '../../components/Table'

const Home = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => console.log("hey");

  const [open, setOpen] = React.useState(false);

  return <form onSubmit={handleSubmit(onSubmit)}>
    <TableData></TableData>
  </form>;
};

export default Home;
