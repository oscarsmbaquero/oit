import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
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
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Grid } from "@mui/material";
import logo from "../../assets/images/logo.jpg";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SWContext } from "../../context/context";
import { MDBIcon } from "mdb-react-ui-kit";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const { stack } = useContext(SWContext);
  const [expanded, setExpanded] = React.useState(false);

  console.log(stack, "stack");
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  return (
    <div>
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
                    src={logo}
                  ></Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <a href="" className="me-4 text-reset">
                  <MDBIcon color="secondary" fab icon="github" />
                </a>
                <a href="" className="me-4 text-reset">
                <MDBIcon color='primary' fab icon='google' />
                </a>
                  </IconButton>
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
              <CardActions sx={{ justifyContent: "space-between" }}>
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
                {/* <IconButton aria-label="share">
                <ShareIcon />
              </IconButton> */}
                <div className="text-warning mb-1 me-2">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                </div>
                <span>{getRandomInt(25)}</span>
                
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  {/* <ExpandMoreIcon /> */}
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep
                    skillet over medium-high heat. Add chicken, shrimp and
                    chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate
                    and set aside, leaving chicken and chorizo in the pan. Add
                    pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and
                    fragrant, about 10 minutes. Add saffron broth and remaining
                    4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with
                    artichokes and peppers, and cook without stirring, until
                    most of the liquid is absorbed, 15 to 18 minutes. Reduce
                    heat to medium-low, add reserved shrimp and mussels, tucking
                    them down into the rice, and cook again without stirring,
                    until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don&apos;t open.)
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and
                    then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
