import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
  } from "@mui/material";
  import "./Stack.scss";
  
  import React, { useState, useEffect } from "react";
  
  const Back = ({ generic }) => {
    const [isShown, setIsShown] = useState(false);
    console.log(generic, "frontis");
    useEffect(() => {
      const timeoutID = setTimeout(() => {
        setIsShown(true);
      }, 5000);
  
      return () => {
        // 👇️ clear timeout when component unmounts
        clearTimeout(timeoutID);
      };
    }, []);
    return (
      <div>
        {isShown ? (
          <>
            <h2>Others</h2>
            <Grid
              container
              spacing={1}
              sx={{
                justifyContent: "center",
                display: "flex",
                //marginTop: "40px",
              }}
            >
              {generic.map((item) => (
                <Avatar sx={{ margin: 1 }} src={item.image} key={item.id}></Avatar>
              ))}
            </Grid>
          </>
        ) : (
          <div></div>
        )}
      </div>
    );
  };
  
  export default Back;
  