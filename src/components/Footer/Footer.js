import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Paper, Input, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import { BrowserView, MobileView } from "react-device-detect";

const Footer = (props) => {
  const { className, onChange, style, ...rest } = props;

  return (
    <>
      <BrowserView>
        <Grid
          container
          style={{
            backgroundColor: "#1E1E1E",
            width: "100%",
            bottom: 0,
          }}
        >
          <Grid item xs={12} style={{ display: "flex" }}>
            <h2
              style={{
                fontFamily: "sans-serif",
                margin: "auto",
                color: "white",
                fontWeight: "500",
                marginTop: "20px",
              }}
            >
              Paraíso Animal Crematório de Animais Dómesticos
            </h2>
          </Grid>
          <Grid item xs={12} style={{ display: "flex", marginBottom: "2%" }}>
            <div style={{ margin: "auto", marginTop: "0.5%" }}>
              <a
                target="_blank"
                href="https://www.facebook.com/para.animaisdomesticos"
              >
                {" "}
                <FacebookIcon style={{ color: "white" }}></FacebookIcon>
              </a>
              <a target="_blank" href="https://www.instagram.com/para.animal/">
                <InstagramIcon
                  style={{ color: "white", marginLeft: "5px" }}
                ></InstagramIcon>
              </a>
            </div>
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              paddingLeft: "5%",
              paddingRight: "5%",
              paddingBottom: "3%",
            }}
          >
            <a
              target="_blank"
              href="https://www.google.com.br/maps/place/Para%C3%ADso+Animal+Cremat%C3%B3rio+de+Animais+Dom%C3%A9sticos/@-15.5635848,-48.024167,17z/data=!3m1!4b1!4m5!3m4!1s0x935a4d93661735e7:0x88224edbfdab1c7a!8m2!3d-15.56359!4d-48.021973"
            >
              <LocationOnIcon style={{ color: "white", fontSize: "36px" }}>
                {" "}
              </LocationOnIcon>
              <h4
                style={{
                  fontFamily: "sans-serif",
                  margin: "auto",
                  color: "white",
                  fontWeight: "300",
                }}
              >
                Núcleo Rural Lago Oeste
              </h4>
              <h4
                style={{
                  fontFamily: "sans-serif",
                  margin: "auto",
                  color: "white",
                  fontWeight: "700",
                }}
              >
                Rua 21 Chácara 892 E
              </h4>
              <h4
                style={{
                  fontFamily: "sans-serif",
                  margin: "auto",
                  color: "white",
                  fontWeight: "700",
                }}
              >
                Sobradinho/DF
              </h4>
            </a>
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              paddingLeft: "5%",
              paddingRight: "5%",
              paddingBottom: "5%",
            }}
          >
            <PhoneIcon style={{ color: "white", fontSize: "36px" }}>
              {" "}
            </PhoneIcon>
            <h4
              style={{
                fontFamily: "sans-serif",
                margin: "auto",
                color: "white",
                fontWeight: "300",
              }}
            >
              Contato
            </h4>
            <h4
              style={{
                fontFamily: "sans-serif",
                margin: "auto",
                color: "white",
                fontWeight: "700",
              }}
            >
              (61)3483-7070
            </h4>
            <h4
              style={{
                fontFamily: "sans-serif",
                margin: "auto",
                color: "white",
                fontWeight: "700",
              }}
            >
              (61)9823-0801
            </h4>
          </Grid>
          <Grid item xs={3} style={{ paddingLeft: "5%", paddingRight: "5%" }}>
            <EmailIcon style={{ color: "white", fontSize: "36px" }}>
              {" "}
            </EmailIcon>
            <h4
              style={{
                fontFamily: "sans-serif",
                margin: "auto",
                color: "white",
                fontWeight: "300",
              }}
            >
              E-mail
            </h4>
            <h4
              style={{
                fontFamily: "sans-serif",
                margin: "auto",
                color: "white",
                fontWeight: "700",
              }}
            >
              contato@paranimal.com.br
            </h4>
          </Grid>
          <Grid item xs={3} style={{ textAlign: "right" }}>
            <img
              style={{
                width: "60%",
              }}
              src="/images/passarin.png"
            ></img>
          </Grid>
        </Grid>
      </BrowserView>

      <MobileView>
        <Grid
          container
          style={{
            backgroundColor: "#1E1E1E",
            width: "100%",
            bottom: 0,
          }}
        >
          <Grid item xs={12} style={{ display: "flex" }}>
            <h2
              style={{
                fontFamily: "sans-serif",
                margin: "auto",
                textAlign: "center",
                color: "white",
                fontWeight: "500",
                marginTop: "20px",
              }}
            >
              Paraíso Animal Crematório de Animais Dómesticos
            </h2>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", marginBottom: "2%", paddingTop: "3%" }}
          >
            <div style={{ margin: "auto", marginTop: "0.5%" }}>
              <a
                target="_blank"
                href="https://www.facebook.com/para.animaisdomesticos"
              >
                {" "}
                <FacebookIcon style={{ color: "white" }}></FacebookIcon>
              </a>
              <a target="_blank" href="https://www.instagram.com/para.animal/">
                <InstagramIcon
                  style={{ color: "white", marginLeft: "5px" }}
                ></InstagramIcon>
              </a>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              paddingLeft: "5%",
              paddingRight: "5%",
              paddingBottom: "3%",
            }}
          >
            {" "}
            <a
              target="_blank"
              href="https://www.google.com.br/maps/place/Para%C3%ADso+Animal+Cremat%C3%B3rio+de+Animais+Dom%C3%A9sticos/@-15.5635848,-48.024167,17z/data=!3m1!4b1!4m5!3m4!1s0x935a4d93661735e7:0x88224edbfdab1c7a!8m2!3d-15.56359!4d-48.021973"
            >
              <LocationOnIcon style={{ color: "white", fontSize: "36px" }}>
                {" "}
              </LocationOnIcon>
              <h4
                style={{
                  fontFamily: "sans-serif",
                  margin: "auto",
                  color: "white",
                  fontWeight: "300",
                }}
              >
                Núcleo Rural Lago Oeste
              </h4>
              <h4
                style={{
                  fontFamily: "sans-serif",
                  margin: "auto",
                  color: "white",
                  fontWeight: "700",
                }}
              >
                Rua 21 Chácara 892 E
              </h4>
              <h4
                style={{
                  fontFamily: "sans-serif",
                  margin: "auto",
                  color: "white",
                  fontWeight: "700",
                }}
              >
                Sobradinho/DF
              </h4>
            </a>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              paddingLeft: "5%",
              paddingRight: "5%",
              paddingBottom: "5%",
            }}
          >
            <PhoneIcon style={{ color: "white", fontSize: "36px" }}>
              {" "}
            </PhoneIcon>
            <h4
              style={{
                fontFamily: "sans-serif",
                margin: "auto",
                color: "white",
                fontWeight: "300",
              }}
            >
              Contato
            </h4>
            <h4
              style={{
                fontFamily: "sans-serif",
                margin: "auto",
                color: "white",
                fontWeight: "700",
              }}
            >
              (61)3483-7070
            </h4>
            <h4
              style={{
                fontFamily: "sans-serif",
                margin: "auto",
                color: "white",
                fontWeight: "700",
              }}
            >
              (61)9823-0801
            </h4>
          </Grid>
          <Grid item xs={12} style={{ paddingLeft: "5%", paddingRight: "5%" }}>
            <EmailIcon style={{ color: "white", fontSize: "36px" }}>
              {" "}
            </EmailIcon>
            <h4
              style={{
                fontFamily: "sans-serif",
                margin: "auto",
                color: "white",
                fontWeight: "300",
              }}
            >
              E-mail
            </h4>
            <h4
              style={{
                fontFamily: "sans-serif",
                margin: "auto",
                color: "white",
                fontWeight: "700",
              }}
            >
              contato@paranimal.com.br
            </h4>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "right" }}>
            <img
              style={{
                width: "50%",
              }}
              src="/images/passarin.png"
            ></img>
          </Grid>
        </Grid>
      </MobileView>
    </>
  );
};

export default Footer;
