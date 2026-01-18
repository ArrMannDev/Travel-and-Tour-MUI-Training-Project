import React from 'react'
import { Box } from '@mui/material'
import AccordionComponent from '../components/AccordingComponent'
import TicketSectionComponent from '../components/TicketSectionComponent'
import { flights } from '../data/flightData'

export default function FlightPage() {
  const [flightsData, setFlightsData] = React.useState(flights)
  return (
    <Box sx={{ width: '100%'}}>
      <AccordionComponent/> 
      <TicketSectionComponent flightsData={flightsData}/>
    </Box>
  )
}
