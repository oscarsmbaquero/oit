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
      <h6>FRONTEND</h6>
      <AvatarGroup spacing={1} max={12}
      sx={{ justifyContent: "center", display: "flex", marginTop:"20", flexWrap: "wrap" }}              
      >
        {front.map((item) => (
          <Avatar
                  sx={{border:0}}
                    src={item.image}
                  ></Avatar>
        
        ))}
        </AvatarGroup>
      </>   
     
    ) : (
      <div></div>
    )}
  </div>
  )
}

export default Front