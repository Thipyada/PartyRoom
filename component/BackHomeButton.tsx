import Button from '@mui/material/Button'
import React from 'react'

export default function BackHomeButton() {
  return (
    <Button
      variant='contained'
      href={`/`}
    >
      Back to Home
    </Button>
  )
}
