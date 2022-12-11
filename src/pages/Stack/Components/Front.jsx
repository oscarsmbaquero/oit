import {  Avatar, Stack, Card, CardContent, CardHeader, CardMedia, Grid } from '@mui/material';

import React,{useState, useEffect} from 'react'
import "./Stack.scss"
const Front = ({front}) => {
    const [isShown, setIsShown] = useState(false);
   console.log(front,'frontis')
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
        <>
      <h6>FRONTEND</h6>
      <Grid container spacing={2}
      sx={{ justifyContent: "center", display: "flex", marginTop:"20" }}              
      >
        {front.map((item) => (
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
  )
}

export default Front