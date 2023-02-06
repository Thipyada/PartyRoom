import React, { Dispatch, SetStateAction } from 'react'
// import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

// type createPartyDetail = {
//   PartyCreate: {
//     createPartyName: string
//     createPartyMembers: string
//   }

//   setPartyCreate: Dispatch<SetStateAction<{
//     createPartyName: string;
//     createPartyMembers: string;
//   }>>
// }

export default function FloatingAddButton() {

  // const { partyCreate, setPartyCreate } = props

  return (
    <div className='floatingAddButton'>
      <Fab color="primary" aria-label="add" href={`/create-party`}>
        <AddIcon />
      </Fab>
    </div>
  )
}
