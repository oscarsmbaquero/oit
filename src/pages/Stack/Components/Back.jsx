import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
} from "@mui/material";
import "./Stack.scss"

import React, { useState, useEffect } from "react";

const Back = ({ back }) => {
  const [isShown, setIsShown] = useState(false);
  console.log(back, "frontis");
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setIsShown(true);
    }, 3000);

    return () => {
      // 👇️ clear timeout when component unmounts
      clearTimeout(timeoutID);
    };
  }, []);
  return (
    <div>
      {isShown ? (
        <>
        <h6> BACKEND</h6>
        <Grid container spacing={2}
      sx={{ justifyContent: "center", display: "flex", marginTop:"20" }}              
      >
        {back.map((item) => (
          <Avatar 
               sx={{ padding:"20" }}              
                    src={item.image}
                  ></Avatar>
        
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
