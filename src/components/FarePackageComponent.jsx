import React from 'react'
import { Stack, Typography } from '@mui/material'
import FareCardComponent from './FareCardComponent'

export default function FarePackageComponent({farePackages}) {
  return (
    <Stack direction="row" spacing={2} alignItems="flex-center" flexWrap={"wrap"} sx={{ padding: "40px"}}>
        <FareCardComponent farePackages={farePackages}/>
    </Stack>
  )
}
