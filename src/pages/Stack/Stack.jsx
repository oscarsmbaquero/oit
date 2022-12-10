import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Grid } from "@mui/material";
import { MDBIcon } from "mdb-react-ui-kit";
import Badge from "react-bootstrap/Badge";
const BASEURL = "https://62852cc03060bbd347460bff.mockapi.io/";




export default function Stack() {
  const [isShown, setIsShown] = useState(false);
  const [stack, setStack] = useState([]);  

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get(`${BASEURL}/oitStack`);
      setStack(res.data);
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setIsShown(true);
    }, 1000);

    return () => {
      // 👇️ clear timeout when component unmounts
      clearTimeout(timeoutID);
    };
  }, []);

  return (
    <div>
      {isShown ? (
        <Grid container spacing={2}>
        {stack.map((item) => (
          <Grid item xs={12} md={6} lg={4}>
            <Card
              elevation={5}
              sx={{
                borderRadius: "4px",
                justifyContent: "flex-start",
                flex: "1 0 auto",
                // marginLeft: "5px",
                marginTop: "10px",
                flexDirection: "column",
                flexWrap: "wrap",
                ":hover": {
                  boxShadow: 20, // theme.shadows[20]
                },
              }}
            >
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
                    
                  ></Avatar>
                }
                action={
                  <>
                    <div className="text-warning mb-1 me-2">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                    </div>
                    <span>45</span>
                  </>
                }
                title={item.title}
                subheader={item.fecha}
              />
              <CardMedia
                component="img"
                height="194"
                image={item.image}
                alt={item.image}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-evenly" }}>
              <Badge bg="success" text="bold">Stack:</Badge>
                {item.stack.map((i) => (
                  <Avatar
                    sx={{
                      width: 24,
                      height: 24,
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
                    aria-label="recipe"
                    src={i.image}
                  ></Avatar>
                ))}
                <Badge bg="primary" text="bold">Links:</Badge>
                {item.links.map((o) => (
                 
                    <IconButton aria-label="settings">
                      {o.name === "Git" && (
                        <a href={o.linkGit} >
                          <MDBIcon color="secondary" fab icon="github" />
                        </a>
                      )}
                      {o.name === "Vercel" && (
                        <a href={o.linkVer} >
                          <MDBIcon color="danger" fab icon="google" />
                        </a>
                      )}
                    </IconButton>
                  
                ))}
              </CardActions>
            </Card>
          </Grid>
        ))}
        </Grid>
      ) : (
        <div></div>
      )}
    </div>
  );
}
