import { Box, Typography } from '@mui/material'
import React from 'react'
import CardComponent from './CardComponent'

export default function CardShowcase({cardTopic,cardInfo}) {
  return (
    <Box sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "20px",
        gap: "20px",
    }}>
        <Typography variant="h3">{cardTopic}</Typography>
        
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
        }}>
            {cardInfo.map((cardInfo,index)=>{
                return(
                    <CardComponent key={index} cardImage={cardInfo.cardImage} cardTitle={cardInfo.cardTitle} cardDescription={cardInfo.cardDescription}/>
                )
            })}
            
        </Box>

    </Box>
  )
}
