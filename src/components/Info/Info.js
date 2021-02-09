import React from "react";
import Typography from "@material-ui/core/Typography";

const Info = (props) => {
  return (
    <div style={{ paddingBottom: "2%" }}>
      <Typography variant="h2" component="h2" gutterBottom>
        Descrição
      </Typography>
      <Typography variant="subtitle1" component="h2" gutterBottom>
        A metodologia 5W2H é famosa por auxiliar no processo de desenvolvimento
        de planos de ação. Tal metodologia possui 7 perguntas direcionadoras que
        todo plano de ação deve conter:
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        - What? (O que?)
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        - Why? (Por quê?)
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        - When? (Quando?)
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        - Where? (Onde?)
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        - Who? (Quem?)
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        - How? (Como?)
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        - How Much? (Quanto?)
      </Typography>
    </div>
  );
};

export default Info;
