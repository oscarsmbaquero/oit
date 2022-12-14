import {  Avatar, Stack, Card, CardContent, CardHeader, CardMedia, Grid } from '@mui/material';
import { AvatarGroup } from '@mui/material';
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
      <h1>FRONTEND</h1>
      <Grid
            container
            spacing={1}
            sx={{ justifyContent: "center", display: "flex", marginTop: "40px" }}
          >
      <AvatarGroup spacing={1} max={12}
      sx={{ justifyContent: "center", display: "flex", marginTop:"20",marginBottom:"40px", flexWrap: "wrap" }}              
      >
        {front.map((item) => (
          <Avatar
                  sx={{border:0}}
                    src={item.image}
                  ></Avatar>
        
        ))}
        </AvatarGroup>
        </Grid>
      </>   
     
    ) : (
      <div></div>
    )}
  </div>
  )
}

export default Front