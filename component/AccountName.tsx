import React from 'react'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

// type userName = {
//   usernameInput: string
// }
export default function AccountName() {
  // props: userName
  // const { usernameInput } = props

  return (
    <div className='accountDisplay'>
      <Chip className='accountChip'
        // avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}

        // usernameInput
        // label={ }
        variant="outlined"
      />
    </div>
  )
}
