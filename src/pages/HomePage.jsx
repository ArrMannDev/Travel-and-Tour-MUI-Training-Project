import { Box,Typography } from '@mui/material'
import React from 'react'
import BannerComponent from '../components/BannerComponent'
import CardShowcase from '../components/CardShowcase'
import thailandImage from "../assets/image/thailand.png"
import chinaImage from "../assets/image/china.png"
import qatarImage from "../assets/image/qatar.png"
import AirlineShowcaseComponent from '../components/AirlineShowcaseComponent'
import MAILogo from "../assets/image/MAI.png"

export default function HomePage() {
  const bannerTitle ="Your next take-off awaits"
  const bannerSubtitle="Join 300M+ travelers • Search 600+ airlines • Award-winning service"

  const cardInfo = [
    {
      cardImage: thailandImage,
      cardTitle: "White Temple, Thailand",
      cardDescription: "White Temple is a Buddhist temple in Chiang Mai, Thailand. It is a popular tourist attraction and is known for its beautiful architecture and stunning views of the city.",
    },
    {
      cardImage: chinaImage,
      cardTitle: "Great China Wall, China",
      cardDescription: "The Great China Wall is a series of fortifications built by the Chinese government to protect its borders from invaders. It is one of the most iconic landmarks in the....",
    },
    {
      cardImage: qatarImage,
      cardTitle: "Skyline of Doha, Qatar",
      cardDescription: "The skyline of Doha, Qatar is a collection of towers and buildings that form the city's skyline. It is one of the most iconic landmarks in the world and is a UNESCO....",
    },
  ]

  const airlineImages =[
    MAILogo,
    MAILogo,
    MAILogo,
    MAILogo,
  ]

  return (
    <Box>
      <BannerComponent bannerTitle={bannerTitle} bannerSubtitle={bannerSubtitle}/>
      <CardShowcase cardTopic="Famous Places of Countries" cardInfo={cardInfo}/>
      <AirlineShowcaseComponent airlineTopic="Domestic Airlines" airlineImages={airlineImages}/>
      <AirlineShowcaseComponent airlineTopic="International Airlines" airlineImages={airlineImages}/>
    </Box>

  )
}
