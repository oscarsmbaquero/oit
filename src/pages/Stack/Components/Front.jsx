import {  Avatar, Card, CardContent, CardHeader, CardMedia, Grid } from '@mui/material';

import React,{useState, useEffect} from 'react'
import "./Stack.scss"
const Front = ({front}) => {
    const [isShown, setIsShown] = useState(false);
   console.log(front,'frontis')
    useEffect(() => {
        const timeoutID = setTimeout(() => {
          setIsShown(true);
        }, 2000);
    
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
      <Grid container spacing={2}>
        {front.map((item) => (
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
                title={item.title}
              />
              <CardContent>
              <Avatar variant='rounded'
              style={{ justifyContent: "center", display: "flex" }}              
                    aria-label="recipe"
                    src={item.image}
                  ></Avatar>
              </CardContent>
              
             
            </Card>
          </Grid>
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